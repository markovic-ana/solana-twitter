import { useContext, useEffect, useState } from 'react'
import { TweetsContext } from '../context/TweetsContext'
import TweetForm from '../components/TweetForm'
import TweetCard from '../components/TweetCard'

// Similarly to the topics page, the users page allows searching for other
// users by entering their public key.When a valid public key is entered,
//   all tweets from that user will be fetched and displayed on this page.

type Props = {}

const PageUsers = (props: Props) => {
  const { tweets, setTweets } = useContext(TweetsContext)
  const [search, setSearch] = useState('')
  const [filteredTweets, setFilteredTweets] = useState(tweets)

  useEffect(() => {
    setFilteredTweets(
      tweets.filter((tw) =>
        tw.publicKey.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, tweets])
  // Data.
  // const router = useLocation()
  // const tweets = useRef([])
  // const loading = useRef(true)
  // const author = useRef('')
  // const viewedAuthor = useRef('')

  // Actions.
  // const search = () => {
  //     router.push(`/users/${author.value}`)
  // }

  // const fetchAuthorTweets = async () => {
  //     if (author.value === viewedAuthor.value) return
  //     try {
  //         loading.value = true
  //         const fetchedTweets = await fetchTweets()
  //         tweets.value = fetchedTweets
  //         viewedAuthor.value = author.value
  //     } finally {
  //         loading.value = false
  //     }
  // }

  // Router hooks.
  // useFromRoute((route) => {
  //     author.value = route.params.author
  //     if (author.value) {
  //         fetchAuthorTweets()
  //     } else {
  //         tweets.value = []
  //         viewedAuthor.value = ''
  //     }
  // })

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      <div>
        <header className="flex space-x-6 items-center justify-between px-8 py-4 border-b">
          <div className="text-xl font-bold">Users</div>
        </header>

        <div className="relative border-b">
          <input
            type="text"
            className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
            placeholder="public key"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />
          <div className="absolute left-0 inset-y-0 flex items-center justify-center pl-8 pr-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
          </div>
          <div className="absolute right-0 inset-y-0 flex items-center pr-8">
            {/* <div className={searchValue ? 'text-gray-700' : 'text-gray-400'}> */}
            <button
              className=" rounded-full px-4 py-1 font-semibold text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white"
              // className={
              //   !disabled
              //     ? 'text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white'
              //     : 'text-gray-400 bg-gray-200 cursor-not-allowed'
              // }
              // :disabled="disabled" in react: disabled={isDisabled} ..state (true)
              // @click="emit('search')"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <TweetForm />
      <div>
        {filteredTweets.length < 1 ? (
          <div className="p-8 text-gray-500 text-center">
            {' '}
            No users were found...
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
    </TweetsContext.Provider>
  )
}

export default PageUsers

// import React from 'react'

// type Props = {}

// const PageUsers = (props: Props) => {
//   return <div>PageUsers</div>
// }

// export default PageUsers
