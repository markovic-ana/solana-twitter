import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// This component is used in the main App.vue component and designs the
// sidebar on the left of the app.It uses the < router - link > component to
//  easily generate Vue Router URLs.It also contains a button for users to
//   connect their wallets but for now, that button doesn’t do anything.

type Props = {}

const SideBar = (props: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="py-4 md:py-8 md:pl-4 md:pr-8 fixed w-20 md:w-64">
      <aside className="flex flex-col items-center md:items-stretch space-y-2 md:space-y-4 ">
        <Link
          to="/"
          className="inline-block rounded-full hover:bg-gray-100 p-3 md:self-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 md:h-10 w-8 md:w-10 text-pink-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </Link>
        <div className="flex flex-col items-center md:items-stretch space-y-2">
          <Link
            to="/"
            className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4"
            active-class="font-bold"
            v-slot="{ isActive }"
          >
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
            <div className="text-xl hidden md:block">Home</div>
          </Link>
          <Link
            to="/topics"
            className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4"
            active-class="font-bold"
            v-slot="{ isActive }"
          >
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            )}
            <div className="text-xl hidden md:block">Topics</div>
          </Link>
          <Link
            to="/users/author"
            className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4"
            active-class="font-bold"
            v-slot="{ isActive }"
          >
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            )}
            <div className="text-xl hidden md:block">Users</div>
          </Link>
          {/* <!-- TODO: Check connected wallet. --> */}
          {/* <router-link v-if="true" :to="{ name: 'Profile' }" class="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4" active-class="font-bold" v-slot="{ isActive }">
                <svg  xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
                <svg  xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <div class="text-xl hidden md:block">Profile</div>
            </router-link> */}
          {isActive && (
            <Link
              to="/profile"
              className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4"
            >
              {isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
              <div className="text-xl hidden md:block">Profile</div>
            </Link>
          )}

          <div className="fixed bottom-8 right-8 md:static w-48 md:w-full">
            {/* <!-- TODO: Connect wallet --> */}
            <div
              className="bg-pink-500 text-center w-full text-white rounded-full px-4 py-2"
              onClick={() => setIsActive(!isActive)}
            >
              Select a wallet
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SideBar
