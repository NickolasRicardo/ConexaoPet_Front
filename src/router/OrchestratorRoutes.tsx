import React, { useEffect } from "react";
// import { GetRoutesPermissions } from '@hooks/auth';

import RouterShared from "./privateShared/SharedRouter";
import RouterPrestador from "./prestador/PrestadorRouter";

import RoutePublic from "./public/PublicRouter.routes";

import { useAuth } from "src/hooks/authenticator";
import { getColors } from "src/@styles/colorsTheme";

// import OperacionalLayout from '@layouts/Cliente';

import { LoadingProvider } from "src/hooks/LoadingContext";
import { Layout as AdminLayout } from "src/layouts/index";

import { Spin } from "antd";

const DrawLayoutClienteAdmin = (Route: any) => {
  return (
    <AdminLayout>
      <LoadingProvider>
        <Route />
      </LoadingProvider>
    </AdminLayout>
  );
};

function OrchestratorRoutes() {
  const { user } = useAuth();
  //console.log(user);
  if (!!user) {
    if (user.typeUser?.toLowerCase() === "tutor") {
      //console.log(RouterShared);
      return DrawLayoutClienteAdmin(RouterShared);
    } else if (user.typeUser?.toLowerCase() === "prestador") {
      return DrawLayoutClienteAdmin(RouterPrestador);
    }

    return <RoutePublic />;
  } else {
    return <RoutePublic />;
  }
}

export default OrchestratorRoutes;
