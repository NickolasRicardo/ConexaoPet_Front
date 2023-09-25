import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ListItem2 from "@material-ui/core/ListItem";

import { useStyles } from "./styles";

import { getColors } from "../../@styles/colorsTheme";
import { useAuth } from "../../Hooks/authenticator";
import LogoutIcon from "@mui/icons-material/Logout";

import { routesPrestadorMenu as routesGEAdminMenu } from "../../router/routes/Prestador.config.routes";
import { routesSharedMenu } from "../../router/routes/Shared.config.routes";
import { IRouteMenu } from "../../router/routes/Shared.config.routes";

interface IListProps {
  menuOpen: boolean;
  isDesktop: boolean;
  openToMenu?: Function;
}

const SelectedListItem: React.FC<IListProps> = ({
  menuOpen,
  isDesktop,
  openToMenu,
}) => {
  const { user } = useAuth();
  const { signOut } = useAuth();

  const classes = useStyles();
  const [, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(0);
  const [linkRoutes, setLinkRoutes] = useState<IRouteMenu[]>([]);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
    const value = index === open ? 0 : index;
    setOpen(value);

    isDesktop && openToMenu && openToMenu();
  };

  useEffect(() => {
    if (user.typeUser === "tutor") {
      setLinkRoutes(routesSharedMenu);
    } else if (user.typeUser === "prestador") {
      setLinkRoutes(routesGEAdminMenu);
    }
  }, [user]);

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem2
          button
          onClick={signOut} // classes={{ selected: classes.itemActive }}
        >
          <div className={classes.itemList}>
            <ListItemIcon>
              <LogoutIcon htmlColor={getColors()?.background + "95"} />
            </ListItemIcon>
            <ListItemText
              style={{ color: getColors()?.background + "95" }}
              primary={"Sair"}
            />
          </div>
        </ListItem2>
      </List>
    </div>
  );
};

export default SelectedListItem;
