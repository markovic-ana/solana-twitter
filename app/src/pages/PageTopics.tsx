import React, { useContext, useEffect, useState } from 'react'
import TweetCard from '../components/TweetCard'
import TweetForm from '../components/TweetForm'
import { TweetsContext } from '../context/TweetsContext'

// The topics page allows users to enter a topic and displays
// all tweets matching it. Once a topic is entered it also displays
//  a form to send tweets with that topic pre - filled.

//loading missing

type Props = {}

const PageTopics = (props: Props) => {
  const { tweets, setTweets } = useContext(TweetsContext)
  const [search, setSearch] = useState('')
  const [filteredTweets, setFilteredTweets] = useState(tweets)

  useEffect(() => {
    setFilteredTweets(
      tweets.filter((tw) =>
        tw.topic.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, tweets])

  // Actions.
  // const search = () => {
  //   router.push(`/topics/${slugTopic.value}`)
  // }

  //   const fetchTopicTweets = async () => {
  //     if (slugTopic.value === viewedTopic.value) return
  //     try {
  //       loading.value = true
  //       const fetchedTweets = await fetchTweets()
  //       tweets.value = fetchedTweets
  //       viewedTopic.value = slugTopic.value
  //     } finally {
  //       loading.value = false
  //     }
  //   }

  //   const addTweet = (tweet) => tweets.value.push(tweet)

  // Router hooks.
  //   useLocation((route) => {
  //     topic.value = route.params.topic
  //     if (topic.value) {
  //       fetchTopicTweets()
  //     } else {
  //       tweets.value = []
  //       viewedTopic.value = ''
  //     }
  //   })

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      <div>
        <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
          <div className="text-xl font-bold">Topics</div>
        </header>
        <div className="relative border-b">
          <div className="absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
            placeholder="topics"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />

          <div className="absolute right-0 inset-y-0 flex items-center pr-8">
            {/* <div className={searchValue ? 'text-gray-700' : 'text-gray-400'}> */}
            <button
              className=" rounded-full px-4 py-1 font-semibold text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white"
              // className={
              //   !disabled
              //     ? 'text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white'
              //     : 'text-gray-400 bg-gray-200 cursor-not-allowed'
              // }
            >
              Search
            </button>
          </div>
        </div>
        <TweetForm />
        <div>
          {filteredTweets.length < 1 ? (
            <div className="p-8 text-gray-500 text-center">
              {' '}
              No tweets were found this topic...
            </div>
          ) : (
            filteredTweets.map((tweet, id) => (
              <div key={id}>
                <TweetCard tw={tweet} />
              </div>
            ))
          )}
        </div>

        {/* {viewedTopic && <div> <tweet-form @added="addTweet" :forced-topic="viewedTopic"> 
           <TweetForm />
            <tweet-list :tweets="tweets" :loading="loading"></tweet-list>
           </div>} */}
      </div>
    </TweetsContext.Provider>
  )
}

export default PageTopics
