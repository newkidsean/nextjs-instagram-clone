import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const Story = ({ username, img, isUser }) => {
  return (
    <div className='relative group cursor-pointer'>
      <Image
        height={35}
        width={35}
        className='h-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out' src={img} alt={username} />
      {isUser && <PlusIcon className='h-6 absolute top-1.5 left-1.5 text-white' />}
      <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story;