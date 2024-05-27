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
  word-wrap: break-word;
`
export const Detail = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #484C52;
  margin-top: 15px;
  word-wrap: break-word;

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

export const CommentContainer = styled.div`
  position: relative;
  height: 60px;
  width: 375px;
  margin-top: 10px;
`;

export const Comment = styled.textarea`
  height: 100%;
  width: 100%;
  border-radius: 28px;
  border: none;
  box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.12);
  padding: 20px 60px 20px 20px; /* 위, 오른쪽, 아래, 왼쪽 순서로 패딩 설정 */
  resize: none;
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  text-align: start; /* 텍스트를 가로로 왼쪽 정렬 */
`;

export const MessageSend = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;


export const PostContainer = styled.div`
  width: 370px;
  height: 500px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  gap: 10px;
  height: 35px;
  display: flex;
  margin-top: 10px;
  border-bottom: #A6A6A6 solid 2px;

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


export const ContentsContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  border-bottom: #a6a6a6 solid 1px;
  cursor: pointer;
`

export const TitleSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
`

export const commentTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  word-wrap: break-word;
`

export const Summary = styled.div`
  font-size: 12px;
  word-wrap: break-word;
`

export const Time = styled.div`
  display: flex;
  font-size: 10px;
  color: #a6a6a6;
`