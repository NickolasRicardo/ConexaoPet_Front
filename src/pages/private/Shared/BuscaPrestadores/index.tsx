import {
  LocationCity,
  Person,
  Search,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Button, Dropdown, Input, Space, Typography, message } from "antd";
import React, { useEffect } from "react";
import type { MenuProps } from "antd";
import { CardPerson } from "../../../../components/CardPerson";
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
      <Grid
        container
        style={{
          background:
            "url(https://as2.ftcdn.net/v2/jpg/05/25/78/33/1000_F_525783364_wLHN1SMAnXb2WB9mITpxW2aPjLZhDXJr.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "93.2vh",
        }}
      >
        <Grid item xs={0} sm={1} md={1}></Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          style={{
            backgroundColor: "white",
            minHeight: 600,
            maxWidth: "100%",

            boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
          }}
        >
          <Grid container style={{ marginTop: 10, padding: 30 }}>
            <Grid item xs={12} sm={2} md={2}></Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Grid container>
                <Grid item sm={12}>
                  <Typography>Pesquisar:</Typography>
                </Grid>
                <Grid item sm={2}>
                  <Dropdown menu={menuProps}>
                    <Button>
                      <Space>Pesquisar por:</Space>
                    </Button>
                  </Dropdown>
                </Grid>
                <Grid item sm={8}>
                  <Input
                    type={"text"}
                    style={{ width: "100%" }}
                    placeholder="Buscar"
                  />
                </Grid>
                <Grid item sm={2}>
                  <Button>
                    <Search />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} style={{ marginTop: 30 }}>
              <CardPerson
                personName="João da Silva"
                personDistance="4"
                personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
                personRate="5"
              />
              <CardPerson
                personName="José dos Santos"
                personDistance="2"
                personPicture="https://cdn-icons-png.flaticon.com/512/4086/4086679.png"
                personRate="3"
              />
              <CardPerson
                personName="Ana dos Santos Silva"
                personDistance="4"
                personPicture="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
                personRate="4"
              />
              <CardPerson
                personName="Joana da Silva"
                personDistance="40"
                personPicture="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
                personRate="2"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={3} md={3} />
      </Grid>
    </>
  );
}

export { BuscaPrestadores };

