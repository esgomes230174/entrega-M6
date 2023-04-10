import { ReactNode } from "react";

export interface IModalProps {
  title: string;
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
}
