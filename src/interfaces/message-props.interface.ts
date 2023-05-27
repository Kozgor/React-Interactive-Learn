type MessageSuccess = 'success';
type MessageError = 'error';

export interface MessageProps {
    message: string;
    status: MessageSuccess | MessageError;
    removeOnClick: boolean;
}