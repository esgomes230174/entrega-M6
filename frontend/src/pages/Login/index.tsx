import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../contexts/UserContext";
import { loginSchema } from "../../schemas/user";

import ForgotPasswordModal from "../../components/ForgotPasswordModal";
import { Footer } from "../../components/Footer";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import { Input } from "../../components/Input";

import { FormHelperText } from "@mui/material";
import { Container, Password } from "./styles";

const Login = () => {
  const { loginUser, setForgotPasswordModal } = useContext(UserContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitFunction = (data: any) => {
    loginUser(data);
  };

  return (
    <>
      <NavBar />
      <Container>
        <div className="box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              label="Email"
              type="text"
              placeholder="Digitar email"
              fieldName="email"
              {...register("email")}
            />
            <FormHelperText error>{errors.email?.message}</FormHelperText>

            <Password>
              <Input
                label="Senha"
                type="password"
                placeholder="Digitar senha"
                fieldName="password"
                {...register("password")}
              />
              <FormHelperText error>{errors.password?.message}</FormHelperText>
              <h4 onClick={() => setForgotPasswordModal(true)}>
                Esqueci minha senha
              </h4>
            </Password>

            <Button
              children="Entrar"
              backgroundColor="#4529E6"
              backgroundColorHover="#5126EA"
              type="submit"
            />
            <h3>Ainda não possui conta?</h3>
            <Button
              children="Cadastrar"
              backgroundColor="#ffffff"
              backgroundColorHover="#212529"
              border="#0B0D0D"
              fontColor="#0B0D0D"
              fontColorHover="#FDFDFD"
              type="button"
              onClick={() => navigate("/register")}
            />
          </form>
        </div>
      </Container>
      <ForgotPasswordModal />
      <Footer />
    </>
  );
};

export default Login;
