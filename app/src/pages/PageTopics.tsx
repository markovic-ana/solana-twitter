import React, { useContext } from 'react'
import TweetSearch from '../components/TweetSearch'
// import { useSlug } from '../composables/useSlug'
// import TweetList from '../components/TweetList'
import { TweetsContext } from '../context/TweetsContext'

// The topics page allows users to enter a topic and displays
// all tweets matching it.Once a topic is entered it also displays
//  a form to send tweets with that topic pre - filled.

//loading missing,

type Props = {}

const PageTopics = (props: Props) => {
  const { tweets, setTweets } = useContext(TweetsContext)

  const allTopics = tweets.map((tw) => tw.topic)

  // const slugTopic = useSlug(topic)

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
        {allTopics.map((to) => (
          <div>{to}</div>
        ))}

        {/* <tweet-search placeholder="topic" :disabled="! slugTopic" :modelValue="slugTopic" @update:modelValue="value => topic = value" @search="search">  */}
        <TweetSearch
        // modelValue={'undefined'}
        // placeholder={'undefined'}
        // disabled={false}
        />
        {/* <svg
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
          </svg> */}

        {/* {viewedTopic && <div> <tweet-form @added="addTweet" :forced-topic="viewedTopic"> 
           <TweetForm />
            <tweet-list :tweets="tweets" :loading="loading"></tweet-list>
        <TweetList />
           </div>} */}
        {tweets.length === 0 && (
          <div className="p-8 text-gray-500 text-center">
            No tweets were found in this topic...
          </div>
        )}
      </div>
    </TweetsContext.Provider>
  )
}

export default PageTopics
