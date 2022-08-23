import React, { useContext } from 'react'
import './main.css'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import { TweetsContext } from './context/TweetsContext'
import { staticTweets } from './data'

// This is the main component that loads when our application starts.
// It designs the overall layout of our app and delegates the rest to
// Vue Router by using the < router - view > component.Any page that
//  matches the current URL will be rendered where < router - view > is.

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { tweets, setTweets } = useContext(TweetsContext)

  return (
    <TweetsContext.Provider value={{ tweets: staticTweets, setTweets }}>
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto">
        {/* <!-- Sidebar. --> */}
        <SideBar />
        {/* <!-- Main --> */}
        <main className="ex-1 border-r border-l ml-20 md:ml-64 min-h-screen">
          <Outlet />
        </main>
      </div>
    </TweetsContext.Provider>
  )
}

export default App
