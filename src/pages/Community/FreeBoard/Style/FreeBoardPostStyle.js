import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const TitleContainer = styled.div`
  width: 370px;
  height: 200px;
  margin-top: 80px;
  border-bottom: #A6A6A6 solid 2px;
`
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 10px;
`
export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProfileTextName = styled.div`
  font-weight: bold;
  font-size: 20px;
`
export const ProfileTextTime = styled.div`
  font-weight: normal;
  font-size: 10px;
  color: #A6A6A6;
`
export const Title = styled.div`
  font-weight: Bold;
  font-size: 24px;
  color: #484C52;
  margin-top: 16px;
`
export const Detail = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #484C52;
  margin-top: 15px;
`
export const IconContainer = styled.div`
  flex-direction: row;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`
export const ThumbIcon = styled.div`
  font-size: 16px;
  color: #FC5C4C;
  gap: 5px;
  display: flex;

`
export const MessageIcon = styled.div`
  font-size: 16px;
  color: #699BF7;
  gap: 5px;
  display: flex;
`
export const StarIcon = styled.div`
  font-size: 16px;
  color: #FFB800;
  gap: 5px;
  display: flex;
`

// export const Comment = styled.input`
//   width: 375px;
//   height: 60px;
//   border-radius: 28px;
//   border: none;
//   box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.12);
//   display: flex;
//   align-items: center;
//   margin-top: 10px;
//   text-indent: 20px;
// `
//
// export const MessageSend = styled.img`
//   position: absolute;
//   display: flex;
//   background-color: red;
// `

export const CommentContainer = styled.div`
  position: relative;
  width: 375px;
  height: 60px;
  margin-top: 10px;
`;

export const Comment = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 28px;
  border: none;
  box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.12);
  text-indent: 20px; 
`;

export const MessageSend = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;


export const detailData = [
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
    { Title: '안녕', summary: '나는 찬우야', time: '04/04 10:16' },
]

export const PostContainer = styled.div`
  width: 370px;
  height: 530px;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  width: 95px;
  height: 20px;
  gap: 10px;
  display: flex;
  margin-top: 10px;
`
export const Button = styled.button`
  width: 42px;
  height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border: #A6A6A6 solid 1px;
  color: #A6A6A6;
  background-color: white;
  cursor: pointer;
`