import React, { useState } from 'react'
import styled from 'styled-components'
import Img_Obj1 from '../../assets/images/image-obj1.png'
import Img_Obj2 from '../../assets/images/image-obj2.png'
import Img_Obj3 from '../../assets/images/image-obj3.png'
import Img_Obj4 from '../../assets/images/image-obj4.png'
import Img_Obj5 from '../../assets/images/image-obj5.png'
import Img_Obj6 from '../../assets/images/image-obj6.png'
import Img_Obj7 from '../../assets/images/image-obj7.png'
import Img_Obj8 from '../../assets/images/image-obj8.png'

export default function BottomBar({
  handleSelectedObj,
  handleMousePositionInSideBar,
}) {
  const [objList, setObjList] = useState([
    Img_Obj1,
    Img_Obj2,
    Img_Obj3,
    Img_Obj4,
    Img_Obj5,
    Img_Obj6,
    Img_Obj7,
    Img_Obj8,
  ])

  const renderObjList = () => {
    return (
      <>
        <Row>
          {objList.slice(0, 4).map((el, idx) => (
            <ObjContainer
              key={idx}
              backgroundImg={el}
              onClick={(e) => {
                handleSelectedObj(el)
                handleMousePositionInSideBar({
                  positionX: e.clientX,
                  positionY: e.clientY,
                })
              }}
            />
          ))}
        </Row>
        <Row>
          {objList.slice(4, 8).map((el, idx) => (
            <ObjContainer
              key={idx + 4}
              backgroundImg={el}
              onClick={(e) => {
                handleSelectedObj(el)
                handleMousePositionInSideBar({
                  positionX: e.clientX,
                  positionY: e.clientY,
                })
              }}
            />
          ))}
        </Row>
      </>
    )
  }
  return <Wrapper>{renderObjList()}</Wrapper>
}

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   position: absolute;
//   bottom: 0;
// `
//
// const Row = styled.div`
//   display: flex;
//   justify-content: space-around;
//   width: 100%;
// `
//
// const ObjContainer = styled.div`
//   cursor: pointer;
//   width: 90px;
//   height: 90px;
//   background-image: url(${(props) => props.backgroundImg});
//   background-size: cover;
// `

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
  width: 380;
`

const ObjContainer = styled.div`
  cursor: pointer;
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  //overflow: visible;
`
