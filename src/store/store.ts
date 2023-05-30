import { configureStore } from '@reduxjs/toolkit'
import { launchesSlice } from './slices'

const { addLaunch, removeLaunch, removeAllLaunches } = launchesSlice.actions

const store = configureStore({
  reducer: launchesSlice.reducer,
})

export { addLaunch, removeLaunch, removeAllLaunches }
export default store