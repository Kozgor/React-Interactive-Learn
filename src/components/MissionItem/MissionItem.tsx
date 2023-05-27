import { MissionProps } from "../../interfaces/mission-props.interface";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { addLaunch, removeLaunch } from '../../store/store';
import Button from "../Button/Button";

import classes from './MissionItem.module.css';

const MissionItem = (props: MissionProps) => {
  const noDescription = 'Mission description unavailable';
  const [isSelected, setSelection] = useState(false);

  const dispatch = useDispatch();
  const onSelectHandler = () => {
    if (!isSelected) {
      setSelection(true);
      dispatch(addLaunch(props.flightId));
    } else {
      setSelection(false);
      dispatch(removeLaunch(props.flightId));
    }
  };

  return (
    <div data-testid="mission-item" className={classes.mission}>
      <div className={classes['mission-details']}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.desc ? props.desc : noDescription}</p>
      </div>
      <Button isSelected={isSelected} onClick={onSelectHandler}>Select</Button>
    </div>
  );
};

export default MissionItem;