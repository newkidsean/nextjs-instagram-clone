import React from 'react';
// import { useSession, signOut } from 'next-auth/react';

const MiniProfile = () => {
  // const { data: session } = useSession();
  const signOut = () => {
    console.log('clicked Sign out button');
  }

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='h-16 rounded-full border p-[2px]' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png' alt='user-image' />
      {/* <img className='h-16 rounded-full border p-[2px]' src={session?.user.image} alt='user-image' /> */}
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>Kevin Tommy</h2>
        {/* <h2 className='font-bold'>{session?.user.username}</h2> */}
        <h3 className='text-sm text-gray-400'>Welcome to my instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm' onClick={signOut} >Sign out</button>
    </div>
  )
}

export default MiniProfile;