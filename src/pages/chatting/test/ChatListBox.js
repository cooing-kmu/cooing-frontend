import { useEffect, useState } from 'react'
import './ChatListBox.css'

const ChatListBox = (props) => {
  const [chatListTsx, setChatListTsx] = useState([])

  useEffect(() => {
    const lst = []
    console.log('chatlist changed')
    props.chatList.forEach((chat) => {
      const classname = props.user.id === chat.userId ? 'sendChat' : 'recvChat'
      lst.push(
        <div
          className={classname}
          key={`${chat.id}-${chat.userId}-${chat.unread}`}
        >
          <div>{chat.unread}</div>
          <div>{chat.content}</div>
        </div>
      )
    })
    setChatListTsx(() => lst)
  }, [props.chatList])

  return <div className='chatListBoxContainer'>{chatListTsx}</div>
}

export default ChatListBox
