import React from 'react'
import userIcon from '../../assets/icons/icon-user.svg'
import { useRecoilState } from 'recoil'
import { userState } from '../../utils/userAtom'

const Messages = ({ chatList, recvImage }) => {
  const [user, setUser] = useRecoilState(userState)

  return (
    <div className='messages'>
      {chatList.map((chat) => (
        <div
          className={chat.userId === user?.id ? 'message owner' : 'message'}
          key={`${chat.id}-${chat.userId}-${chat.unread}`}
        >
          <div className='message-user'>
            {chat.userId === user?.id ? (
              user.profileImageUrl ? (
                <img src={user.profileImageUrl} alt='user' />
              ) : (
                <img src={userIcon} alt='user' />
              )
            ) : recvImage === null || recvImage === 'string' ? (
              <img src={userIcon} alt='user' />
            ) : (
              <img src={recvImage} alt='user' />
            )}
          </div>
          <div
            className={
              chat.userId === user?.id
                ? 'message-content owner'
                : 'message-content'
            }
          >
            {' '}
            <div
              className={
                chat.userId === user?.id
                  ? 'message-content-main owner'
                  : 'message-content-main'
              }
            >
              <div
                className={
                  chat.userId === user?.id
                    ? 'message-content-text owner'
                    : 'message-content-text'
                }
              >
                {chat.content}
              </div>
              {chat.unread > 0 ? <span>{chat.unread}</span> : null}
            </div>
            <span>{chat.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Messages
