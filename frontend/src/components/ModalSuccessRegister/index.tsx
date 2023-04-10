import React, { useContext } from "react";
import ModalContainer from "../ModalContainer";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ModalSuccessRegister = () => {
  const { registerModal, setRegisterModal } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <ModalContainer
      title="Sucesso!"
      openModal={registerModal}
      closeModal={() => setRegisterModal(false)}
    >
      <span></span>
      <h4>Sua conta foi criada com sucesso!</h4>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
      <div>
        <Button
          backgroundColor="#4529E6"
          fontColor="#FFFFFF"
          backgroundColorHover="#FFFFFF"
          fontColorHover="#4529E6"
          border="#4529E6"
          onClick={() => {
            navigate("/login"), setRegisterModal(false);
          }}
          borderHover="#4529E6"
        >
          Ir para o Login
        </Button>
      </div>
    </ModalContainer>
  );
};

export default ModalSuccessRegister;
