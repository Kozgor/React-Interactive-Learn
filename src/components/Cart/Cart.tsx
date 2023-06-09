import { useSelector, useDispatch } from "react-redux";
import { useState, ChangeEventHandler, useEffect, memo } from "react";

import { BackdropProps } from "../../interfaces/modal-props.interface";
import { RootStateInterface } from "../../store/interfaces";
import { removeAllLaunches } from "../../store/store";

import Modal from "../Modal/Modal"
import MissionItem from "../MissionItem/MissionItem";
import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import Message from "../Message/Message";

import classes from "./Cart.module.css";

const Cart = memo((props: BackdropProps) => {
    const selectedMissions = useSelector((state: RootStateInterface) => state.launches);
    const maxAmount = selectedMissions.length;
    const [customerAmount, setLaunchAmount] = useState(0);
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const [checkoutStatus, setCheckoutStatus] = useState<"error" | "success">("error");
    const dispatch = useDispatch();
    const buttonClass = 'default';

    const onAmountChangeHandler: ChangeEventHandler = (event) => {
        const currentValue = +(event.target as HTMLInputElement).value;

        setLaunchAmount(currentValue > maxAmount ? maxAmount : currentValue);
    };

    useEffect(() => {
        if (selectedMissions.length > 0) {
            setLaunchAmount(selectedMissions.length);
            setCheckoutMessage('');
        }
    }, [selectedMissions]);

    const checkoutHandler = () => {
        if (customerAmount && customerAmount === maxAmount) {
            setCheckoutMessage('Done');
            setCheckoutStatus('success');
            dispatch(removeAllLaunches())
        }
        else {
            setCheckoutMessage('Please pay for items');
            setCheckoutStatus('error');
        }
    }

    return <Modal onClose={props.onClose}>
        {selectedMissions.length === 0 &&
            <div className={`${classes.box}` + ` ${classes.cartTitle}`}>
                <h2>Cart</h2>
                <h3 className={classes.empty}>Cart is empty!</h3>
                {checkoutStatus === 'success' &&
                    <Message message={checkoutMessage} status={checkoutStatus} removeOnClick={false} />
                }
            </div>
        }
        {selectedMissions.length > 0 &&
            <>
                <Wrapper>{selectedMissions.map(mission => <MissionItem key={mission.flightId} name={mission.name} desc={mission.desc} flightId={mission.flightId} />)}</Wrapper>
                <div className={classes.cartCheckoutContainer}>
                    <input
                        className={classes.amountInput}
                        type="number"
                        min={0}
                        value={customerAmount}
                        onChange={onAmountChangeHandler}
                        data-testid="launchAmount"
                    />
                    <Button width={'250px'} onClick={checkoutHandler} buttonClass={buttonClass}>Checkout</Button>
                </div>
                <div className={classes.cartMessageContainer}>
                    {(checkoutStatus === 'error' && checkoutMessage && selectedMissions.length > 0) && <div className={classes.box}>
                        {<Message message={checkoutMessage} status={checkoutStatus} removeOnClick={false} />}
                    </div>}
                </div>
            </>
        }
    </Modal>
});

export default Cart;