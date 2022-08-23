import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TweetsContext } from '../context/TweetsContext'

//  The params page only shows one params.
//   The params’s public key is provided in the URL allowing us
//   to fetch the params account.This is useful for users to share paramss.

// type Props = {}

const PageTweet = () => {
  const { tweets } = useContext(TweetsContext)
  let params = useParams()
  let postId = params.id

  const tweet = tweets.find((tw) => tw.publicKey === postId)

  //  useEffect(async () => {
  //    try {
  //      params.value = await getparams(new PublicKey(se))
  //      setLoading(true)
  //    } catch (e) {
  //      params.value null
  //    } finally {
  //      setLoading(false)
  //    }
  //  })

  return (
    //!loading ? '...loading'
    <div className="px-8 py-4">
      {!tweet && (
        <div className="p-8 text-gray-500 text-center">Tweet Not Found</div>
      )}
      <div>
        <h3 className="inline font-semibold">
          {/* <!-- TODO: Link to author page or the profile page if it's our own paramseet. -->  */}
          <Link to="/" className="hover:underline">
            {tweet?.authorDisplay}
          </Link>
        </h3>
        <span className="text-gray-500"> • </span>
        <p className="text-gray-500 text-sm">
          {tweet?.created_at}
          <div className="text-gray-500 text-sm" />
          {/* <!-- TODO: Link to the paramseet page. --> */}
          <Link to="/" className="hover:underline">
            {tweet?.created_ago}
          </Link>
        </p>
      </div>
      <p className="whitespace-pre-wrap">{tweet?.content}</p>
      {/*  <!-- TODO: Link to the topic page. --> */}
      {tweet?.topic && (
        <Link
          to="/topics"
          className="inline-block mt-2 text-pink-500 hover:underline"
        >
          {tweet?.topic}
        </Link>
      )}
    </div>
  )
}

export default PageTweet
