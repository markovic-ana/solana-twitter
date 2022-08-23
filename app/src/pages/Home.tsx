// import React, { useEffect, useState } from 'react'
// import { fetchTweets } from '../api/fetchTweets'
// import TweetForm from '../components/TweetForm'
// import TweetList from '../components/TweetList'

import TweetForm from '../components/TweetForm'
import TweetList from '../components/TweetList'

//  The home page.It contains a form to send tweets and
//   lists the latest tweets from everyone.

const Home = () => {
  return (
    <div>
      <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
        <div className="text-xl font-bold"> Home</div>
      </header>
      <TweetForm />
      <TweetList />
    </div>
  )
}

export default Home
