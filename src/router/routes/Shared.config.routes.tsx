import React from "react";

import { TestGeral } from "@pages/private/Shared/Test";

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

export const routesShared: IRoute[] = [
  {
    index: 1,
    path: "/",
    component: TestGeral,
    roles: ["prestador", "tutor"],
  },
];

export const routesSharedMenu: IRouteMenu[] = [
  {
    index: 1,
    path: "/",
    label: "Home",
    Icon: HomeIcon,
    roles: ["prestador", "tutor"],
    menu: "lateral",
  },
];
