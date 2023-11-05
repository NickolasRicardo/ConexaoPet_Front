import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Rating,
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
      <Grid container style={{ marginTop: 10, border: "solid" }}>
        <Grid xs={4} sm={2} md={2} alignSelf={"center"}>
          <Grid container style={{ alignItems: "center" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={values.personPicture}
                style={{
                  maxHeight: 72,
                  maxWidth: 72,
                  minWidth: 72,
                  minHeight: 72,
                  boxShadow: " 0px 4px 5px 1px rgba(0,0,0,0.10)",
                }}
                alt={"personName"}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{
                textAlign: "center",
                marginTop: 10,
              }}
            >
              <Rating
                name="personRate"
                value={Number(values.personRate)}
                size="large"
                precision={0.5}
                style={{ fontSize: "1rem !important" }}
                readOnly
              />
            </Grid>
          </Grid>
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
