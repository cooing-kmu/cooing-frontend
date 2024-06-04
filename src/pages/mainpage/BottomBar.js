// BottomBar.js
import React from 'react'
import styled from 'styled-components'
import Img_Obj1 from '../../assets/images/image-obj1.png'
import Img_Obj2 from '../../assets/images/image-obj2.png'
import Img_Obj3 from '../../assets/images/image-obj3.png'
import Img_Obj4 from '../../assets/images/image-obj4.png'
import Img_Obj5 from '../../assets/images/image-obj5.png'
import Img_Obj6 from '../../assets/images/image-obj6.png'
import Img_Obj7 from '../../assets/images/image-obj7.png'
import Img_Obj8 from '../../assets/images/image-obj8.png'

export default function BottomBar({ handleSelectedObj, itemList }) {
  const objList = [
    Img_Obj1,
    Img_Obj2,
    Img_Obj3,
    Img_Obj4,
    Img_Obj5,
    Img_Obj6,
    Img_Obj7,
    Img_Obj8,
  ]

  const handleClick = (idx, img) => {
    if (itemList[idx].count > 0) {
      handleSelectedObj(img)
    }
  }

  const renderObjList = () => {
    return (
      <>
        <Row>
          {objList.slice(0, 4).map((el, idx) => (
            <ObjContainer
              key={idx}
              backgroundImg={el}
              onClick={() => handleClick(idx, el)}
              disabled={itemList[idx].count === 0}
            >
              <ItemCount>{itemList[idx].count}</ItemCount>
            </ObjContainer>
          ))}
        </Row>
        <Row>
          {objList.slice(4, 8).map((el, idx) => (
            <ObjContainer
              key={idx + 4}
              backgroundImg={el}
              onClick={() => handleClick(idx + 4, el)}
              disabled={itemList[idx + 4].count === 0}
            >
              <ItemCount>{itemList[idx + 4].count}</ItemCount>
            </ObjContainer>
          ))}
        </Row>
      </>
    )
  }

  return <Wrapper>{renderObjList()}</Wrapper>
}

const Wrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 380px;
`

const ObjContainer = styled.div`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const ItemCount = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  color: #fd814a;
  font-size: 14px;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`
