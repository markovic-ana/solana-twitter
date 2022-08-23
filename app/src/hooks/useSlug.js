import { useEffect } from 'react'

// This composable is used to transform any given text into a slug.
// For instance Solana is AWESOME will become solana - is - awesome.
// This is used anywhere we need to make sure the topic is provided
// as a slug.That way, we’ve got less risk of users tweeting on the
// same topic not finding each other’s tweets due to case sensitivity.

export const useSlug = (text) => {
  return useEffect(() => {
    return (text || '')
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  })
}
