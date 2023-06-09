import ReactDOM from "react-dom";
import { memo } from "react";

import { BackdropProps, ModalProps } from "../../interfaces/modal-props.interface";
import { BaseProps } from "../../interfaces/base-props.interface";

import classes from "./Modal.module.css";

const Backdrop = memo((props: BackdropProps) => {
    return <div data-testid="backdrop" className={classes.backdrop} onClick={props.onClose} />;
});

const ModalOverlay = memo((props: BaseProps) => {
    return <div data-testid="modal-overlay" className={classes.modal}>{props.children}</div>;
});

const Modal = memo((props: ModalProps) => {
    const portalElement = document.getElementById("overlays") as HTMLElement;

    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
});

export default Modal;