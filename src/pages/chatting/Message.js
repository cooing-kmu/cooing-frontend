import React from 'react'
import user1 from '../../assets/images/user1.png'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='message-user '>
        <img src={user1} alt='user' />
      </div>
      <div className='messeage-content owner'>
        <div className='message-content-text owner'>Hello</div>
        <span>14:33</span>
      </div>
    </div>
  )
}
export default Message
