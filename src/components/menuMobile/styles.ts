import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import { MenuItem } from "@material-ui/core";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

import { getColors } from "../../@styles/colorsTheme";
export const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    position: "fixed",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 4,
    height: 54,
    background: "#f1f1f1",
    zIndex: 1000,
    "& .MuiBottomNavigationAction-root": {
      padding: 0,
      color: "#40455a80",
      minWidth: 0,
    },
    "& .MuiBottomNavigationAction-root .Mui-selected": {
      minWidth: 0,
      "& .MuiBottomNavigationAction-wrapper": {
        borderBottom: "5px solid #40455A",
      },
    },
    "& .Mui-selected": {
      color: getColors()?.secundaria,
      "& .MuiBottomNavigationAction-wrapper": {
        marginBottom: 0,
        borderBottom: "5px solid #40455A",
        "& .MuiSvgIcon-root": {
          color: getColors()?.secundaria,
        },
      },
    },

    "& .MuiBottomNavigationAction-wrapper": {
      paddingTop: 2,
      "& .MuiSvgIcon-root": {
        fontSize: 30,
      },
    },
  },
  drawer: {
    width: 600,
    flexShrink: 0,
    whiteSpace: "nowrap",
    minHeight: "72px !important",
    bottom: 55,
    "& .MuiDrawer-root .MuiDrawer-modal .makeStyles-drawer-2": {
      bottom: 55,
    },
    ".MuiDrawer-root ": {
      bottom: 55,
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent",
      bottom: 55,
    },
    "& .MuiDrawer-paper ": {
      height: "auto",
      bottom: 55,
      width: "100%",
      backgroundColor: getColors()?.secundaria,
    },
    "& .MuiPaper-elevation16": {
      boxShadow: "none",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

//Material-UI

export const Container = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      minHeight: 0,
      fontWeight: "normal",
      fontSize: "1rem",
      width: 150,
      marginRight: theme.spacing(2),
      "&:hover": {
        color: "#4D4F5C",
        opacity: 1,
      },
      "&$selected": {
        color: "#4D4F5C",
        "& .MuiSvgIcon-root": {
          marginLeft: 5,
          color: "#4D4F5C",
        },
      },
      "&:focus": {
        color: "#4D4F5C",
      },
      "& .MuiTab-wrapper": {
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
      },
      "& .MuiSvgIcon-root": {
        marginLeft: 5,
        color: "#616161",
        justifyContent: "flex-end",
      },
      "& .MuiTab-labelIcon": {
        minHeight: 48,
      },
      "& .MuiTab-indicator": {
        height: 4,
      },
    },
    selected: {},
  })
)(Tab);

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: getColors()?.secundaria,
    "& .MuiListItemText-root": {
      flex: "inherit",
    },
    "& .MuiListItemText-primary": {
      minWidth: 0,
      padding: 5,
      color: theme.palette.common.white,
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      color: theme.palette.common.white,
      opacity: 0.5,
      padding: 5,
    },
    "&:focus": {},
  },
}))(MenuItem);

//Material-UI
