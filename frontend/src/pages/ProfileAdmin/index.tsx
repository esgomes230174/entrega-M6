import React from "react";
import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/ProductList";
import { UserProfileInfo } from "../../components/UserProfileInfo";
import { PageContainer } from "./styles";

const ProfileAdmin = () => {
  const userId = localStorage.getItem("@user:id");

  return (
    <>
      <NavBar />
      <PageContainer>
        <div className="blue_div"></div>
        <UserProfileInfo />
        {ProductList()}
      </PageContainer>
      <Footer />
    </>
  );
};

export default ProfileAdmin;
