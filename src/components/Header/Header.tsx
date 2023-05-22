import CartIcon from "../CartIcon/CartIcon";

import classes from "./Header.module.css";

const Header = () => {
    const amountMock = 0;

    return (
        <header className={classes.header}>
            <CartIcon amount={amountMock}></CartIcon>
        </header>
    );
};

export default Header;
