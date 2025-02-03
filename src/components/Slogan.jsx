import React from 'react';
import Image from 'next/image';

export default function Slogan() {
  return (
    <div className="py-16">
      <div className="flex flex-col justify-center items-center w-[70%] bg-primary-0 ml-[15%] mr-[15%] p-6 rounded-3xl">
        <div className="text-6xl font-extrabold text-white">
          Connect. Learn. Earn.
        </div>
        <div className="text-lg text-white mt-2">
          Upload your notes and start earning with it
        </div>
        <Image
          src={'/slogan_image.svg'}
          alt="books_img"
          width={800}
          height={100}
        />
      </div>
    </div>
  );
}
