import React from "react";

import { TestPrestador } from "../../pages/private/Prestador/Test";

import { Home as HomeIcon } from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";
import { IRoute, IRouteMenu } from "./Shared.config.routes";

export const routesPrestador: IRoute[] = [
  {
    index: 1,
    path: "/prestador",
    name: "prestador",
    component: TestPrestador,
    roles: ["prestador"],
  },
];

export const routesPrestadorMenu: IRouteMenu[] = [
  {
    index: 1,
    path: "/prestador",
    label: "Home",
    name: "home",
    Icon: HomeIcon,
    roles: ["prestador"],
    menu: "lateral",
  },
];
