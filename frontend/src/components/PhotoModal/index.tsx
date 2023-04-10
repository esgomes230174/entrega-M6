import React, { useContext } from "react";
import ModalContainer from "../ModalContainer";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

const PhotoModal = () => {
  const { photoModal, setPhotoModal, selectedPhoto } =
    useContext(AnnouncementContext);

  return (
    <ModalContainer
      openModal={photoModal}
      closeModal={() => setPhotoModal(false)}
      title="Imagem do veículo"
    >
      <figure>
        <img src={selectedPhoto?.url} alt="" />
      </figure>
    </ModalContainer>
  );
};

export default PhotoModal;
