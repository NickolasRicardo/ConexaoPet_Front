import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Menu } from "antd";

import * as S from "./styles";
import { useAuth } from "@src/hooks/authenticator";
import { IRouteMenu } from "@src/router/routes/Shared.config.routes";
import { routesSharedMenu } from "@src/router/routes/Shared.config.routes";
import { routesPrestadorMenu } from "@src/router/routes/Prestador.config.routes";
import { Home, House, Logout, Pets } from "@mui/icons-material";
import Icon, { HomeOutlined } from "@ant-design/icons";
import logo from "@src/assets/ConexaoPet-logo.png";

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
    loadingPaths();
    setCurrentPath(location.pathname);
  }, [location]);

  const { signOut } = useAuth();

  const sair = async () => {
    signOut();
  };

  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={[currentPath]}
        style={{
          flexWrap: "wrap",
          alignItems: "center",
          borderBottom: 0,
          backgroundColor: "#a0e66c",
          zIndex: 99999,
        }}
      >
        {paths.map((path) => (
          <Menu.Item
            onClick={() => history.push(path.path)}
            key={path.path}
            icon={<Icon component={path.Icon as any} />}
          >
            {path.name}
          </Menu.Item>
        ))}
        <Menu.Item onClick={signOut} icon={<Icon component={Logout as any} />}>
          Logout
        </Menu.Item>
        <li style={{ order: -1, marginRight: "50px", marginLeft: "50px" }}>
          <img
            src={logo}
            style={{
              maxWidth: "150px",
              paddingTop: "10px",
            }}
            alt={"Logo Conexão Pet"}
          />
        </li>
      </Menu>
      <S.Container>{children}</S.Container>
    </>
  );
};

export { Layout };
