import React from "react";
import { TestPrestador } from "../pages/private/Prestador/Test";
export interface IPath {
  name: string;
  path: string;
  component: React.ReactNode | null;
}

export const paths = [
  {
    name: "Teste",
    path: "/",
    component: <TestPrestador />,
  },
];
