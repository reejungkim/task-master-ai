import React from 'react'

function Home() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h2 className="text-3xl font-bold mb-2">Home</h2>
      <p className="text-gray-600">
        Welcome to the Mental Health & Wellness Platform.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-gray-200 p-4">
          Getting Started
        </div>
        <div className="rounded-lg border border-gray-200 p-4">
          Latest Updates
        </div>
      </div>
    </div>
  )
}

export default Home
