import React from "react";
import { ButtonContainer } from "./styles";
import { IButtonBaseProps } from "../../interfaces/button";

const Button = ({
  className,
  children,
  backgroundColor,
  border,
  fontColor,
  backgroundColorHover,
  borderHover,
  fontColorHover,
  onClick,
  type,
}: IButtonBaseProps) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      border={border}
      backgroundColorHover={backgroundColorHover}
      borderHover={borderHover}
      fontColor={fontColor}
      fontColorHover={fontColorHover}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
