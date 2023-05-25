import CartIcon from "../CartIcon/CartIcon";

import classes from "./Header.module.css";

const Header = () => {
    const amountMock = 0;

    return (
        <header role="heading" className={classes.header}>
            <CartIcon amount={amountMock}></CartIcon>
        </header>
    );
};

export default Header;
