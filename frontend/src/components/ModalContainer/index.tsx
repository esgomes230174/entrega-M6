import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { Container, Geral } from "./styles";
import { IModalProps } from "../../interfaces/modal";

const ModalContainer = ({
  title,
  children,
  openModal,
  closeModal,
}: IModalProps) => {
  return (
    <Geral>
      <Dialog open={openModal} scroll="body">
        <Container>
          <DialogTitle className="header" component="div">
            <Typography
              variant="h6"
              fontSize="1rem"
              fontWeight="800"
              fontStyle="normal"
              fontFamily="Inter"
            >
              {title}
            </Typography>
            <Button onClick={closeModal}>
              <Close />
            </Button>
          </DialogTitle>
          <DialogContent className="content">{children}</DialogContent>
        </Container>
      </Dialog>
    </Geral>
  );
};

export default ModalContainer;
