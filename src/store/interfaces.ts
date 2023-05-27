export interface RootStateInterface {
  launches: number[]
}

export interface AddToStoreAction {
  type: 'addLaunch'
  id: number
}

export interface RemoveFromStoreAction {
  type: 'removeLaunch'
  id: number
}