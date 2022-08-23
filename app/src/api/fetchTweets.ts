// Provides a function that returns all tweets from our program.
// In a future episode, we will transform that function slightly
// so it can filter through topics and users.

export const fetchTweets = async () => {
  return [
    {
      topic: 'solana',
      content: 'gm',
      author_display: 'B1Af..wtRN',
      created_at: 'Nov 26, 2021 1:03PM',
      created_ago: 'just now',
      timestamp: 1637932864,
    },
    {
      topic: 'no-code',
      content: 'Octohook.com is awesome!',
      author_display: 'BnE7..NRGF',
      created_at: 'Nov 26, 2021 1:03PM',
      created_ago: '2 hours ago',
      timestamp: 1637932864,
    },
    {
      topic: '',
      content: 'Just setting up my Solana twttr',
      author_display: 'B1Af..wtRN',
      created_at: 'Nov 26, 2021 1:03PM',
      created_ago: '2 days ago',
      timestamp: 1637932864,
    },
  ]
}

// let staticTweets = [
//   {
//     topic: 'solana',
//     content: 'gm',
//     author_display: 'B1Af..wtRN',
//     created_at: 'Nov 26, 2021 1:03PM',
//     created_ago: 'just now',
//     timestamp: 1637932864,
//   },
//   {
//     topic: 'no-code',
//     content: 'Octohook.com is awesome!',
//     author_display: 'BnE7..NRGF',
//     created_at: 'Nov 26, 2021 1:03PM',
//     created_ago: '2 hours ago',
//     timestamp: 1637932864,
//   },
//   {
//     topic: '',
//     content: 'Just setting up my Solana twttr',
//     author_display: 'B1Af..wtRN',
//     created_at: 'Nov 26, 2021 1:03PM',
//     created_ago: '2 days ago',
//     timestamp: 1637932864,
//   },
// ]

// export function fetchTweets() {
//   return [staticTweets]
// }
