import React from "react";
import logo from "../../assets/logo.svg";
import bars from "../../assets/bars.svg";
import xmark from "../../assets/xmark.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, MenuDropdownSt } from "./styles";
import Button from "../Button";
import Dropdown from "../Dropdown";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavLinks = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const token = localStorage.getItem("@user:token");

  return token ? (
    <Container>
      <MenuDropdownSt>
        <img src={logo} alt="Motors Shop" onClick={() => navigate("/home")} />
        {isOpen ? (
          <img src={xmark} onClick={handleNavLinks} />
        ) : (
          <img src={bars} onClick={handleNavLinks} />
        )}

        <nav className={`${isOpen ? "open" : "close"}`}>
          <ul className="menu-list">
            <li>
              <a href="#Carros">Carros</a>
            </li>
            <li>
              <a href="#Motos">Motos</a>
            </li>
            <li>
              <a href="#Leilão">Leilão</a>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </nav>
      </MenuDropdownSt>
    </Container>
  ) : (
    <Container>
      <MenuDropdownSt>
        <img src={logo} alt="Motors Shop" />
        {isOpen ? (
          <img src={xmark} onClick={handleNavLinks} />
        ) : (
          <img src={bars} onClick={handleNavLinks} />
        )}

        <nav className={`${isOpen ? "open" : "close"}`}>
          <ul className="menu-list">
            <li>
              <a href="#carros">Carros</a>
            </li>
            <li>
              <a href="#motos">Motos</a>
            </li>
            <li>
              <a href="#leilao">Leilão</a>
            </li>
            {}
            <li>
              <a href="/login">Fazer Login</a>
            </li>
            <li>
              <Button
                backgroundColor="#FFFFFFFF"
                backgroundColorHover="#F1F3F5"
                border={"#ADB5BD"}
                fontColor="#0B0D0D"
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </li>
          </ul>
        </nav>
      </MenuDropdownSt>
    </Container>
  );
};

export default MobileMenu;
