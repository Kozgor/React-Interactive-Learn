import { BaseProps } from "./base-props.interface";

export interface ButtonProps extends BaseProps {
  onClick: () => void;
}
