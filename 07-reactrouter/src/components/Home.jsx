import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <div className="mx-auto w-full max-w-7xl px-4">
      {/* Hero Section */}
      <aside className="relative overflow-hidden rounded-lg bg-gray-100 sm:mx-16 mx-2 sm:py-16 py-10">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl sm:ml-auto sm:text-right text-center space-y-6 mt-64 sm:mt-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Download Now
              <span className="block text-2xl sm:text-4xl text-orange-600">
                Lorem Ipsum
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Experience fast, secure, and seamless downloads with our modern
              platform.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-700 text-white font-medium rounded-lg hover:opacity-80 transition"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L7 11H10V4H14V11H17L12 16Z" />
                <path d="M5 18H19V20H5V18Z" />
              </svg>
              Download Now
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 flex justify-center sm:justify-start sm:pl-20 pt-10 sm:pt-0">
          <img
            className="w-72 sm:w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Remote device"
          />
        </div>
      </aside>

      {/* Secondary Image Section */}
      <div className="grid place-items-center sm:mt-24 mt-16">
        <img
          className="w-48 sm:w-96"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Remote preview"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-2xl sm:text-5xl py-12 font-semibold text-gray-800">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
  
}

export default Home