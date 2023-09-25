import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { getColors } from "../../@styles/colorsTheme";
//Components CSS
export const Container = styled.div``;
//Components CSS

//Material-UI
const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      minHeight: "72px !important",
    },
    drawerOpen: {
      background: getColors()?.primaria,
      width: drawerWidth,
      minHeight: 72,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      minHeight: 72,
      background: getColors()?.primaria,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      backgroundColor: getColors()?.primaria,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 72,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
  })
);
//Material-UI
