import { ButtonProps } from "../../interfaces/button-props.interface";
import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    const { isSelected, onClick, children } = props;

    return (
        <button
            type="button"
            role="button"
            className={
                isSelected
                    ? `${classes.btn}`
                    : `${classes.btn}` + ` ${classes["btn_selected"]}`
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
