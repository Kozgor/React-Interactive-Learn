import { configureStore } from '@reduxjs/toolkit'
import { launchesSlice } from './slices'

const { addLaunch, removeLaunch } = launchesSlice.actions

const store = configureStore({
  reducer: launchesSlice.reducer,
})

export { addLaunch, removeLaunch }
export default store