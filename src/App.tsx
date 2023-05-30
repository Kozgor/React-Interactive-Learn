import { useEffect, useState, useCallback } from 'react'

import Header from "./components/Header/Header";
import MissionItem from "./components/MissionItem/MissionItem";
import Wrapper from "./components/Wrapper/Wrapper";
import { MissionData } from './interfaces/missionData.interface';

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
      <Wrapper>
        {missions.map(mission => <MissionItem key={mission.flight_number} name={mission.mission_name} desc={mission.details} flightId={mission.flight_number} />)}
      </Wrapper>
    </>
  );
}

export default App;
