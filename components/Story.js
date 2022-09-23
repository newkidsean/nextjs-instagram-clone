import React from 'react'

const Story = ({ username, img }) => {
  return (
    <div>
      <img src={img} alt='{username}' />
      <p>{username}</p>
    </div>
  )
}

export default Story;