import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Grid } from "@mui/material";
import { Modal, Typography } from "antd";
import { CardPet } from "@src/components/cardPet";
import Background from "@src/assets/background.svg";
import Service from "@src/services";
import { IUser } from "@src/@interfaces/IUser";
import { useAuth } from "@src/hooks/authenticator";
import { IPet } from "@src/@interfaces/IPet";
import { Field, Formik, FormikProps } from "formik";
import Services from "@src/services";
// HTML PAGE
function MeuPerfil() {
  const [user, setUser] = useState<IUser>();
  const id = localStorage.getItem("@app:userID");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [petImage, setPetImage] = useState<any>();
  const [visible, setVisible] = useState(false);

  const loadUser = async () => {
    const userServices = new Service.UserService();

    const { error, response } = await userServices.Find({ id: Number(id) });
    console.log(response);
    if (!error && response) {
      setUser(response);
    }
  };

  const createPet = async (values: any) => {
    const service = new Services.PetService();
    setLoading(true);
    try {
      let formData = new FormData();

      formData.append("petPictureArchive", petImage);

      console.log(values.petPictureArchive);

      formData.append("petName", values.petName);
      formData.append("petBreed", values.petBreed);
      formData.append("petGender", "1");
      formData.append("petVaccines", "");
      formData.append("petComments", "");
      formData.append("petIsActive", "1");
      formData.append("useId", id ?? "");
      formData.append("pknId", "1");

      await service.Upload(formData);
    } catch (err) {
      setError(true);
    } finally {
      loadUser();
      setLoading(false);
      setVisible(false);
    }
  };

  useEffect(() => {
    loadUser();
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
                        src={user?.useProfilePicture}
                        alt="profile"
                        style={{
                          minHeight: 160,
                          width: 160,
                          maxWidth: 250,
                          maxHeight: 250,
                          minWidth: 250,
                          height: 160,
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
                    {user?.useName}
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
                      {user?.useProfileDescription
                        ?.split("\n")
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
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
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
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  style={{ textAlign: "end" }}
                >
                  <S.ButtonCss
                    onClick={() => setVisible(true)}
                    style={{ width: "50%", marginTop: 0 }}
                  >
                    Cadastrar novo pet
                  </S.ButtonCss>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              {user?.petPets?.map((item: IPet) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{ color: "black", fontSize: "18px", marginTop: 10 }}
                  >
                    <CardPet
                      picture={item.petPicture}
                      kind={item.petBreed}
                      name={item.petName}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Modal
          title="Novo Pet"
          open={visible}
          onCancel={() => setVisible(false)}
          footer={null}
        >
          <Formik
            initialValues={{}}
            onSubmit={(values) => {
              createPet(values);
            }}
          >
            {(props: FormikProps<any>) => (
              <S.StyledForm className="Auth-form">
                <S.FormContent>
                  Nome do animal:
                  <S.StyledField name="petName" placeholder="Nome do animal" />
                  <br />
                  Raça do animal:
                  <S.StyledField name="petBreed" placeholder="Raça do animal" />
                  <br />
                  Foto do animal:
                  <S.StyledField
                    name="petPictureArchive"
                    type="file"
                    value={undefined}
                    onChange={(e: any) => setPetImage(e.target.files[0])}
                  />
                  <br />
                  <br />
                  <S.ButtonCss type="submit">
                    {loading ? "carregando..." : "Salvar"}
                  </S.ButtonCss>
                  <br />
                </S.FormContent>
              </S.StyledForm>
            )}
          </Formik>
        </Modal>
      </div>
    </>
  );
}

export { MeuPerfil };
