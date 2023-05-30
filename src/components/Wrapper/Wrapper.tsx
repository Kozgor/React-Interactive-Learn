import { memo } from "react";

import { BaseProps } from "../../interfaces/base-props.interface";

import classes from "./Wrapper.module.css";

const Wrapper = memo((props: BaseProps) => {
    return <div data-testid="app-container" className={classes.wrapper}>{props.children}</div>;
});

export default Wrapper;
