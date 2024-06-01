import React from 'react'
import Message from './Message'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'

const Messages = () => {
  return (
    <div className='messages'>
      <Message />
      <div className='message'>
        <div className='message-user '>
          <img src={user2} alt='user' />
        </div>
        <div className='messeage-content'>
          <div className='message-content-text'>안녕</div>
          <span>14:33</span>
        </div>
      </div>

      <div className='message owner'>
        <div className='message-user '>
          <img src={user1} alt='user' />
        </div>
        <div className='messeage-content owner'>
          <div className='message-content-text owner'>Hello</div>
          <span>14:33</span>
        </div>
      </div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}
export default Messages
