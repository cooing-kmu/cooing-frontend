import styled from 'styled-components'

const UserBoxContainer = styled.div`
  display: flex;
  width: 10rem;
  height: 5rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  background-color: #00f;
`

const UserBox = (props) => {
  return (
    <UserBoxContainer>
      <div>{props.user.username}</div>
    </UserBoxContainer>
  )
}

export default UserBox
