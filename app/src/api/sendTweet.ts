// Provides a function that sends a SendTweet instruction to our program with
// all the required information.

export const sendTweet = async (topic: string, content: string) => {
  return {
    topic,
    content,
    author_display: 'B1Af..wtRN',
    created_at: 'Nov 26, 2021 1:03PM',
    created_ago: 'just now',
    timestamp: 1637932868,
  }
}
