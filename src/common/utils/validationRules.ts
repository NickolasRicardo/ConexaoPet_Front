import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Nome é um campo obrigatório";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "O endereço de e-mail está inválido";
  }
  if (!values.message) {
    errors.message = "Mensagem é obrigatória";
  }
  return errors;
}
