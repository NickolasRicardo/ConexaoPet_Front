import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Button } from "antd";
import React from "react";

interface ICardPet {
  personName: string;
  personPicture: string;
  personRate: string;
  personDistance: string;
}

export const CardPerson = (values: ICardPet) => {
  return (
    <>
      <Grid container style={{ marginTop: 10 }}>
        <Grid
          item
          xs={4}
          sm={2}
          md={2}
          style={{
            border: "solid",
            borderRight: "none",
            textAlign: "center",
          }}
        >
          <img
            src={values.personPicture}
            width={"50%"}
            height={"50%"}
            style={{
              maxHeight: 150,
              maxWidth: 150,
              minWidth: 100,
              minHeight: 100,
            }}
            alt={"personName"}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          style={{ padding: 20, border: "solid" }}
        >
          <Typography>
            <h1 style={{ fontSize: 20 }}>{values.personName} </h1>
            <br />
            Distância: {values.personDistance}km
            <br />
            Classificação: {values.personRate}/5
            <br />
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          style={{
            padding: 20,
            border: "solid",
            borderLeft: "none",
            borderTopRightRadius: 10,
            borderEndEndRadius: 10,
          }}
        >
          <Button style={{ width: "100%" }}>{"Ver Mais"}</Button>
          <br />
          <br />
          <Button style={{ width: "100%" }}>{"Contratar"}</Button>
        </Grid>
      </Grid>
    </>
  );
};
