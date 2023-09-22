import React from "react";
import { Test } from "../pages/private/Test";
export interface IPath {
  name: string;
  path: string;
  component: React.ReactNode | null;
}

export const paths = [
  {
    name: "Teste",
    path: "/",
    component: <Test />,
  },
];
