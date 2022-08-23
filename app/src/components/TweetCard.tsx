import { Link } from 'react-router-dom'
import { TweetDTO } from '../interfaces/interfaces'
// import { TweetsContext, useTweetsContext } from '../context/TweetsContext'

// This component is responsible for the design of one tweet.
// It is used everywhere we need to display tweets.
type Props = {
  tw: TweetDTO
}

const TweetCard = ({ tw }: Props) => {
  return (
    <div className="px-8 py-4">
      <div>
        <h3 className="inline font-semibold">
          {/* <!-- TODO: Link to author page or the profile page if it's our own tweet. --> */}
          <Link to="/" className="hover:underline">
            {tw.authorDisplay}
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <p className="text-gray-500 text-sm">
          {tw.created_at}
          <div className="text-gray-500 text-sm" />
          {/* <!-- TODO: Link to the tweet page. --> */}
          <Link to="/" className="hover:underline">
            {tw.created_ago}
          </Link>
        </p>
      </div>
      <p className="whitespace-pre-wrap">{tw.content}</p>
      {/* // <!-- TODO: Link to the topic page. --> */}
      {tw.topic && (
        <Link
          to="/topics"
          className="inline-block mt-2 text-pink-500 hover:underline"
        >
          {tw.topic}
        </Link>
      )}
    </div>
  )
}

export default TweetCard
