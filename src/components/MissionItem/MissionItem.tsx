import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { MissionProps } from "../../interfaces/mission-props.interface";
import { RootStateInterface } from '../../store/interfaces';
import { addLaunch, removeLaunch } from '../../store/store';
import Button from "../Button/Button";

import classes from './MissionItem.module.css';

const MissionItem = (props: MissionProps) => {
  const noDescription = 'Mission description unavailable';
  const [isSelected, setSelection] = useState(false);
  const selectedMissions = useSelector((state: RootStateInterface) => state.launches);
  const { flightId, name, desc } = props;

  useEffect(() => {
    setSelection(!!selectedMissions.find(mission => mission.flightId === flightId))
  }, [selectedMissions, flightId]);

  const dispatch = useDispatch();
  const onSelectHandler = () => {
    if (!isSelected) {
      setSelection(true);
      dispatch(addLaunch(props));
    } else {
      setSelection(false);
      dispatch(removeLaunch(flightId));
    }
  };

  return (
    <div data-testid="mission-item" className={classes.mission}>
      <div className={classes['mission-details']}>
        <h3>{name}</h3>
        <p className={classes.description}>{desc ? desc : noDescription}</p>
      </div>
      <Button width='' buttonClass={isSelected ? 'red' : 'green'} onClick={onSelectHandler}>
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  );
};

export default MissionItem;