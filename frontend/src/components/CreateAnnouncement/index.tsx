import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import Button from "../Button";
import { Input } from "../Input";
import ModalContainer from "../ModalContainer";
import { FormHelperText } from "@mui/material";
import {
  CreateForm,
  DescriptionField,
  AddImg,
  FinalButtons,
  ImgButton,
  FormAnnouncement,
  SubTitle,
} from "./styles";
import createAnnouncementSchema from "../../schemas/createAnnouncement";

const CreateAnnouncementModal = () => {
  const {
    registerAnnouncement,
    addAdModal,
    setAddAdModal,
    setGallery,
    gallery,
  } = useContext(AnnouncementContext);

  const [count, setCount] = useState(0);
  const [addImg, setAddImg] = useState<number[]>([]);
  const [type, setType] = useState<string>("");
  const [vehicleType, setVehicleType] = useState<string>("");
  const [activeAnnoucementTypeBtn, setActiveAnnouncementTypeButton] =
    useState(0);
  const [activeVehicleTypeBtn, setActiveVehicleTypeButton] = useState(0);

  const handleVehicleBtnClick = (buttonIndex: number) => {
    setActiveVehicleTypeButton(buttonIndex);
  };

  const handleAnnouncementBtnClick = (buttonIndex: number) => {
    setActiveAnnouncementTypeButton(buttonIndex);
  };

  const newInput = () => {
    if (count <= 5 && addImg.length <= 5) {
      setCount((count) => {
        return count + 1;
      });
      setAddImg((prev) => [...prev, count]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAnnouncementSchema),
  });

  const onSubmitFunction = (data: any) => {
    data.announcement_type = type;
    data.vehicle_type = vehicleType;

    data.photos = gallery.filter((img) => img !== "");
    registerAnnouncement(data);
  };

  return (
    <ModalContainer
      title="Criar anúncio"
      openModal={addAdModal}
      closeModal={() => setAddAdModal(false)}
    >
      <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
        <SubTitle>Tipo de anuncio</SubTitle>
        <CreateForm>
          <div>
            <Button
              className={activeAnnoucementTypeBtn === 1 ? "button_active" : ""}
              children="Venda"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              onClick={() => {
                setType("Venda");
                handleAnnouncementBtnClick(1);
              }}
              type="button"
            />
            <Button
              className={activeAnnoucementTypeBtn === 2 ? "button_active" : ""}
              children="Leilão"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              onClick={() => {
                setType("Leilão");
                handleAnnouncementBtnClick(2);
              }}
              type="button"
            />
          </div>
        </CreateForm>
        <SubTitle>Informações do veículo</SubTitle>
        <Input
          label="Título"
          type="text"
          placeholder="Digitar título"
          fieldName="title"
          {...register("title")}
        />
        <FormHelperText error>{errors.title?.message}</FormHelperText>
        <CreateForm>
          <div>
            <div className="input-errors">
              <Input
                label="Ano"
                type="number"
                placeholder="Digitar ano"
                fieldName="year"
                {...register("year")}
              />
              <FormHelperText error>{errors.year?.message}</FormHelperText>
            </div>
            <div className="input-errors">
              <Input
                label="Quilometragem"
                type="number"
                placeholder="0"
                fieldName="mileage"
                {...register("mileage")}
              />
              <FormHelperText error>{errors.mileage?.message}</FormHelperText>
            </div>

            {type === "Venda" ? (
              <div className="input-errors">
                <Input
                  label="Preço"
                  type="number"
                  placeholder="Digitar preço"
                  fieldName="price"
                  {...register("price")}
                />
                <FormHelperText error>{errors.price?.message}</FormHelperText>
              </div>
            ) : (
              <div className="input-errors">
                <Input
                  label="Lance inicial"
                  type="number"
                  placeholder="Digitar lance"
                  fieldName="auction"
                  {...register("price")}
                />
                <FormHelperText error>{errors.price?.message}</FormHelperText>
              </div>
            )}
          </div>
        </CreateForm>
        <DescriptionField>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Digitar descrição"
            {...register("description")}
          />
        </DescriptionField>
        <FormHelperText error>{errors.description?.message}</FormHelperText>
        <SubTitle>Tipo de veículo</SubTitle>
        <CreateForm>
          <div>
            <Button
              className={activeVehicleTypeBtn === 1 ? "button_active" : ""}
              children="Carro"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              onClick={() => {
                setVehicleType("Carro");
                handleVehicleBtnClick(1);
              }}
              type="button"
            />
            <Button
              className={activeVehicleTypeBtn === 2 ? "button_active" : ""}
              children="Moto"
              backgroundColor="#FFFFFF"
              backgroundColorHover="#0B0D0D"
              border="#ADB5BD"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              onClick={() => {
                setVehicleType("Moto");
                handleVehicleBtnClick(2);
              }}
              type="button"
            />
          </div>
        </CreateForm>
        <Input
          label="Imagem da capa"
          type="text"
          placeholder="Inserir URL da imagem"
          fieldName="cover_img"
          {...register("cover_img")}
        />
        <FormHelperText error>{errors.cover_img?.message}</FormHelperText>
        <div>
          <AddImg>
            {addImg.map((_, num) => (
              <Input
                key={num}
                label={`${num + 1}° Imagem da galeria`}
                placeholder="Inserir URL da imagem"
                fieldName="photos"
                type="text"
                {...register(`${num}photos`)}
                onChange={(event: any) => {
                  const galleryToUpdate = [...gallery];
                  galleryToUpdate[num] = event.target.value;
                  setGallery(galleryToUpdate);
                }}
              />
            ))}
          </AddImg>
        </div>
        <ImgButton>
          {count <= 5 && addImg.length <= 5 ? (
            <Button
              children="Adicionar campo para imagem da galeria"
              backgroundColor="#EDEAFD"
              backgroundColorHover=""
              fontColor="#4529E6"
              onClick={newInput}
              type="button"
            />
          ) : (
            <Button
              children="Limite de campos atingido"
              backgroundColor="#EDEAFD"
              backgroundColorHover=""
              borderHover="#CD2B31"
              fontColor="#CD2B31"
              type="button"
            />
          )}
        </ImgButton>
        <FinalButtons>
          <div className="final-buttons">
            <Button
              children="Cancelar"
              backgroundColor="#DEE2E6"
              backgroundColorHover="#868E96"
              fontColor="#495057"
              fontColorHover="#FFFFFF"
              onClick={() => setAddAdModal(false)}
              type="button"
            />
            <Button
              children="Criar Anúncio"
              backgroundColor="#B0A6F0"
              backgroundColorHover="#5126EA"
              border="#B0A6F0"
              fontColor="#0B0D0D"
              fontColorHover="#FFFFFF"
              type="submit"
            />
          </div>
        </FinalButtons>
      </FormAnnouncement>
    </ModalContainer>
  );
};

export default CreateAnnouncementModal;
