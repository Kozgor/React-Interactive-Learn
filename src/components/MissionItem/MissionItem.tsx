import { MissionProps } from "../../interfaces/mission-props.interface";
import Button from "../Button/Button"

import classes from './MissionItem.module.css'

const MissionItem = (props: MissionProps) => {
    const onSelectHandler = () => { };

    return <div data-testid="mission-item" className={classes.mission}>
        <div className={classes['mission-details']}>
            <h3>{props.name}</h3>
            <p className={classes.description}>{props.desc}</p>
        </div>
        <Button isSelected={true} onClick={onSelectHandler}>Select</Button>
    </div>
}

export default MissionItem;