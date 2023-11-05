import React from "react";
import { AuthProvider } from "./authenticator";

import { SnackbarProvider } from "notistack";

const AppProvider = ({ children }: any) => (
  <AuthProvider>
    <SnackbarProvider maxSnack={4}>{children}</SnackbarProvider>
  </AuthProvider>
);

export default AppProvider;
