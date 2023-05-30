import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootStateInterface } from './interfaces'
import { MissionProps } from '../interfaces/mission-props.interface'

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: { launches: [] } as RootStateInterface,
  reducers: {
    addLaunch: (state, action: PayloadAction<MissionProps>) => {
      state.launches.push(action.payload)
    },
    removeLaunch: (state, action: PayloadAction<number>) => {
      state.launches = state.launches.filter(launch => launch.flightId !== action.payload)
    },
    removeAllLaunches: (state) => {
      state.launches = [];
    },
  },
})