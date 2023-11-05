import React, { useEffect, useState } from "react";

import { useStyles } from "./styles";

import ItemMenu from "./itemMenu";

import {
  routesSharedMenu,
  IRouteMenu,
} from "../../router/routes/Shared.config.routes";
import { routesPrestadorMenu } from "../../router/routes/Prestador.config.routes";

import { useAuth } from "../../hooks/authenticator";

export default function MenuHeader() {
  const { user } = useAuth();
  const [routes, setRoutes] = useState<IRouteMenu[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (user.typeUser === "tutor") {
      setRoutes(routesSharedMenu);
    } else if (user.typeUser === "prestador") {
      setRoutes(routesPrestadorMenu);
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        {routes
          .filter(
            (route) =>
              route.menu === "header" &&
              route.roles.includes(user.typeUser ?? "")
          )
          .map((routeMenuHeader) => (
            <ItemMenu
              key={routeMenuHeader.index}
              path={routeMenuHeader.path ? routeMenuHeader.path : ""}
              Icon={routeMenuHeader.Icon as React.ReactElement}
              label={routeMenuHeader.label ? routeMenuHeader.label : ""}
            />
          ))}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            height: 64,
          }}
        ></div>
      </div>
    </div>
  );
}
