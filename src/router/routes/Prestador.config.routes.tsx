import React from "react";

import { TestPrestador } from "../../pages/private/Prestador/Test";

import { Home as HomeIcon } from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";

export interface IRoute {
  index: number | null;
  path: string;
  component: React.ComponentType<any>;
  roles: string[];
}
export interface IRouteMenu {
  index: number;
  path?: string;
  Icon?: any;
  label: string;
  roles: string[];
  menu: "lateral" | "header";
  subMenu?: IRouteMenu[];
}

export const routesPrestador: IRoute[] = [
  {
    index: 1,
    path: "/prestador",
    component: TestPrestador,
    roles: ["prestador"],
  },
];

export const routesPrestadorMenu: IRouteMenu[] = [
  {
    index: 1,
    path: "/prestador",
    label: "Home",
    Icon: HomeIcon,
    roles: ["prestador"],
    menu: "lateral",
  },
];
