import { ContainerF } from "./style";
import React from "react";
import logo from "../../assets/motorsshop.png";
import direitos from "../../assets/direitos.png";

export const Footer = () => {
  return (
    <ContainerF>
      <div>
        <figure>
          <img src={logo} alt="Logo da empresa" />
        </figure>

        <figure>
          <img src={direitos} alt="Logo da empresa" />
        </figure>

        <a href="#">^</a>
      </div>
    </ContainerF>
  );
};
