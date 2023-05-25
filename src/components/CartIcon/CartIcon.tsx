import { CartIconProps } from "../../interfaces/cart-icon-props.interface";

import classes from "./CartIcon.module.css";

const CartIcon = (props: CartIconProps) => {
    return (
        <div role="banner" className={classes.box}>
            <div className={classes.icon}></div>
            <div className={classes.amount}>{props.amount}</div>
        </div>
    );
};

export default CartIcon;
