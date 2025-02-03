import React from 'react'

export default function Join() {
  return (
    <section className="flex justify-center items-center text-center h-80">
        <div>
        <h2 className="text-4xl font-bold text-primary-0 mb-6">
          Join Our Community
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Whether you're a student, educator, or professional, Notes Sharing is your platform to learn, grow, and connect through knowledge sharing.
        </p>
        <div className="space-x-4">
          <a 
            href="/signup" 
            className="bg-primary-0 text-white px-6 py-3 rounded-full hover:bg-primary-0/90 transition duration-300 inline-block"
          >
            Sign Up
          </a>
          <a 
            href="/login" 
            className="border border-primary-0 text-primary-0 px-6 py-3 rounded-full hover:bg-primary-0/10 transition duration-300 inline-block"
          >
            Log In
          </a>
        </div>
        </div>
      </section>
  )
}
