import React, { useContext } from "react";
import ModalContainer from "../ModalContainer";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const ModalSuccess = () => {
  const { successModal, setSuccessModal } = useContext(AnnouncementContext);
  return (
    <ModalContainer
      title="Sucesso!"
      openModal={successModal}
      closeModal={() => setSuccessModal(false)}
    >
      <span></span>
      <h4>Seu anúncio foi criado com sucesso!</h4>
      <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
    </ModalContainer>
  );
};

export default ModalSuccess;
