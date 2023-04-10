import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";

import { ThemeTitle } from "../../styles/typography";
import { UserContext } from "../../contexts/UserContext";
import { IProductCardProps } from "../../interfaces/produtCard";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { ProductContainer, ProductOwner, ProductDetails } from "./styles";

export const ProductCard = ({ announcement }: IProductCardProps) => {
  const { setSelectedUser } = useContext(UserContext);
  const { setSelectedAnnouncement } = useContext(AnnouncementContext);

  const navigate = useNavigate();

  const url = window.location.href;

  return (
    <ProductContainer color={announcement.is_published ? "#4529E6" : "#ADB5BD"}>
      {url === "https://motorshopm6.vercel.app/profileUser" ? (
        <div
          className="product-img"
          onClick={() => {
            setSelectedAnnouncement(announcement);
            navigate(`/product/${announcement.id}`);
          }}
        >
          <img src={announcement.cover_img} alt={announcement.title} />
          <label>{announcement.is_published ? "Ativo" : "Inativo"}</label>
        </div>
      ) : (
        <div
          className="product-img"
          onClick={() => {
            setSelectedAnnouncement(announcement);
            navigate(`/product/${announcement.id}`);
          }}
        >
          <img src={announcement.cover_img} alt={announcement.title} />
        </div>
      )}

      <ThemeTitle tag="h2" className="product-title" titleSize="Heading-7-600">
        {announcement.title}
      </ThemeTitle>
      <div className="product-description">
        <p>{announcement.description}</p>
      </div>

      <ProductOwner
        onClick={() => {
          setSelectedUser(announcement.user);
          navigate(`/profileUser/${announcement.user.id}`);
        }}
      >
        <p
          className="owner-avatar"
          style={{ backgroundColor: stringToColor(announcement.user.name) }}
        >
          {nameAbbreviate(announcement.user.name)}
        </p>
        <span className="owner-name">{announcement.user.name}</span>
      </ProductOwner>

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
    </ProductContainer>
  );
};
