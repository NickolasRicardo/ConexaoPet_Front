import React, { useEffect } from "react";

import {
  LocationCity,
  Person,
  Search,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Button, Dropdown, Input, Space, Typography, message } from "antd";
import type { MenuProps } from "antd";

import { CardPerson } from "src/components/cardPerson";
import Background from "src/assets/background.svg";

// HTML PAGE
function BuscaPrestadores() {
  useEffect(() => {
    console.log("aqui");
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "Localização",
      key: "1",
      icon: <LocationCity />,
    },
    {
      label: "Nome",
      key: "2",
      icon: <Person />,
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <>
      <div
        style={{
          background: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          position: "relative",
        }}
      >
        <Grid container>
          <Grid item xs={0} sm={1} md={1} />
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
              marginTop: 10,
              padding: 10,
            }}
          >
            <Grid container>
              <Grid item xs={0} sm={2} md={2}></Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Grid container alignContent={"center"}>
                  <Grid item xs={6} sm={12} style={{ marginTop: 10 }}>
                    <Typography>Pesquisar:</Typography>
                  </Grid>
                  <Grid item xs={6} sm={2} style={{ marginTop: 10 }}>
                    <Dropdown menu={menuProps}>
                      <Button>
                        <Space>Pesquisar por:</Space>
                      </Button>
                    </Dropdown>
                  </Grid>
                  <Grid item xs={9} sm={8} style={{ marginTop: 10 }}>
                    <Input
                      type={"text"}
                      style={{ width: "100%" }}
                      placeholder="Buscar"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={2}
                    sm={2}
                    style={{ marginTop: 10, paddingLeft: 5 }}
                  >
                    <Button>
                      <Search />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={3} md={3} />
          <Grid item xs={0} sm={1} md={1} />
          <Grid item xs={12} sm={6} md={6} style={{ margin: 10 }}>
            <CardPerson
              personName="João da Silva"
              personDistance="4"
              personDistrict="Jardim do Vale"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              personRate="5"
              personPrice="25"
            />
            <CardPerson
              personName="João da Silva"
              personDistance="4"
              personDistrict="Jardim do Vale"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              personRate="5"
              personPrice="25"
            />
            <CardPerson
              personName="João da Silva"
              personDistance="4"
              personDistrict="Jardim do Vale"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              personRate="5"
              personPrice="25"
            />
            <CardPerson
              personName="João da Silva"
              personDistance="4"
              personDistrict="Jardim do Vale"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              personRate="5"
              personPrice="25"
            />
            <CardPerson
              personName="José dos Santos"
              personDistance="2"
              personDistrict="Jardim do Vale 2"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
              personRate="3.5"
              personPrice="25"
            />
            <CardPerson
              personName="Ana dos Santos Silva"
              personDistance="4"
              personDistrict="Chacaras selles"
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
              personRate="4.5"
              personPrice="25"
            />
            <CardPerson
              personName="Joana da Silva"
              personDistance="40"
              personDistrict="Jardim do Vale 2 "
              personDescription="Adoro animais e cuido como se fossem meus."
              personPicture="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
              personRate="2.5"
              personPrice="25"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { BuscaPrestadores };

