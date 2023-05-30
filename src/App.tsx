import { useEffect, useState, useCallback } from 'react'

import Header from "./components/Header/Header";
import MissionItem from "./components/MissionItem/MissionItem";
import Wrapper from "./components/Wrapper/Wrapper";
import { MissionData } from './interfaces/missionData.interface';
import Message from './components/Message/Message';

function App() {
  const [missions, setMissions] = useState<MissionData[]>([]);

  const fetchRocketMissions = useCallback(async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches/');
    
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    const loadedMissions: MissionData[] = data.slice(0, 50);

    setMissions(loadedMissions);
  }, []);

  useEffect(() => {
    fetchRocketMissions();
  }, [fetchRocketMissions]);

  return (
    <>
      <Header />
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <h2 style={{width: '100%', textAlign: 'center', marginBottom:'20px'}}>Messages exaples:</h2>
          <Message message='success can be removed' status='success' removeOnClick={true} />
          <Message message='error can be removed' status='error' removeOnClick={true} />
          <Message message='success forever!' status='success' removeOnClick={false} />
          <Message message='forever error!' status='error' removeOnClick={false} />
        </div>
      <Wrapper>
        {missions.map(mission => <MissionItem key={mission.flight_number} name={mission.mission_name} desc={mission.details} flightId={mission.flight_number} />)}
      </Wrapper>
    </>
  );
}

export default App;
