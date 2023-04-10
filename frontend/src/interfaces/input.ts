import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  // type: string;
  label: string;
  fieldName: string;
  // placeholder: string;
  // register?: UseFormRegister<FieldValues>;
  // name: string;
  // onChange?: any;
}
