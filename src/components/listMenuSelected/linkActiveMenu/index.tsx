import React, { ReactNode } from "react";

// import { Container } from './styles';
import { useStyles } from "../styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouteMatch } from "react-router-dom";
import { getColors } from "../../../@styles/colorsTheme";

import { LinkMenu } from "./styles";

interface IProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
  children: ReactNode;
}

const LinkActiveMenu: React.FC<IProps> = ({
  label,
  to,
  activeOnlyWhenExact,
  children,
  ...rest
}) => {
  const classes = useStyles();

  let match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <LinkMenu to={to} {...rest}>
      <ListItem
        button
        selected={match ? true : false}
        // classes={{ selected: classes.itemActive }}
        {...rest}
      >
        <div className={classes.itemList}>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText
            style={{ color: getColors()?.background + "95" }}
            primary={label}
          />
        </div>
      </ListItem>
    </LinkMenu>
  );
};

export default LinkActiveMenu;
