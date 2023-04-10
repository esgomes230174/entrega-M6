import React, { useContext } from "react";
import Button from "../Button";
import ModalContainer from "../ModalContainer";
import { UserContext } from "../../contexts/UserContext";
import { Buttons } from "../DeleteAnnouncementModal/styles";

const DeleteUserModal = () => {
  const { deleteUserModal, setDeleteUserModal, deleteUser } =
    useContext(UserContext);

  return (
    <ModalContainer
      openModal={deleteUserModal}
      closeModal={() => setDeleteUserModal(false)}
      title="Excluir anúncio"
    >
      <h4>Tem certeza que deseja excluir sua conta?</h4>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores.
      </p>
      <Buttons>
        <div className="final-buttons">
          <Button
            children="Cancelar"
            backgroundColor="#DEE2E6"
            backgroundColorHover="#868E96"
            fontColor="#495057"
            fontColorHover="#FFFFFF"
            onClick={() => setDeleteUserModal(false)}
          />
          <Button
            children="Sim, excluir conta"
            backgroundColor="#FFE5E5"
            backgroundColorHover="#FDD8D8"
            fontColor="#CD2B31"
            onClick={() => deleteUser()}
          />
        </div>
      </Buttons>
    </ModalContainer>
  );
};

export default DeleteUserModal;
