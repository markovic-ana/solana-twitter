import { useEffect, useRef, useState } from 'react'
import { useCountCharacterLimit } from '../hooks/useCountCharacterLimit'

// This component designs the form allowing users to send tweets.
// It contains a field for the content, a field for the topic and a
// little character count - down.
//TO-DSUBMIT FORM

const TweetForm = () => {
  const [topic, setTopic] = useState('')
  const [slugTopic, setSlugTopic] = useState('')
  const [content, setContent] = useState('')
  const [connected, setConnected] = useState(true)
  const [textareaValue, setTextareaValue] = useState<String>()

  // // Form data.

  const handleSlug = () => {
    if (topic.length > 0) {
      return setSlugTopic(
        (topic || '')
          .toLowerCase()
          .replace(/[^a-z0-9 -]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
      )
    }
  }

  // // Auto-resize the content's textarea.
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const handleResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px'
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + 'px'
    }
  }, [textareaValue])

  // // Character limit / count-down.
  const characterLimit = useCountCharacterLimit(content, 280)
  const characterLimitColour = () => {
    if (characterLimit <= 0) return 'text-red-500'
    if (characterLimit <= 50) return 'text-yellow-500'
    return 'text-gray-400'
  }

  // // Permissions.
  // if (connected) {
  //   // TODO: Check connected wallet.
  //   const canTweet = () => content && characterLimit > 0
  // }

  // // Actions.
  // // const emit = defineEmits(['added'])
  // const send = async () => {
  //   if (!canTweet) return
  //   const tweet = await sendTweet(effectiveTopic, content)
  //   emit('added', tweet)
  //   setTopic('')
  //   setContent('')
  // }

  return (
    <div>
      {connected ? (
        <div className="px-8 py-4 border-b">
          {/* <!-- Content field. --> */}
          <textarea
            ref={textareaRef}
            className="text-xl w-full focus:outline-none resize-none mb-3"
            placeholder="What's happening?"
            // onChange={() => onChangeHandler()}
            onChange={(e) => {
              setContent(e.target.value)
              handleResize(e)
            }}
          ></textarea>
          <div className="flex flex-wrap items-center justify-between -m-2">
            {/* <!-- Topic field. --> */}
            {/* {!forcedTopic ? ( */}
            <div className="relative m-2 mr-4">
              <input
                type="text"
                placeholder="topic"
                className="text-pink-500 rounded-full pl-10 pr-4 py-2 bg-gray-100"
                value={topic}
                // :disabled="forcedTopic"
                onChange={(e) => {
                  setTopic(e.target.value)
                }}
              />
              <div className="absolute left-0 inset-y-0 flex pl-3 pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-400"
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
            </div>
            {/* // ) : (
            //   <div className="relative m-2 mr-4">
            //     <div
            //       className="text-gray-400 rounded-full pl-10 pr-4 py-2 bg-gray-100"
            //       // // :disabled="forcedTopic"
            //     >
            //       {forcedTopic}
            //     </div>
            //     <div className="absolute left-0 inset-y-0 flex pl-3 pr-2">
            //       <svg
            //         xmlns="http://www.w3.org/2000/svg"
            //         className="h-5 w-5 m-auto text-gray-400"
            //         viewBox="0 0 20 20"
            //         fill="currentColor"
            //       >
            //         <path
            //           fill-rule="evenodd"
            //           d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
            //           clip-rule="evenodd"
            //         />
            //       </svg>
            //     </div>
            //   </div>
            // )} */}

            <div className="flex items-center space-x-6 m-2 ml-auto">
              {/* <!-- Character limit. --> */}
              <div className={characterLimitColour()}>
                {`${characterLimit}`} left
              </div>
              {/* <!-- Tweet button. --> */}
              <button
                onClick={handleSlug}
                className=" bg-pink-500 text-white px-4 py-2 rounded-full font-semibold"
                // :disabled="! canTweet"
                // className={canTweet ? 'bg-pink-500' : 'bg-pink-300 cursor-not-allowed'}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-8 py-4 bg-gray-50 text-gray-500 text-center border-b">
          Connect your wallet to start tweeting...
        </div>
      )}
    </div>
  )
}

export default TweetForm
