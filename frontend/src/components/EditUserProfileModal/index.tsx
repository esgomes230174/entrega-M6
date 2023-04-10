import { yupResolver } from "@hookform/resolvers/yup";
import { FormHelperText } from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { editUserSchema } from "../../schemas/editUser";
import Button from "../Button";
import {
  CreateForm,
  DescriptionField,
  FinalButtons,
  FormAnnouncement,
  SubTitle,
} from "../EditAnnouncementModal/styles";
import { Input } from "../Input";
import ModalContainer from "../ModalContainer";

export const EditUserProfileModal = () => {
  const { editUser, editUserModal, setEditUserModal, user } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = (data: any) => {
    editUser(data);
  };

  return (
    <>
      <ModalContainer
        title="Editar Perfil"
        openModal={editUserModal}
        closeModal={() => setEditUserModal(false)}
      >
        <FormAnnouncement onSubmit={handleSubmit(onSubmitFunction)}>
          <SubTitle>Informações pessoais</SubTitle>
          <CreateForm>
            <Input
              type="text"
              label="Nome"
              fieldName="name"
              placeholder={user!.name}
              {...register("name")}
            />
            <Input
              type="email"
              label="Email"
              fieldName="email"
              placeholder={user!.email}
              {...register("email")}
            />
            <Input
              type="text"
              label="CPF"
              fieldName="cpf"
              placeholder={user!.cpf}
              {...register("cpf")}
            />
            <Input
              type="text"
              label="Celular"
              fieldName="phone"
              placeholder={user!.phone}
              {...register("phone")}
            />
            <Input
              type="text"
              label="Data de nascimento"
              fieldName="birth_date"
              placeholder={user!.birth_date}
              {...register("birth_date")}
            />
            <FormHelperText error>{errors.birth_date?.message}</FormHelperText>
            <DescriptionField>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                placeholder={user!.description}
                {...register("description")}
              />
            </DescriptionField>

            <FinalButtons>
              <div className="final-buttons">
                <Button
                  children="Cancelar"
                  backgroundColor="#DEE2E6"
                  backgroundColorHover="#868E96"
                  fontColor="#495057"
                  fontColorHover="#FFFFFF"
                  onClick={() => setEditUserModal(false)}
                  type="button"
                />
                <Button
                  children="Salvar Alterações"
                  backgroundColor="#B0A6F0"
                  backgroundColorHover="#5126EA"
                  border="#B0A6F0"
                  fontColor="#0B0D0D"
                  fontColorHover="#FFFFFF"
                  type="submit"
                />
              </div>
            </FinalButtons>
          </CreateForm>
        </FormAnnouncement>
      </ModalContainer>
    </>
  );
};
