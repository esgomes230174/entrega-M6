import React from "react";

import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { Footer } from "../../components/Footer";
import AllUsersProductList from "../../components/AllUsersProductList";

import { Buttons, Container } from "./styles";
import AuctionList from "../../components/SliderAuction";
import SliderAuction from "../../components/SliderAuction";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="box-container">
          <div className="box">
            <h2>Velocidade e experiência em um lugar feito para você</h2>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </div>
          <Buttons>
            <a href="#Carros">
              <Button
                backgroundColor="inherit"
                backgroundColorHover="#FDFDFD"
                border="#FDFDFD"
                fontColorHover=" #0B0D0D"
                children="Carros"
              />
            </a>
            <a href="#Motos">
              <Button
                backgroundColor="inherit"
                backgroundColorHover="#FDFDFD"
                border="#FDFDFD"
                fontColorHover=" #0B0D0D"
                children="Motos"
              />
            </a>
          </Buttons>
        </div>
        <SliderAuction />
        <AllUsersProductList />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
