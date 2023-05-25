import { BaseProps } from "../../interfaces/base-props.interface";

import classes from "./Wrapper.module.css";

const Wrapper = (props: BaseProps) => {
    return <div data-testid="app-container" className={classes.wrapper}>{props.children}</div>;
};

export default Wrapper;
