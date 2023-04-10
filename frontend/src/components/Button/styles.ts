import styled from "styled-components";
import { IButtonBaseProps } from "../../interfaces/button";

export const ButtonContainer = styled.button<IButtonBaseProps>`
  height: 48px;
  padding: 0 1.5rem;

  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(props) => props.fontColor || "#ffffff"};

  border-radius: 4px;
  background: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.border || props.backgroundColor};

  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    border: 1px solid
      ${(props) => props.borderHover || props.backgroundColorHover};
    color: ${(props) => props.fontColorHover || props.fontColor};
  }
`;
