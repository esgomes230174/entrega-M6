import React, { MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";

import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { Container } from "./styles";

const Dropdown = () => {
  const {
    user,
    setUser,
    setEditUserModal,
    setAddressModal,
    setDeleteUserModal,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: nameAbbreviate(name),
    };
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton
        id="basic-button"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar {...stringAvatar(user ? user.name : ". .")} />
        {user?.name}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => setEditUserModal(true)}>
          Editar perfil
        </MenuItem>
        <MenuItem onClick={() => setAddressModal(true)}>
          Editar endereço
        </MenuItem>
        {user?.account === "Anunciante" && (
          <MenuItem onClick={() => navigate(`/profileAdmin/${user.id}`)}>
            Meus anúncios
          </MenuItem>
        )}
        <MenuItem onClick={() => setDeleteUserModal(true)}>
          Excluir conta
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setUser(null);
            navigate("/login", { replace: true });
          }}
        >
          Sair
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Dropdown;
