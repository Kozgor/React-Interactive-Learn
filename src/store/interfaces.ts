import { MissionProps } from "../interfaces/mission-props.interface"

export interface RootStateInterface {
  launches: MissionProps[]
}

export interface AddToStoreAction {
  type: 'addLaunch'
  launch: MissionProps
}

export interface RemoveFromStoreAction {
  type: 'removeLaunch'
  id: number
}