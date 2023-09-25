import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Menu } from "antd";

import * as S from "./styles";
import { useAuth } from "../Hooks/authenticator";
import { IRouteMenu } from "../router/routes/Shared.config.routes";
import { routesSharedMenu } from "../router/routes/Shared.config.routes";
import { routesPrestadorMenu } from "../router/routes/Prestador.config.routes";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState("");
  let history = useHistory();
  const location = useLocation();

  const { user } = useAuth();

  const [paths, setPaths] = useState<IRouteMenu[]>([]);

  const loadingPaths = () => {
    if (user.typeUser?.toLocaleLowerCase() === "prestador") {
      setPaths(routesPrestadorMenu);
    } else {
      setPaths(routesSharedMenu);
    }
  };

  useEffect(() => {
    console.log("aaa");
    loadingPaths();
    setCurrentPath(location.pathname);
  }, [location]);

  const { signOut } = useAuth();

  const sair = async () => {
    signOut();
  };

  return (
    <>
      <Menu mode="horizontal" selectedKeys={[currentPath]}>
        {paths.map((path) => (
          <Menu.Item onClick={() => history.push(path.path)} key={path.path}>
            {path.name}
          </Menu.Item>
        ))}
        <Menu.Item onClick={() => sair()}>Logout</Menu.Item>
      </Menu>
      <div>{children}</div>
    </>
  );
};

export { Layout };
