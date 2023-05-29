import { useSelector } from "react-redux";
import { useState, ChangeEventHandler } from "react";

import { BackdropProps } from "../../interfaces/modal-props.interface";
import { RootStateInterface } from "../../store/interfaces";

import Modal from "../Modal/Modal"
import MissionItem from "../MissionItem/MissionItem";
import Wrapper from "../Wrapper/Wrapper";

import classes from "./Cart.module.css";

const Cart = (props: BackdropProps) => {
    const selectedMissions = useSelector((state: RootStateInterface) => state.launches);
    const maxAmount = selectedMissions.length;
    const [launchAmount, setLaunchAmount] = useState(maxAmount);

    const onAmountChangeHandler: ChangeEventHandler = (event) => {
        const currentValue = +(event.target as HTMLInputElement).value;

        setLaunchAmount(currentValue > maxAmount ? maxAmount : currentValue);
    };

    return <Modal onClose={props.onClose}>
        <h2 style={{ textAlign: "center", marginBottom: '5px' }}>Cart</h2>
        {selectedMissions.length === 0 && <h3 className={classes.empty}>Cart is empty!</h3>}
        {selectedMissions.length > 0 &&
            <>
                <Wrapper>{selectedMissions.map(mission => <MissionItem key={mission.flightId} name={mission.name} desc={mission.desc} flightId={mission.flightId} />)}</Wrapper>
                <div className={classes.amount}>
                    <input className={classes.amountInput} type="number" value={launchAmount} onChange={onAmountChangeHandler} />
                </div>
                <div className={classes.box}>
                    <button type="button" className={classes.checkout}>Checkout</button>
                </div>
            </>
        }

    </Modal>
}

export default Cart;