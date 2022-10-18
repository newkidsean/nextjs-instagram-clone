import React from 'react';
// import { useSession, signOut } from 'next-auth/react';
import { userState } from '../atom/userAtom';
import { useRecoilState } from "recoil";
import { getAuth, signOut } from 'firebase/auth';
import Image from 'next/image';

const MiniProfile = () => {
  // const { data: session } = useSession();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const auth = getAuth();

  const onSignOut = () => {
    console.log('clicked Sign out button');
    signOut(auth);
    setCurrentUser(null);
  }

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <Image
        className='h-16 rounded-full border p-[2px]'
        src={currentUser?.userImg}
        alt='user-image'
        height={30}
        width={30}
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>{currentUser?.userName}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to my instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm' onClick={onSignOut} >Sign out</button>
    </div>
  )
}

export default MiniProfile;