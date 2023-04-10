import React, { useContext } from "react";

import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

import Button from "../Button";
import { UserInfo } from "./styles";
import ModalSuccess from "../ModalSucess";
import CreateAnnouncementModal from "../CreateAnnouncement";
import EditAnnouncementModal from "../EditAnnouncementModal";
import DeleteAnnouncementModal from "../DeleteAnnouncementModal";

export const UserProfileInfo = () => {
  const { setAddAdModal } = useContext(AnnouncementContext);
  const { user } = useContext(UserContext);

  const userName = localStorage.getItem("@user:name");

  return (
    <>
      <UserInfo>
        <div
          className="name_div"
          style={{
            backgroundColor: stringToColor(userName!),
          }}
        >
          <p className="name_abbreviate">{nameAbbreviate(userName!)}</p>
        </div>
        <div className="username_div">
          <p className="username">{userName}</p>
          <div className="span_div">
            <span className="account">{user?.account}</span>
          </div>
        </div>
        <p className="user_description">{user?.description}</p>

        <Button
          children="Criar anúncio"
          backgroundColor="#FDFDFD"
          backgroundColorHover="#EDEAFD"
          border="#4529E6"
          fontColor="#4529E6"
          onClick={() => setAddAdModal(true)}
        />
      </UserInfo>
      <CreateAnnouncementModal />
      <ModalSuccess />
      <EditAnnouncementModal />
      <DeleteAnnouncementModal />
    </>
  );
};
