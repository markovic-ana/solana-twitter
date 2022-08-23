import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFInd from './pages/PageNotFInd'
import PageProfile from './pages/PageProfile'
import PageTopics from './pages/PageTopics'
import PageUsers from './pages/PageUsers'
import Home from './pages/Home'
import PageTweet from './pages/PageTweet'
import PageTweets from './pages/PageTweets'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/topics/" element={<PageTopics />} />
          <Route path="/users/author" element={<PageUsers />} />
          <Route path="/posts" element={<PageTweets />}>
            <Route path="/posts/:id" element={<PageTweet />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFInd />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
