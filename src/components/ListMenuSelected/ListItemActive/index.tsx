import React, { ReactNode } from "react";
import { useRouteMatch } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";

interface IProps {
  onClick: Function;
  to: string;
  children: ReactNode;
}

const ListItemActive = ({ onClick, to, children }: IProps) => {
  let match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <ListItem selected={match ? true : false} button onClick={() => onClick()}>
      {children}
    </ListItem>
  );
};

export default ListItemActive;
