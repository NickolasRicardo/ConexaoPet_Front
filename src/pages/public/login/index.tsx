import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../Hooks/authenticator";
import * as styles from "./styles";
import { Grid } from "@mui/material";
import { Button } from "antd";
import Logo from "../../../Assets/ConexaoPet-logo.png";

// VALIDATION
const SignInSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email("O e-mail inserido é inválido.")
    .required("Obrigatório"),
  password: Yup.string()
    .min(2, "Senha muito curta!")
    .max(50, "Senha muito longa!")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "A senha deverá conter 8 characters, um em caixa alta, um numero and um caracter especial"
    )
    .required("Obrigatório"),
});

// HTML PAGE
function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async (values: any) => {
    setError(false);
    setLoading(true);
    const { userEmail, password } = values;

    try {
      await signIn({ useremail: userEmail, password: password });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid
        container
        style={{
          backgroundImage: `url(https://wallpaperset.com/w/full/e/5/d/93425.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <Grid item lg={12} xs={12} md={12} sm={12}>
          <styles.Content>
            <Formik
              initialValues={{
                userEmail: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                handleSignIn(values);
              }}
            >
              {({ errors, touched, isValid }) => (
                <styles.StyledForm>
                  <styles.FormContent>
                    <img
                      src={Logo}
                      style={{
                        width: 250,
                        display: "flex",
                        alignSelf: "center",
                        paddingBottom: 50,
                      }}
                      alt={"Logo Conexão Pet"}
                    />
                    <styles.StyledField name="userEmail" placeholder="Email" />
                    {errors.userEmail && touched.userEmail ? (
                      <div>{errors.userEmail}</div>
                    ) : null}
                    <br />
                    <styles.StyledField
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <br />
                    <styles.ButtonCss type="submit" disabled={!isValid}>
                      {loading ? "carregando..." : "Entrar"}
                    </styles.ButtonCss>
                    <br />
                    {error && (
                      <p style={{ color: "red" }}>
                        {" "}
                        Usuário ou senha invalidas{" "}
                      </p>
                    )}

                    <Button
                      style={{
                        backgroundColor: "",
                        width: "80%",
                        alignSelf: "center",
                        marginTop: 0,
                      }}
                      href="/register"
                    >
                      Novo usuário
                    </Button>
                  </styles.FormContent>
                </styles.StyledForm>
              )}
            </Formik>
          </styles.Content>
        </Grid>
      </Grid>
    </>
  );
}

export { LoginPage };
