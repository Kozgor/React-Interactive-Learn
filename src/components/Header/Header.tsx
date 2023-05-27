import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../store/interfaces';
import CartIcon from "../CartIcon/CartIcon";

import classes from "./Header.module.css";

const Header = () => {
    const launchesCount = useSelector((state: RootStateInterface) => state.launches.length);

    return (
        <header role="heading" className={classes.header}>
            <CartIcon amount={launchesCount}></CartIcon>
        </header>
    );
};

export default Header;