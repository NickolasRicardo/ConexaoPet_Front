import { Grid, Rating } from "@mui/material";
import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

interface ICardPet {
  personId: number;
  personName: string;
  personPicture: string;
  personRate: string;
  personDistrict: string;
  personDistance: string;
  personDescription: string;
  personPrice: string;
  buttonNotVisible?: boolean;
}

export const CardPerson = (values: ICardPet) => {
  const navigate = useHistory();
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
        <Grid xs={12} sm={12} md={2} alignSelf={"center"}>
          <Grid container style={{ alignItems: "center" }}>
            <Grid
              item
              xs={12}
              sm={12}
              xl={12}
              md={12}
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={values.personPicture}
                style={{
                  maxWidth: 72,
                  minWidth: 72,
                  maxHeight: 100,
                  minHeight: 100,
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
        <Grid item xs={12} sm={12} md={6} style={{ padding: 20 }}>
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
              sm={12}
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
          sm={12}
          md={2}
          style={{
            padding: 25,
            textAlign: "end",
            alignSelf: "end",
            fontWeight: "bold",
            color: "#5067E6",
          }}
        >
          {Number(values.personPrice) > 0
            ? `R$${values.personPrice}/por noite`
            : ""}
        </Grid>
        {!values.buttonNotVisible === true ? (
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            style={{
              padding: 20,
              textAlign: "end",
              alignSelf: "end",
              fontWeight: "bold",
              color: "#5067E6",
            }}
          >
            <Button
              onClick={() => navigate.push(`/confirmar/${values.personId}`)}
            >
              {" "}
              Contratar{" "}
            </Button>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
};
