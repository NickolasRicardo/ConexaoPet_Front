import React, { useEffect, useState } from "react";

import {
  LocationCity,
  Person,
  Search,
  VerifiedUserOutlined,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import {
  Button,
  Dropdown,
  Input,
  Space,
  Spin,
  Typography,
  message,
} from "antd";
import type { MenuProps } from "antd";

import Services, { IProvidersTable } from "./services";

import { CardPerson } from "@src/components/cardPerson";
import Background from "@src/assets/background.svg";
import { IProviders } from "@src/@interfaces/IProviders";

// HTML PAGE
function BuscaPrestadores() {
  const [prestadores, setPrestadores] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    LoadPrestadores();
  }, []);

  const LoadPrestadores = async () => {
    let services = new Services();
    setLoading(true);
    const { error, response } = await services.ListPaged();

    if (!error && response) {
      setPrestadores(response);
      setLoading(false);
    }
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
            md={10}
            lg={8}
            xl={8}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              boxShadow: " 0px 10px 10px 0px rgba(0,0,0,0.26)",
              borderRadius: 10,
              marginTop: 10,
              padding: 10,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
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
          <Grid
            item
            xs={12}
            sm={8}
            md={10}
            lg={8}
            xl={8}
            style={{ margin: 10 }}
          >
            <Spin spinning={loading} />
            {prestadores.map((item: IProviders) => {
              return (
                <CardPerson
                  personId={item.id ?? 0}
                  personName={item.useName ?? ""}
                  personDistance={item.useDistance ?? ""}
                  personDistrict={item.useDistrict ?? ""}
                  personDescription={item.useProfileDescription ?? ""}
                  personPicture={item.useProfilePicture ?? ""}
                  personRate="5"
                  personPrice={item.pbkPrice ?? ""}
                />
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { BuscaPrestadores };
