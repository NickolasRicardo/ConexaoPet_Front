import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "@src/pages/public/Login";
import { CreateUserPage } from "@src/pages/public/CreateAccount";
import { LandingPage } from "@src/pages/public/LandingPage";
import { Styles } from "@src/styles/styles";
import Header from "@src/components/header";
import path from "path";
import { Teste } from "@src/pages/public/Teste";

interface IRoute {
  path: string;
  name?: string;
  component: React.ComponentType<any>;
}

const routes: IRoute[] = [
  {
    path: "/",
    name: "home",
    component: () => <LandingPage />,
  },
  {
    path: "/teste",
    name: "teste",
    component: () => <Teste />,
  },
  {
    path: "/login",
    name: "login",
    component: () => <LoginPage />,
  },
  {
    path: "/register",
    name: "register",
    component: () => <CreateUserPage />,
  },
];

function RouteWithSubRoutes(route: IRoute, key: number) {
  return (
    <Route key={key} path={route.path} exact component={route.component} />
  );
}

function RouteAuth() {
  return (
    <>
      {routes.map((route, i) =>
        route.name === "home" ? (
          <Suspense fallback={null}>
            <Styles />
            <Header />
            <Switch>{RouteWithSubRoutes(route, i)}</Switch>
          </Suspense>
        ) : (
          <Suspense key={i} fallback={null}>
            <Styles />
            <Switch>{RouteWithSubRoutes(route, i)}</Switch>
          </Suspense>
        )
      )}
    </>
  );
}

export default RouteAuth;
