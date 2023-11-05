import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "../../layouts";

// import { getRouteByID } from '@hooks/getFuncionalidades';

import { IRoute } from "../routes/Shared.config.routes";
import { useAuth } from "../../hooks/authenticator";
import { routesShared } from "../routes/Shared.config.routes";

function RenderRoutes(route: IRoute, key: number, user: any) {
  const ComponentRoute = route.component;
  // if (getRouteByID(route.id)) {

  if (route.roles.includes(user.typeUser.toLowerCase())) {
    return (
      <Route
        key={key}
        path={route.path}
        exact
        component={() => <ComponentRoute />}
      />
    );
  }
  // }
}

function RoutePrivateShared() {
  const { user } = useAuth();
  //console.log(routesShared);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to={routesShared[0].path} />}
        />

        {routesShared.map((route, i) => RenderRoutes(route, i, user))}

        <Route
          path="*"
          component={() => {
            return <Redirect to={routesShared[0].path} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default RoutePrivateShared;
