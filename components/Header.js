import Image from 'next/image';
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
            alt='instagram-logo'
          />
        </div>
        <div className='cursor-pointer h-24 w-10 relative  lg:hidden'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
            alt='instagram-logo'
          />
        </div>
        <h1>Right Side</h1>
      </div>
      {/* Left */}
      {/* Middle */}
      {/* Right */}
    </div>
  )
}

export default Header;