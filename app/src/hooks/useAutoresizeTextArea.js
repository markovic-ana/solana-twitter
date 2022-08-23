import { useEffect } from 'react'

// This composable is used in the TweetForm.vue component and makes
// the “content” field automatically resize itself based on its content.
// That way the field contains only one line of text to start with but
// extends as the user types.

export const useAutoresizeTextarea = (element) => {
  const resizeTextarea = () => {
    element.style.height = 'auto'
    element.style.height = element.scrollHeight + 'px'
  }

  useEffect((onInvalidate) => {
    if (!element) return
    resizeTextarea()
    element.addEventListener('input', resizeTextarea)
    onInvalidate(() => element.removeEventListener('input', resizeTextarea))
  })
}
