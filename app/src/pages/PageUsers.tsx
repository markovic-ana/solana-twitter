// import TweetSearch from '../components/TweetSearch'
// import { useParams } from 'react-router-dom'
// import { useContext } from 'react'
// import { TweetsContext } from '../context/TweetsContext'

// // Similarly to the topics page, the users page allows searching for other
// // users by entering their public key.When a valid public key is entered,
// //   all tweets from that user will be fetched and displayed on this page.

// type Props = {}

// const PageUsers = (props: Props) => {
//   const { tweets, setTweets } = useContext(TweetsContext)
//   // Data.
//   const router = useLocation()
//   const tweets = useRef([])
//   const loading = useRef(true)
//   const author = useRef('')
//   const viewedAuthor = useRef('')

//   // Actions.
//   // const search = () => {
//   //     router.push(`/users/${author.value}`)
//   // }

//   // const fetchAuthorTweets = async () => {
//   //     if (author.value === viewedAuthor.value) return
//   //     try {
//   //         loading.value = true
//   //         const fetchedTweets = await fetchTweets()
//   //         tweets.value = fetchedTweets
//   //         viewedAuthor.value = author.value
//   //     } finally {
//   //         loading.value = false
//   //     }
//   // }

//   // Router hooks.
//   // useFromRoute((route) => {
//   //     author.value = route.params.author
//   //     if (author.value) {
//   //         fetchAuthorTweets()
//   //     } else {
//   //         tweets.value = []
//   //         viewedAuthor.value = ''
//   //     }
//   // })

//   return (
//     <TweetsContext.Provider value={{ tweets, setTweets }}>
//       <div>
//         {/* <tweet-search placeholder="public key" :disabled="! author" v-model="author" @search="search"> */}
//         <TweetSearch />
//         {/* <div #icon> */}
//         {/* <div>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//             </svg>
//         </div> */}
//         {/* <div v-if="viewedAuthor"> */}
//         <div>
//           {/* <tweet-list :tweets="tweets" :loading="loading"> */}
//           <TweetList />
//           {/* <div v-if="tweets.length === 0" className="p-8 text-gray-500 text-center"> */}
//           <div className="p-8 text-gray-500 text-center">
//             {/* <div
//           v-if="tweets.length === 0"
//           className="p-8 text-gray-500 text-center"
//         > */}
//             <div className="p-8 text-gray-500 text-center">
//               User not found...
//             </div>
//           </div>
//         </div>
//       </div>
//     </TweetsContext.Provider>
//   )
// }

// export default PageUsers
