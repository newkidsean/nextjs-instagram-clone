import React from 'react'
import Post from './Post';

const Posts = () => {
  const posts = [
    {
      id: '1',
      username: 'Kevin',
      userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png',
      img: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
      caption: 'Nice Picture'
    },
    {
      id: '2',
      username: 'Tommy',
      userImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png',
      img: 'https://images.unsplash.com/photo-1663850566130-3eb9d3653f73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      caption: 'Wow Wow'
    },
  ]
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts;