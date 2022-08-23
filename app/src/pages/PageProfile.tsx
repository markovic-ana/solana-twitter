// import React, { useEffect, useRef } from 'react'
// import { fetchTweets } from '../api/fetchTweets'
// import TweetForm from '../components/TweetForm'
// import TweetList from '../components/TweetList'

// The profile page for the connected user / wallet.It displays the
// wallet’s public key before showing the tweet form and the list of
// tweets sent from that wallet.

// type Props = {}

// const PageProfile = (props: Props) => {
//   const tweets = useRef([])
//   const loading = useRef(true)

//   useEffect(() => {
//     // fetchTweets()
//     //   .then((fetchedTweets) => (tweets.value = fetchedTweets))
//     //   .finally(() => (loading.value = false))
//     console.log('pageprofile - useEffect')
//   })

//   // const addTweet = tweet = tweets.value.push(tweet)

//   // <!-- TODO: Check connected wallet -->
//   return (
//     <div>
//        <div v-if="true" className="border-b px-8 py-4 bg-gray-50">
//       <div className="border-b px-8 py-4 bg-gray-50">
//         B1AfN7AgpMyctfFbjmvRAvE1yziZFDb9XCwydBjJwtRN
//       </div>
//        // <tweet-form @added="addTweet"></tweet-form>
//     //     <tweet-list : tweets="tweets" : loading="loading"></tweet-list>
//       <TweetForm />
//       <TweetList tweets={[]} loading={false} />
//     </div>
//   )
// }

// export default PageProfile

import React from 'react'

type Props = {}

const PageProfile = (props: Props) => {
  return (
    <div>
      <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
        <div className="text-xl font-bold"> PageProfile</div>
      </header>
    </div>
  )
}

export default PageProfile
