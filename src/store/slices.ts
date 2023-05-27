import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootStateInterface } from './interfaces'

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: { launches: [] } as RootStateInterface,
  reducers: {
    addLaunch: (state, action: PayloadAction<number>) => {
      state.launches.push(action.payload)
    },
    removeLaunch: (state, action: PayloadAction<number>) => {
      state.launches = state.launches.filter(id => id !== action.payload)
    },
  },
})