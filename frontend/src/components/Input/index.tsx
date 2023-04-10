import React, { forwardRef, ForwardRefRenderFunction } from "react";
import { InputContainer } from "./styles";
import { IInputProps } from "../../interfaces/input";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, fieldName, ...rest },
  ref
) => {
  return (
    <InputContainer>
      <label htmlFor={fieldName}>{label}</label>
      <input id={fieldName} ref={ref} {...rest} />
    </InputContainer>
  );
};

export const Input = forwardRef(InputBase);
