import { ButtonProps } from "../../interfaces/button-props.interface";

import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    const { isSelected, onClick, children, width } = props;

    return (
        <button
            type="button"
            role="button"
            className={
                isSelected
                    ? `${classes.btn}` + ` ${classes["btn_selected"]}`
                    : `${classes.btn}`
            }
            onClick={onClick}
            style={{ width: width ? width : '80px' }}
        >
            {children}
        </button>
    );
};

export default Button;
