import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled.div`
  gap: 16px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  margin-bottom: 20px;
`

const SubContainer = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-weight: 200;
  overflow-x: auto; /* 가로 스크롤 추가 */
  max-width: 480px; /* 최대 너비 설정 */
  &::-webkit-scrollbar {
    display: none;
  }
`

const ItemContainer = styled.div`
  width: 160px;
  height: 150px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: ${(props) => (props.isClickable ? 'pointer' : 'default')};
  border: ${(props) =>
    props.clicked ? '2px solid #FC5C4C;' : '2px solid #C4C4C4'};
`

const TextContainer = styled.div`
  margin-right: 200px;
`

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 600;
  color: white;
  background-color: #fc5c4c;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  margin-top: 10px;
`

const ThinkCard = ({
                       clickedItems,
                       handleItemClick,
                       isClickable,
                       buttonName,
                       onSubmit,
                   }) => {
    const isAnyItemSelected = clickedItems.includes(true)
    const navigate = useNavigate()

    const items = [
        ['💰', '소득'],
        ['🏠', '주거'],
        ['👕', '생활'],
        ['💳', '금융'],
        ['🧠', '심리정서'],
        ['🏫️', '진학'],
        ['💼', '취업'],
        ['📚', '멘토링'],
    ]

    return (
        <MainContainer>
            <TextContainer>
                <h3>나의 고민 분야를</h3>
                <p>: 3개 이상 선택해주세요.</p>
            </TextContainer>

            <SubContainer>
                {items.map((item, index) => (
                    <ItemContainer
                        key={index}
                        onClick={isClickable ? () => handleItemClick(index) : undefined}
                        clicked={clickedItems[index] ? 1 : 0}
                        isclickable={isClickable.toString()} // isClickable prop을 문자열로 변환하여 전달
                    >
                        <h1>{item[0]}</h1>
                        {item[1]}
                    </ItemContainer>
                ))}
            </SubContainer>
            <div>
                {buttonName === '완료' ? ( // 찬우오빠 네비게이션 수정
                    <Button
                        disabled={!isAnyItemSelected}
                        onClick={() => navigate('/sign-up5')}
                    >
                        {buttonName}
                    </Button>
                ) : buttonName === '변경 완료' ? ( // 매칭 정보 변경 완료
                    <Button
                        disabled={!isAnyItemSelected}
                        onClick={async () => {
                            await onSubmit() // 비동기 함수 호출
                            alert('고민 키워드 변경이 완료 되었습니다.')
                            navigate('/think-info')
                        }}
                    >
                        {buttonName}
                    </Button>
                ) : buttonName === '등록 완료' ? (
                    <Button
                        disabled={!isAnyItemSelected}
                        onClick={async () => {
                            await onSubmit() // 비동기 함수 호출
                            alert('매칭 정보 등록이 완료 되었습니다.')
                            navigate('/my-page')
                        }}
                    >
                        {buttonName}
                    </Button>
                ) : null}
            </div>
        </MainContainer>
    )
}

export default ThinkCard