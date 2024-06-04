import { useState } from 'react'
import { DOMAIN_NAME } from '../../../App'
import { tokenState, userState } from '../../../utils/userAtom'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const TestLogin = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const [token, setToken] = useRecoilState(tokenState)
  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const loginhandler = async () => {
    try {
      const tokenResponse = await axios.get(`${DOMAIN_NAME}/test-user`)
      const token = tokenResponse.data.body

      setToken(token)
      const userResponse = await axios
        .get(`${DOMAIN_NAME}/user`, {
          headers: {
            Authorization: token,
          },
        })
        .then(async (res) => {
          const user = await axios
            .get(`${DOMAIN_NAME}/user/5`, {})
            .then((res) => {
              const _user = res.data.body
              setUser({ ..._user, token })
              console.log(_user)
            })
        })
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
