import { ButtonProps } from "../../interfaces/button-props.interface";
import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    const selectedMock = false;

    return (
        <button
            type="button"
            className={
                selectedMock
                    ? `${classes.btn}`
                    : `${classes.btn}` + ` ${classes["btn_selected"]}`
            }
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
