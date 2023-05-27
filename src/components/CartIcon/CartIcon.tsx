import { CartIconProps } from "../../interfaces/cart-icon-props.interface";

import classes from "./CartIcon.module.css";

const CartIcon = (props: CartIconProps) => {
    const amount = props.amount

    return (
        <div role="banner" className={classes.box}>
            <div 
              data-testid='banner-icon'
              className={
                amount !== 0
                  ? `${classes.icon}` + ` ${classes["icon_selected"]}`
                  : `${classes.icon}`
                }
              ></div>
            <div className={classes.amount}>{amount}</div>
        </div>
    );
};

export default CartIcon;
