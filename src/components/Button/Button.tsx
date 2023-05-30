import { ButtonProps } from "../../interfaces/button-props.interface";

import classes from "./Button.module.css";

const Button = (props: ButtonProps) => {
    const { buttonClass, onClick, children, width } = props;

    return (
        <button
            type="button"
            role="button"
            className={`${classes.btn}` + ` ${classes[`btn_` + buttonClass]}`}
            onClick={onClick}
            style={{ width: width ? width : '80px' }}
        >
            {children}
        </button>
    );
};

export default Button;
