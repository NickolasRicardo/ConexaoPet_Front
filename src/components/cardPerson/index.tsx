import { Grid, Rating } from "@mui/material";
import React from "react";

interface ICardPet {
  personName: string;
  personPicture: string;
  personRate: string;
  personDistrict: string;
  personDistance: string;
  personDescription: string;
  personPrice: string;
}

export const CardPerson = (values: ICardPet) => {
  return (
    <>
      <Grid
        container
        style={{
          marginTop: 10,
          border: "solid",
          borderRadius: 10,
          paddingTop: 15,
          backgroundColor: "White",
        }}
      >
        <Grid xs={12} sm={2} md={2} alignSelf={"center"}>
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
        <Grid item xs={12} sm={6} md={6} style={{ padding: 20 }}>
          <Grid container style={{ width: "100%" }}>
            <Grid
              md={"auto"}
              xs={12}
              style={{
                fontSize: 20,
                marginRight: 10,
                alignSelf: "flex-end",
              }}
            >
              <p
                style={{
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  hyphens: "auto",
                }}
              >
                {values.personName}
              </p>
            </Grid>
            <Grid
              xs={12}
              md={6}
              style={{
                fontSize: 16,
                alignSelf: "flex-end",
                fontFamily: "Poppins",
                fontWeight: "100",
              }}
            >
              {values.personDistrict} - {values.personDistance}km <br />
            </Grid>
            <Grid xs={12} md={12} style={{ marginTop: 10 }}>
              {values.personDescription}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          style={{
            padding: 20,
            textAlign: "end",
            alignSelf: "end",
            fontWeight: "bold",
            color: "#5067E6",
          }}
        >
          R${values.personPrice}/por noite
        </Grid>
      </Grid>
    </>
  );
};
