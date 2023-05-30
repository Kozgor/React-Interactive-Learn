import { BaseProps } from "./base-props.interface";

export interface ButtonProps extends BaseProps {
  isSelected: boolean;
  onClick: () => void;
  width: string;
}
