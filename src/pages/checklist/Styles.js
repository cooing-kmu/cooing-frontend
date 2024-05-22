import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffad0;
  height: 100vh;
`

export const MenuContainer = styled.div`
  display: flex;
  width: 376px;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-direction: column;
  align-items: stretch;
  margin-top: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const ItemContainer = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  font-size: 16px;
  margin-left: 28px;
  margin-right: 28px;
  gap: 6px;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: ${(props) => (props.clicked ? 'none' : 'solid 1px #a6a6a6')};
  &:last-child {
    border-bottom: none;
  }
  color: ${(props) => (props.clicked ? '#fd814a' : 'black')};
`

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-left: 18px;
  max-width: 320px;
  max-height: 480px; /* 원하는 높이로 설정 */
  overflow-y: auto;
  img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
  &::-webkit-scrollbar {
    // 스크롤바 없음
    display: none;
  }
`
