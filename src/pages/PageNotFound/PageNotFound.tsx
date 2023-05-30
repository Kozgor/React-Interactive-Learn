import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
    return (
        <><h2 data-testid="404-message" className={classes.notFound}>404 page not found</h2></>
    );
};

export default PageNotFound;