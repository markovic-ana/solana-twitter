import { useState, useEffect } from 'react'

// Also used by the TweetForm.vue component, this composable returns
// a reactive character count - down based on a given text and limit.

export const useCountCharacterLimit = (text, limit) => {
  const [characterLimit, setCharacterLimit] = useState(0)
  useEffect(() => setCharacterLimit(limit - text?.length), [limit, text.length])
  return characterLimit
}
