import React from "react";

import { TestGeral } from "../../pages/private/Shared/Test";

import { Home as HomeIcon } from "@mui/icons-material";
import PaymentsIcon from "@mui/icons-material/Payments";
import { TestGeral2 } from "../../pages/private/Shared/Test2";

export interface IRoute {
  index: number | null;
  path: string;
  name?: string;
  component: React.ComponentType<any>;
  roles: string[];
}
export interface IRouteMenu {
  index: number;
  path: string;
  name?: string;
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
    name: "home",
    component: TestGeral,
    roles: ["tutor"],
  },
  {
    index: 1,
    path: "/teste",
    name: "tester",
    component: TestGeral2,
    roles: ["tutor"],
  },
];

export const routesSharedMenu: IRouteMenu[] = [
  {
    index: 1,
    path: "/",
    label: "Home",
    name: "home",
    Icon: HomeIcon,
    roles: ["tutor"],
    menu: "lateral",
  },
  {
    index: 2,
    path: "/teste",
    label: "tester",
    name: "tester",
    Icon: HomeIcon,
    roles: ["tutor"],
    menu: "lateral",
  },
];
