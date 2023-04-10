import * as yup from "yup";

export const userSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .max(11, "Campo deve conter apenas números"),
  phone: yup.string().required("Campo obrigatório"),
  birth_date: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
      "Insira uma data DD/MM/YYYY"
    ),
  description: yup.string().required("Campo obrigatório"),
  cep: yup.string().required("Campo obrigatório"),
  state: yup.string().required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Campo obrigatório"),
  complement: yup.string().required("Campo obrigatório"),
  account: yup.string(),
  password: yup.string().required("Campo obrigatório"),
  confirm_password: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const loginSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
});

export const resetPasswordSchema = yup.object({
  email: yup.string().required("Campo obrigatório"),
  token: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});
