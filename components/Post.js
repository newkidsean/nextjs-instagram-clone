import React, { useState } from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { userState } from '../atom/userAtom';
import { useRecoilState } from "recoil";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Post = ({ username, img, userImg, caption, id }) => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [comment, setComment] = useState('');

  const sendComment = async (event) => {
    event.preventDefault();
    const commentToSend = comment;
    setComment('');
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: currentUser.username,
      userImage: currentUser.userImg,
      timestamp: serverTimestamp()
    })
  }

  // session 사용하는 부분을 currentUser 로 변경해야 함

  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* Post Header */}
      <div className='flex items-center p-5'>
        <img
          className='h-12 rounded-full object-cover border p-1 mr-3'
          src={userImg} alt={username} />
        <p className='font-bold flex-1'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>

      {/* Post Image */}
      <img className='object-cover w-full' src={img} alt='' />

      {/* Post Buttons */}
      {currentUser && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}

      {/* Post comments */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-2'>{username}</span>{caption}
      </p>
      {/* Post input box */}
      {currentUser && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            value={comment}
            onChange={event => setComment(event.target.value)}
            type='text' className='border-none flex-1 focus:ring-0' placeholder='Enter your comment...' />
          <button type='submit' onClick={sendComment} disabled={!comment.trim()} className='text-blue-400 font-bold cursor:pointer disabled:text-blue-200'>Post</button>
        </form>
      )}
    </div >
  )
}

export default Post