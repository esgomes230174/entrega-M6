import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { IProductCardProps } from "../../interfaces/produtCard";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

import { ProductButtons } from "./styles";
import { ThemeTitle } from "../../styles/typography";
import { ProductContainer, ProductDetails } from "../ProductCard/styles";

export const ProductCardAdmin = ({ announcement }: IProductCardProps) => {
  const { setAnnouncementId, setEditModal, listAnnouncement } =
    useContext(AnnouncementContext);

  const navigate = useNavigate();

  return (
    <ProductContainer>
      <div
        className="product-img"
        onClick={() => {
          navigate(`/product/${announcement.id}`);
        }}
      >
        <img src={announcement.cover_img} alt={announcement.title} />
      </div>
      <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
        {announcement.title}
      </ThemeTitle>
      <div className="product-description">
        <p>{announcement.description}</p>
      </div>
      <ProductDetails>
        <div className="product-details">
          <p className="product-mileage">{announcement.mileage} KM</p>
          <p className="product-year">{announcement.year}</p>
        </div>
        <span className="product-price">
          {announcement.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </ProductDetails>
      <ProductButtons>
        <Button
          children={"Editar"}
          backgroundColor={"#ffffff"}
          backgroundColorHover={"#212529"}
          fontColorHover={"#ffffff"}
          fontColor={"#212529"}
          border={"#212529"}
          onClick={() => {
            listAnnouncement(announcement.id);
            setAnnouncementId(announcement.id);
            setEditModal(true);
          }}
        />
        <Button
          children={"Ver como"}
          backgroundColor={"#ffffff"}
          backgroundColorHover={"#212529"}
          fontColorHover={"#ffffff"}
          fontColor={"#212529"}
          border={"#212529"}
          onClick={() => {
            navigate(`/product/${announcement.id}`);
          }}
        />
      </ProductButtons>
    </ProductContainer>
  );
};
