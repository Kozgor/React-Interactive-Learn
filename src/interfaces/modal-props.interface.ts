import { BaseProps } from "./base-props.interface";

export interface ModalProps extends BaseProps {
    onClose: () => void
}


export interface BackdropProps {
    onClose: () => void
}