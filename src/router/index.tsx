import React from "react";
import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "./PublicRouter.routes";
import PrivateRoute from "./PrivateRouter.routes";

// Paginas publicas
import { LoginPage } from "../pages/public/login";

// Paginas privadas
import { Layout } from "../layout";

import { IPath, paths } from "./path.routes";
import { Test } from "../pages/private/Test";

const CreateRoute = (route: IPath, key: number) => {
  return (
    <PrivateRoute
      key={key}
      path={route.path}
      component={route.component}
      isPrivate
    />
  );
};

function Router() {
  return (
    <Switch>
      <PublicRoute path="/login" exact component={LoginPage} />

      <Layout>
        <PrivateRoute
          path="/"
          exact
          component={() => <Redirect to="/" />}
          isPrivate
        />

        <PrivateRoute exact path="/" component={Test} isPrivate />
      </Layout>
    </Switch>
  );
}

export default Router;
