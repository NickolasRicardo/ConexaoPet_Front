import React, { useEffect } from "react";
import * as S from "./styles";
import { Grid } from "@mui/material";
import { User } from "./object";
import { Typography } from "antd";
import { CardPet } from "@src/components/cardPet";
import Background from "@src/assets/background.svg";

// HTML PAGE
function MeuPerfil() {
  useEffect(() => {
    console.log("aqui");
  }, []);

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
          <Grid item xs={0} sm={2} md={2}></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              marginBottom: 30,
              boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
              borderRadius: 10,
              marginTop: 30,
            }}
          >
            <Grid container style={{ padding: 30 }}>
              <Grid
                item
                xs={12}
                md={4}
                sm={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src={User.profilePicture}
                        alt="profile"
                        style={{
                          minHeight: 160,
                          width: 160,
                          maxWidth: 250,
                          maxHeight: 250,
                          height: "80%",
                          borderRadius: "100%",
                          overflow: "hidden",
                          borderWidth: 3,
                          borderColor: "black",
                          border: "1px solid black",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {User.nome}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} sm={12}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{
                      textAlign: "left",
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {"Sobre mim"}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    style={{ color: "black", fontSize: "18px", marginTop: 10 }}
                  >
                    <Typography>
                      {User.profileDescription
                        .split("\n")
                        .map((paragrafo, index) => (
                          <p key={index}>{paragrafo}</p>
                        ))}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={2} md={2}></Grid>
          <Grid item xs={0} sm={2} md={2}></Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            style={{
              backgroundColor: "white",
              maxWidth: "100%",
              boxShadow: " 0px 14px 15px 5px rgba(0,0,0,0.26)",
              padding: 30,
              borderRadius: 10,
              marginBottom: 10,
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
                marginTop: 10,
              }}
            >
              {"Meus pets"}
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://img.freepik.com/fotos-premium/retrato-de-estudio-de-um-lindo-gatinho-preto-e-branco-criado-com-generative-ai_762026-47066.jpg?w=360"
                  kind="SRD"
                  name="Gato"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://img.freepik.com/fotos-premium/retrato-de-estudio-de-um-lindo-gatinho-preto-e-branco-criado-com-generative-ai_762026-47066.jpg?w=360"
                  kind="SRD"
                  name="Gato"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg"
                  kind="SRD"
                  name="Totó"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                style={{ color: "black", fontSize: "18px", marginTop: 10 }}
              >
                <CardPet
                  picture="https://s2-vidadebicho.glbimg.com/KZTd_8gIkkiAwT2cJ0QARS3bMlY=/0x0:1200x775/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fb623579cd474803aedbbbbae014af68/internal_photos/bs/2022/K/z/dguBMXRMOsX8WmbGQNAQ/2022-09-16-caes-miniatura-tendencia-pode-nao-ser-saudavel-para-os-animais.jpeg"
                  kind="SRD"
                  name="Princesa"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export { MeuPerfil };
