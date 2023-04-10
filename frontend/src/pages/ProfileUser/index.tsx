import React, { useContext, useEffect } from "react";

import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import stringToColor from "../../util/stringToColor";
import { UserContext } from "../../contexts/UserContext";
import { ProductList } from "../../components/ProductList";

import { PageContainer } from "../ProfileAdmin/styles";
import { UserInfo } from "../../components/UserProfileInfo/styles";
import nameAbbreviate from "../../util/nameAbbreviate";
import { useParams } from "react-router-dom";

const ProfileUser = () => {
  const { selectedUser, getUserById } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    getUserById(id!);
  }, []);

  return (
    <>
      <NavBar />
      <PageContainer>
        <div className="blue_div"></div>
        <UserInfo>
          <div
            className="name_div"
            style={{
              backgroundColor: stringToColor(
                selectedUser ? selectedUser.name : ". ."
              ),
            }}
          >
            <p className="name_abbreviate">
              {nameAbbreviate(selectedUser ? selectedUser.name : ". .")}
            </p>
          </div>
          <div className="username_div">
            <p className="username">{selectedUser?.name}</p>
            <div className="span_div">
              <span className="account">{selectedUser?.account}</span>
            </div>
          </div>
          <p className="user_description">{selectedUser?.description}</p>
        </UserInfo>
        {ProductList()}
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfileUser;
