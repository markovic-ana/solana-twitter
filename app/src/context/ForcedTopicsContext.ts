import { createContext } from 'react'

export interface ForcedTopicsContextInterface {
  forcedTopic: string
  setForcedTopic: (c: string) => void
}

export const ForcedTopicsContext = createContext(
  {} as ForcedTopicsContextInterface
)
