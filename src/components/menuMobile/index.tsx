import React, { ReactNode, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Grid } from "@material-ui/core";

import { useStyles, StyledMenuItem } from "./styles";
import ItemMenu from "./itemMenu";

import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Drawer from "@material-ui/core/Drawer";

import { useAuth } from "../../hooks/authenticator";
import { IRouteMenu } from "../../router/routes/Shared.config.routes";

const StyledMenu = withStyles({
  paper: {
    padding: "0px !important",
    border: "1px solid #F1F1F1",
    borderRadius: 0,
    width: 100,
    background: "#F1F1F1",
    "& .MuiListItem-root.MuiListItem-root:hover": { background: "#000023" },
    "& .MuiList-root": {
      padding: 0,
    },
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    {...props}
  />
));

const MenuMobile = ({ children }: any) => {
  const history = useHistory();

  const { user, signOut } = useAuth();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [routes, setRoutes] = React.useState<IRouteMenu[]>();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [value, setValue] = React.useState<any>(0);
  const location = useLocation();

  const handleChangeActiveAction = (value: number) => {
    setValue(value);
  };

  const handleClick = () => {
    setAnchorEl(divRef.current);
    handleChangeActiveAction(5);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleEditUser = () => {
    handleChangeActiveAction(0);
    history.push("/usuario/editar");
  };

  return (
    <>
      {children}

      <Drawer
        className={classes.drawer}
        style={{ bottom: 55 }}
        open={open}
        onClose={() => setOpen(open ? false : true)}
      ></Drawer>

      <div
        style={{
          position: "absolute",
          bottom: 55,
          right: 0,
        }}
        ref={divRef}
      ></div>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          width: "100%",
          background: "#f1f1f1",
          height: 44,
          zIndex: 1000,
          bottom: 0,
          position: "fixed",
        }}
      >
        <BottomNavigation value={value} className={classes.root}>
          {routes
            ?.filter(
              (route) =>
                route.menu === "header" &&
                route.roles.includes(user.typeUser ?? "")
            )
            .map((routeMenuHeader) => (
              <ItemMenu
                key={routeMenuHeader.index}
                Icon={routeMenuHeader.Icon as React.ReactElement}
                label={routeMenuHeader.label ? routeMenuHeader.label : ""}
                path={routeMenuHeader.path ? routeMenuHeader.path : ""}
                exact
              />
            ))}
        </BottomNavigation>
      </Grid>
    </>
  );
};

export default MenuMobile;
