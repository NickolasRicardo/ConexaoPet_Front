import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "src/layouts";

// import { getRouteByID } from '@hooks/getFuncionalidades';

import { routesPrestador } from "src/router/routes/Prestador.config.routes";

import { useAuth } from "src/hooks/authenticator";
import { IRoute } from "src/router/routes/Shared.config.routes";

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

function RoutePrestador() {
  const { user } = useAuth();
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to={routesPrestador[0].path} />}
        />

        {routesPrestador.map((route, i) => RenderRoutes(route, i, user))}

        <Route
          path="*"
          component={() => {
            return <Redirect to={routesPrestador[0].path} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default RoutePrestador;
