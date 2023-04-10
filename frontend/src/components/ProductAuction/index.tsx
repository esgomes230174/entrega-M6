import React, { useContext } from "react";
import clock from "../../assets/seta.svg";
import arrow from "../../assets/relogio.svg";
import auctionImg from "../../assets/auction.svg";
import { useParams } from "react-router-dom";

import Button from "../Button";
import {
  AuctionCard,
  Container,
  DivButtons,
  DivDescription,
  DivInfos,
} from "./styles";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";

const CardAuction = () => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("@user:token");
  return (
    <Container>
      <AuctionCard className="divCard-auction">
        <img src={auctionImg} alt="Auction Car Image" />

        <DivDescription className="div-description">
          <div className="div-time">
            <img src={clock} />
            <span>01:58:00</span>
          </div>

          <DivInfos>
            <h4>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h4>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem...
            </p>

            {token ? (
              <div className="div-owner">
                <p className="owner-avatar">
                  {nameAbbreviate("Rodrigo Tavares")}
                </p>
                <span className="owner-name">Rodrigo Tavares</span>
              </div>
            ) : (
              <div className="div-owner"></div>
            )}

            <div className="div-details">
              <div>
                <p>2013</p>
                <p>0 KM</p>
              </div>

              <span>R$ 50.000,00</span>
            </div>
          </DivInfos>
        </DivDescription>
      </AuctionCard>

      <DivButtons>
        {user?.name !== "Rodrigo" ? (
          <>
            <p>Acessar página do leilão</p>

            <img src={arrow} alt="arrow" className="arrow" />
          </>
        ) : (
          <>
            <Button
              type="button"
              backgroundColor="#4529E6"
              fontColor="#FFFFFF"
              border="#FFFFFF"
              backgroundColorHover="#FFFFFF"
              fontColorHover="#4529E6"
              borderHover="#4529E6"
            >
              Editar
            </Button>
            <Button
              backgroundColor="#4529E6"
              fontColor="#FFFFFF"
              border="#FFFFFF"
              backgroundColorHover="#FFFFFF"
              fontColorHover="#4529E6"
              borderHover="#4529E6"
            >
              Ver como
            </Button>
          </>
        )}
      </DivButtons>
    </Container>
  );
};

export { CardAuction };
