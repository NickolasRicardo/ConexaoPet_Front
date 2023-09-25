import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../../pages/public/Login";
import { CreateUserPage } from "../../pages/public/CreateAccount";

interface IRoute {
  path: string;
  name?: string;
  component: React.ComponentType<any>;
}

const routes: IRoute[] = [
  {
    path: "/",
    name: "login",
    component: () => <LoginPage />,
  },
  {
    path: "/login",
    name: "login",
    component: () => <LoginPage />,
  },
  {
    path: "/register",
    name: "register",
    component: () => <h1>Register auth</h1>,
  },

  {
    path: "*",
    component: () => <Redirect to="/login" />,
  },
];

function RouteWithSubRoutes(route: IRoute, key: number) {
  return (
    <Route key={key} path={route.path} exact component={route.component} />
  );
}

function RouteAuth() {
  return (
    <div>
      <Switch>{routes.map((route, i) => RouteWithSubRoutes(route, i))}</Switch>
    </div>
  );
}

export default RouteAuth;
