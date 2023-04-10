export interface IButtonBaseProps {
  className?: string;
  children: string;
  backgroundColor: string;
  backgroundColorHover: string;
  border?: string;
  borderHover?: string;
  fontColor?: string;
  fontColorHover?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
