import { createContext } from 'react'
import { TweetDTO } from '../interfaces/interfaces'

export interface TweetsContextInterface {
  tweets: TweetDTO[]
  setTweets: (c: TweetDTO[]) => void
}

export const TweetsContext = createContext({} as TweetsContextInterface)
