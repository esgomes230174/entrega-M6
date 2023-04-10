import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../contexts/UserContext";
import { resetPasswordSchema } from "../../schemas/user";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

import { FormHelperText } from "@mui/material";
import { Container } from "./styles";

const ResetPassword = () => {
  const { passwordReset } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmitFunction = (data: any) => {
    passwordReset(data);
  };

  return (
    <Container>
      <div className="box">
        <h2>Resetar senha</h2>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label="Email"
            type="text"
            placeholder="Digitar email"
            fieldName="email"
            {...register("email")}
          />
          <FormHelperText error>{errors.email?.message}</FormHelperText>

          <Input
            label="Código recebido por email"
            type="text"
            placeholder="Digitar código"
            fieldName="token"
            {...register("token")}
          />
          <FormHelperText error>{errors.token?.message}</FormHelperText>

          <Input
            label="Senha"
            type="password"
            placeholder="Digitar senha"
            fieldName="password"
            {...register("password")}
          />
          <FormHelperText error>{errors.password?.message}</FormHelperText>

          <Button
            children="Resetar a senha"
            backgroundColor="#4529E6"
            backgroundColorHover="#5126EA"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
