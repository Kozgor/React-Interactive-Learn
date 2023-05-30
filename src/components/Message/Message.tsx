import { useState, MouseEventHandler, memo } from "react";

import { MessageProps } from "../../interfaces/message-props.interface";

import classes from "./Message.module.css";

const Message = memo((props: MessageProps) => {
    const { status, message, removeOnClick } = props;
    const [toRemove, setRemove] = useState('');
    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setRemove('remove');
    };

    if (toRemove) {
        return null;
    }

    if (removeOnClick) {
        return (
            <div
                data-testid='message-component'
                className={`${classes.message} ${classes[status]} ${classes[toRemove]}`}
                onClick={handleClick}
            >
                {message}
            </div>
        );
    } else {
        return (
            <div className={`${classes.message} ${classes[status]}`}>
                <p>{message}</p>
            </div>
        );
    }
});

export default Message;
