import { useState } from 'react'
import { DOMAIN_NAME } from '../../../App'
import { useNavigate } from 'react-router-dom'

const TestLogin = (props) => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const loginhandler = async () => {
    try {
      const users = await fetch(`${DOMAIN_NAME}/users`, {
        credentials: 'include',
      }).then(async (res) => (await res.json()).body)

      console.log(users)
      if (!users) return
      const lst = []
      users.forEach((user) => {
        console.log(user.email, user.username)
        if (username === user.username) {
          console.log('same')
          props.setUser(() => user)
          navigate('/chatting') // 채팅 페이지로 이동
          return
        }
        lst.push(user)
      })
      props.setUserList(() => lst)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <input type='text' onChange={handleUsernameInput} value={username} />
      <button onClick={loginhandler}>Login</button>
    </div>
  )
}

export default TestLogin
