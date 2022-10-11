import React, { useEffect, useState } from 'react';
import { DotsHorizontalIcon, HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { userState } from '../atom/userAtom';
import { useRecoilState } from "recoil";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

const Post = ({ username, img, userImg, caption, id }) => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapShot) => setComments(snapShot.docs)
    );

  }, [db, id])

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
      {comments.length > 0 && (
        <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
          {comments.map(comment => (
            <div key={comment.data().timestamp} className='flex items-center space-x-2 mb-2'>
              <img
                className='h-7 rounded-full object-cover'
                src={comment.data().userImage} alt='user-image' />
              <p className='font-semibold'>{comment.data().username}</p>
              <p className='flex-1 truncate'>{comment.data().comment}</p>
              <Moment fromNow >{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
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