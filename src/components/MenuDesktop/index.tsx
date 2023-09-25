import React from "react";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";

import { getColors } from "../../@styles/colorsTheme";
import MenuList from "../ListMenuSelected";
import { useStyles } from "./styles";

const Menu = ({ children }: any) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(!open ? true : false);
  };

  const openTopMenu = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={classes.toolbar}></div>
          <Divider />
          <MenuList
            menuOpen={open}
            isDesktop
            openToMenu={() => openTopMenu()}
          />
          <Divider />
        </Grid>
      </Drawer>
      <main className={classes.content} style={{ padding: 0 }}>
        {children}
      </main>
    </div>
  );
};

export default Menu;
