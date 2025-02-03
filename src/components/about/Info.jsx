import React from 'react'

export default function Info() {
  return (
    <div className="flex flex-col mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-0 mb-4">
          About Notes Sharing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering knowledge exchange and collaborative learning through a seamless note-sharing platform
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-primary-0 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Notes Sharing, we believe in the power of collaborative learning. Our mission is to create an inclusive platform where students, professionals, and lifelong learners can easily share, discover, and learn from each other's notes and insights.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-primary-0/10 p-8 rounded-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-24 h-24 text-primary-0 mx-auto"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
