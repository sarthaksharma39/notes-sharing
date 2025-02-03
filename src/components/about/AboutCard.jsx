import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function AboutCard() {
  return (
    <Card className="w-80 p-4 text-center shadow-lg">
      <CardHeader>
        <Image
          src="/sarthak.jpg" 
          alt="Developer Profile" 
          height={300}
          width={300}
          className="rounded-full w-40 h-40 mx-auto object-cover mb-4"
        />
        <h2 className="text-xl font-bold">Sarthak Sharma</h2>
        <p className="text-gray-600">Senior Software Engineer</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Passionate developer with 5+ years of experience in React and modern web technologies.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-gray-800 hover:text-black">GitHub</a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}