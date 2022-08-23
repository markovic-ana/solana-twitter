import React, { useState } from 'react'

// This component offers a reusable form to search for criteria.
//  It is used on the topics page and the users page as we need to
//  search for something on both of these pages.

// type Props = {
//   searchValue: String
//   placeholder: String
//   disabled: Boolean
// }

//add props
const TweetSearch = () => {
  const [searchValue, setSearchlValue] = useState('')
  const [placeholder] = useState('')
  // const [disabled, setDisabled] = useState(false)

  return (
    <div className="relative border-b">
      <input
        type="text"
        className="text-gray-700 w-full pl-16 pr-32 py-4 bg-gray-50"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchlValue(e.target.value)}
        // @keydown.enter="emit('search')"
      />
      <div className="absolute right-0 inset-y-0 flex items-center justify-center pl-8 pr-2">
        <div className={searchValue ? 'text-gray-700' : 'text-gray-400'}>
          {/* <slot name="icon"></slot> */}
        </div>
        <div className="absolute left-0 inset-y-0 flex items-center pr-8">
          <slot name="icon"></slot>
        </div>
        <button
          className=" rounded-full px-4 py-1  font-semibold text-gray-700 bg-gray-300 hover:bg-gray-400 hover:text-white"
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
  )
}

export default TweetSearch
