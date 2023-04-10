import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input";
import Button from "../Button";
import ModalContainer from "../ModalContainer";
import { UserContext } from "../../contexts/UserContext";
import { forgotPasswordSchema } from "../../schemas/user";

import { FormHelperText } from "@mui/material";
import { Buttons } from "../DeleteAnnouncementModal/styles";

const ForgotPasswordModal = () => {
  const { forgotPasswordModal, setForgotPasswordModal, forgotPassword } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmitFunction = (data: any) => {
    forgotPassword(data);
  };

  return (
    <ModalContainer
      openModal={forgotPasswordModal}
      closeModal={() => setForgotPasswordModal(false)}
      title="Recuperar senha"
    >
      <p>
        Informe seu email para enviarmos o procedimento de recuperação de senha
      </p>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Email"
          type="text"
          placeholder="Digitar email"
          fieldName="email"
          {...register("email")}
        />
        <FormHelperText error>{errors.email?.message}</FormHelperText>

        <Buttons>
          <div className="final-buttons">
            <Button
              children="Cancelar"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#868E96"
              fontColor="#495057"
              fontColorHover="#FFFFFF"
              onClick={() => setForgotPasswordModal(false)}
              type="button"
            />
            <Button
              children="Enviar"
              backgroundColor="#4529E6"
              backgroundColorHover="#5126EA"
              type="submit"
            />
          </div>
        </Buttons>
      </form>
    </ModalContainer>
  );
};

export default ForgotPasswordModal;
