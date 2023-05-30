import { memo, useState } from 'react'

import { CartIconProps } from "../../interfaces/cart-icon-props.interface";
import Cart from "../Cart/Cart";

import classes from "./CartIcon.module.css";

const CartIcon = memo((props: CartIconProps) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const { amount } = props;

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <>
      <div role="banner" className={classes.box} onClick={showCartHandler}>
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
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </>
  );
});

export default CartIcon;
