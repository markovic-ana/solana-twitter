import { TweetsContext } from '../context/TweetsContext'
import { useState, useContext } from 'react'
import TweetCard from './TweetCard'
import { Link } from 'react-router-dom'

// This component uses the TweetCard.vue component to display not just one
//  but multiple tweets.

const TweetList = () => {
  const { tweets, setTweets } = useContext(TweetsContext)
  const [loading] = useState(true)

  //order tweets based on timestamp
  const sortedTweets = [...tweets].sort((a, b) => a.timestamp - b.timestamp)

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      <div>
        {!loading ? (
          <div className="p-8 text-gray-500 text-center">...Loading</div>
        ) : (
          <div className="divide-y">
            {sortedTweets.map((tw, id) => (
              <div key={id}>
                <Link to={`/posts/${tw.publicKey}`}>
                  <TweetCard tw={tw} key={tw.publicKey} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <div v-else className="divide-y"> */}
      {/* <tweet-card v-for="tweet in orderedTweets"
         :key="tweet.key" :tweet="tweet"> */}
      {/* <TweetCard /> */}
    </TweetsContext.Provider>
  )
}

export default TweetList
