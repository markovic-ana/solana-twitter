// Provides a function that returns a tweet account from a given public key.

export const getTweet = async (publicKey: string) => {
  return {
    publicKey,
    topic: 'solana',
    content: 'gm',
    author_display: 'B1Af..wtRN',
    created_at: 'Nov 26, 2021 1:03PM',
    created_ago: 'just now',
    timestamp: 1637932864,
  }
}
