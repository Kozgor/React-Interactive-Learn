import { BaseProps } from "./base-props.interface";

type ButtonGreen = 'green';
type ButtonRed = 'red';
type DefaultButton = 'default';

export interface ButtonProps extends BaseProps {
  buttonClass: ButtonGreen | ButtonRed | DefaultButton;
  onClick: () => void;
  width: string;
}