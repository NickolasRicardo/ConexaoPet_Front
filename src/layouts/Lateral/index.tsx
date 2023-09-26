import React, { ReactNode, useLayoutEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MenuMobile from "../../components/MenuMobile";
import MenuDesktop from "../../components/MenuDesktop";

import { Container, ContainerMobile } from "./styles";
interface IProps {
  children: ReactNode;
}

export default function ResponsiveMenu({ children }: IProps) {
  const [mobile, setMobile] = useState(false);
  const matches = useMediaQuery("(max-width: 800px)");

  useLayoutEffect(() => {
    //console.log("aqui");
    setMobile(matches);
  }, [matches]);

  return mobile ? (
    <MenuMobile>
      <ContainerMobile> {children}</ContainerMobile>
    </MenuMobile>
  ) : (
    <MenuDesktop>
      <Container> {children} </Container>
    </MenuDesktop>
  );
}
