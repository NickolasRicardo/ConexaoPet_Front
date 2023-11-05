import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";

import { useAuth } from "../../../Hooks/authenticator";
import {
  ButtonCss,
  StyledField as Field,
  StyledForm as Form,
  Container,
  FormContent,
  FormTitle,
  Content,
} from "./styles";
import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { Button } from "antd";

import logo from "../../../Assets/ConexaoPet-logo.png";
import { useHistory } from "react-router-dom";
// VALIDATION
const SignInSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email("O e-mail inserido é inválido.")
    .required("Obrigatório"),

  userName: Yup.string().min(2, "Nome muito curto!").required("Obrigatório"),
  CPF: Yup.string()
    .min(2, "Nome muito curto!")
    .required("Obrigatório")
    .test("CpfValidation", "O CPF digitado é inválido", (values) =>
      cpf.isValid(values)
    ),
  password: Yup.string()
    .min(2, "Senha muito curta!")
    .max(50, "Senha muito longa!")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "A senha deverá conter 8 characters, um em caixa alta, um numero and um caracter especial"
    )
    .required("Obrigatório"),
  passwordConfirmation: Yup.string().test(
    "passwords-match",
    "As senhas não combinam",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

// HTML PAGE
function CreateUserPage() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { signIn } = useAuth();
  const navigate = useHistory();

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
          <Content>
            <Formik
              initialValues={{
                userEmail: "",
                password: "",
                userName: "",
                userPhone: "",
                CPF: "",
                passwordConfirmation: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                handleSignIn(values);
              }}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <FormContent>
                    <img
                      src={logo}
                      style={{
                        width: 250,
                        display: "flex",
                        alignSelf: "center",
                        paddingBottom: 50,
                      }}
                      alt={"Logo Conexão Pet"}
                    />
                    <Typography>Nome:</Typography>

                    <Field name="userName" placeholder="Nome completo" />
                    {errors.userName && touched.userName ? (
                      <div>{errors.userName}</div>
                    ) : null}
                    <br />
                    <Typography>Email:</Typography>

                    <Field name="userEmail" placeholder="Email" />
                    {errors.userEmail && touched.userEmail ? (
                      <div>{errors.userEmail}</div>
                    ) : null}
                    <br />
                    <Typography>Telefone:</Typography>

                    <Field name="userPhone" placeholder="Telefone" />
                    {errors.userPhone && touched.userPhone ? (
                      <div>{errors.userPhone}</div>
                    ) : null}
                    <br />
                    <Typography>CPF:</Typography>
                    <Field name="CPF" placeholder="Documento" maxLength={11} />
                    {errors.CPF && touched.CPF ? <div>{errors.CPF}</div> : null}
                    <br />
                    <Typography>Senha:</Typography>

                    <Field
                      name="password"
                      placeholder="Senha"
                      type="password"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <br />

                    <Typography>Confirmar senha:</Typography>

                    <Field
                      name="passwordConfirmation"
                      placeholder="Confirmar senha:"
                      type="password"
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <div>{errors.passwordConfirmation}</div>
                    ) : null}
                    <br />
                    <ButtonCss type="submit" disabled={!isValid}>
                      {loading ? "Carregando..." : "Criar conta"}
                    </ButtonCss>
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
                      onClick={() => navigate.push("/login")}
                    >
                      Voltar
                    </Button>
                  </FormContent>
                </Form>
              )}
            </Formik>
          </Content>
        </Grid>
      </Grid>
    </>
  );
}

export { CreateUserPage };
