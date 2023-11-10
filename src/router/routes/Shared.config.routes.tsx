import React from "react";
import { Home as HomeIcon, Person, Pets } from "@mui/icons-material";

import { TestGeral } from "../../pages/private/Shared/Test";

import { MeuPerfil } from "../../pages/private/Shared/MeuPerfil";
import { MeusPets } from "../../pages/private/Shared/MeusPets";
import { BuscaPrestadores } from "../../pages/private/Shared/BuscaPrestadores";
import { ConfirmacaoServico } from "../../pages/private/Shared/ConfirmacaoServico";
import { PagamentoAceito } from "@src/pages/private/Shared/PagamentoAceito";

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
    path: "/Home",
    name: "Home",
    component: BuscaPrestadores,
    roles: ["tutor"],
  },
  {
    index: 4,
    path: "/confirmar/:id",
    name: "Confirmar Serviço",
    component: ConfirmacaoServico,
    roles: ["tutor"],
  },
  {
    index: 4,
    path: "/pagamento/success",
    name: "Pagamento realizado com sucesso!",
    component: PagamentoAceito,
    roles: ["tutor"],
  },
  // {
  //   index: 2,
  //   path: "/home",
  //   name: "Home",
  //   component: TestGeral,
  //   roles: ["tutor"],
  // },
  // {
  //   index: 3,
  //   path: "/Pets",
  //   name: "Meus Pets",
  //   component: MeusPets,
  //   roles: ["tutor"],
  // },
  {
    index: 4,
    path: "/Perfil",
    name: "Meu Perfil",
    component: MeuPerfil,
    roles: ["tutor"],
  },
  // {
  //   index: 5,
  //   path: "/home",
  //   name: "Home",
  //   component: TestGeral,
  //   roles: ["tutor"],
  // },
  // {
  //   index: 6,
  //   path: "/home",
  //   name: "Home",
  //   component: TestGeral,
  //   roles: ["tutor"],
  // },
  // {
  //   index: 7,
  //   path: "/teste",
  //   name: "teste",
  //   component: TestGeral2,
  //   roles: ["tutor"],
  // },
];

export const routesSharedMenu: IRouteMenu[] = [
  {
    index: 1,
    path: "/Home",
    label: "Home",
    name: "Home",
    Icon: HomeIcon,
    roles: ["tutor"],
    menu: "lateral",
  },
  // {
  //   index: 2,
  //   path: "/teste",
  //   label: "teste",
  //   name: "tester2",
  //   Icon: HomeIcon,
  //   roles: ["tutor"],
  //   menu: "lateral",
  // },
  // {
  //   index: 3,
  //   path: "/Pets",
  //   label: "Meus Pets",
  //   name: "Meus Pets",
  //   Icon: Pets,
  //   roles: ["tutor"],
  //   menu: "lateral",
  // },
  {
    index: 4,
    path: "/Perfil",
    label: "Meu Perfil",
    name: "Meu Perfil",
    Icon: Person,
    roles: ["tutor"],
    menu: "lateral",
  },
  // {
  //   index: 5,
  //   path: "/teste",
  //   label: "teste",
  //   name: "tester2",
  //   Icon: HomeIcon,
  //   roles: ["tutor"],
  //   menu: "lateral",
  // },
  // {
  //   index: 6,
  //   path: "/teste",
  //   label: "teste",
  //   name: "tester2",
  //   Icon: HomeIcon,
  //   roles: ["tutor"],
  //   menu: "lateral",
  // },
  // {
  //   index: 7,
  //   path: "/teste",
  //   label: "teste",
  //   name: "tester2",
  //   Icon: HomeIcon,
  //   roles: ["tutor"],
  //   menu: "lateral",
  // },
];
