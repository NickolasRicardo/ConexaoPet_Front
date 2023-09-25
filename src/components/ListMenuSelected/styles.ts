import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { getColors } from "../../@styles/colorsTheme";
//Components CSS
export const Container = styled.div``;
//Components CSS

//Material-UI
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 500,
      backgroundColor: getColors()?.primaria,
    },

    itemList: {
      marginLeft: 8,
      paddingTop: 5,
      paddingBottom: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

//Material-UI
