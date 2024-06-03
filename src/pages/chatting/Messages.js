import React from 'react'
import user2 from '../../assets/images/user2.png'
import { useRecoilState } from 'recoil'
import { chatUserState, userState } from '../../utils/userAtom'

const Messages = ({ chatList }) => {
  const [user, setUser] = useRecoilState(userState)
  const [chatUser, setChatUser] = useRecoilState(chatUserState)
  return (
    <div className='messages'>
      {chatList.map((chat) => (
        <div
          className={chat.userId === user?.id ? 'messeage owner' : 'message'}
          key={`${chat.id}-${chat.userId}-${chat.unread}`}
        >
          <div className='message-user'>
            <img src={user2} alt='user' />
          </div>
          <div
            className={
              chat.userId === user?.id ? 'messeage-content owner' : 'message'
            }
          >
            <div
              className={
                chat.userId === user?.id
                  ? 'message-content-text owner'
                  : 'message'
              }
            >
              {chat.content}
            </div>
            <span>{chat.unread}</span>
            <span>보낸 시간</span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Messages
