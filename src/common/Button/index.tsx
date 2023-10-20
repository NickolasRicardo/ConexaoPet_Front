import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  href
}: ButtonProps) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick} href={href}>
    {children}
  </StyledButton>
);
