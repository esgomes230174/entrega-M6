import React, { useContext } from "react";
import Button from "../Button";
import { Buttons } from "./styles";
import ModalContainer from "../ModalContainer";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const DeleteAnnouncementModal = () => {
  const { deleteModal, setDeleteModal, deleteAnnouncement } =
    useContext(AnnouncementContext);

  return (
    <ModalContainer
      openModal={deleteModal}
      closeModal={() => setDeleteModal(false)}
      title="Excluir anúncio"
    >
      <h4>Tem certeza que deseja remover este anúncio?</h4>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente o anúncio
        e removerá os dados de nossos servidores.
      </p>
      <Buttons>
        <div className="final-buttons">
          <Button
            children="Cancelar"
            backgroundColor="#DEE2E6"
            backgroundColorHover="#868E96"
            fontColor="#495057"
            fontColorHover="#FFFFFF"
            onClick={() => setDeleteModal(false)}
          />
          <Button
            children="Sim, excluir anúncio"
            backgroundColor="#FFE5E5"
            backgroundColorHover="#FDD8D8"
            fontColor="#CD2B31"
            onClick={() => deleteAnnouncement()}
          />
        </div>
      </Buttons>
    </ModalContainer>
  );
};

export default DeleteAnnouncementModal;
