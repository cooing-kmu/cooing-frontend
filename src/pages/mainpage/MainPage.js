// MainPage.js
import React, { useState, useRef, useEffect } from 'react'
import * as style from './Styles'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CooingLogo } from '../../assets/cooingLogo.svg'
import { ReactComponent as Ic_Alarm } from '../../assets/icons/icon-alarm.svg'
import { ReactComponent as Ic_People } from '../../assets/icons/icon-people.svg'
import Img_CookieHouse from '../../assets/images/image-cookiehouse.png'
import BottomBar from './BottomBar'
import Img_Obj1 from '../../assets/images/image-obj1.png'
import Img_Obj2 from '../../assets/images/image-obj2.png'
import Img_Obj3 from '../../assets/images/image-obj3.png'
import Img_Obj4 from '../../assets/images/image-obj4.png'
import Img_Obj5 from '../../assets/images/image-obj5.png'
import Img_Obj6 from '../../assets/images/image-obj6.png'
import Img_Obj7 from '../../assets/images/image-obj7.png'
import Img_Obj8 from '../../assets/images/image-obj8.png'
import Img_Cloud from '../../assets/images/image-cloud.png'
import Img_Box_3 from '../../assets/images/image-box-3.png'
import MateModal from './MateModal' // 모달 컴포넌트 임포트

const OBJECT_SIZE = 80 // 객체의 크기

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

const itemList = [
  { name: '빼빼로', count: 5 },
  { name: '도넛', count: 1 },
  { name: '크래커', count: 3 },
  { name: '캔디케인', count: 1 },
  { name: '하트', count: 0 },
  { name: '곰젤리', count: 1 },
  { name: '당고', count: 2 },
  { name: '수박바', count: 1 },
]

export default function MainPage() {
  const canvasRef = useRef(null)
  const [selectedObj, setSelectedObj] = useState('')
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  })
  const [items, setItems] = useState(itemList)
  const [showModal, setShowModal] = useState(false) // 모달 표시 상태

  useEffect(() => {
    const handleResize = () => {
      const canvasCur = canvasRef.current
      const canvasRect = canvasCur.getBoundingClientRect()
      const scaleX = canvasCur.width / canvasRect.width
      const scaleY = canvasCur.height / canvasRect.height

      setMousePosition((prevMousePosition) => ({
        positionX: prevMousePosition.positionX / scaleX,
        positionY: prevMousePosition.positionY / scaleY,
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')

    const bgImage = new Image()
    bgImage.src = Img_CookieHouse
    const cloudImage = new Image()
    cloudImage.src = Img_Cloud
    const box3Image = new Image()
    box3Image.src = Img_Box_3

    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, canvasCur.width, canvasCur.height)

      cloudImage.onload = () => {
        ctx.drawImage(cloudImage, 10, 10, 130, 130) // 좌측 상단에 배치
      }

      box3Image.onload = () => {
        ctx.drawImage(
          box3Image,
          canvasCur.width - 110,
          canvasCur.height - 110,
          110,
          110
        ) // 우측 하단에 배치
      }
    }
  }, [])

  const drawObject = (mouseEndPosition) => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')
    const objImage = new Image()
    objImage.src = selectedObj
    objImage.onload = () => {
      const canvasRect = canvasCur.getBoundingClientRect()
      const scaleX = canvasCur.width / canvasRect.width
      const scaleY = canvasCur.height / canvasRect.height

      // 마우스 커서와 캔버스의 중심 간의 상대적인 위치 계산
      const canvasCenterX = canvasRect.width / 2
      const canvasCenterY = canvasRect.height / 2
      const relativeMouseX = mouseEndPosition.positionX - canvasCenterX
      const relativeMouseY = mouseEndPosition.positionY - canvasCenterY

      // 객체의 X, Y 좌표 계산
      const objectX = canvasCur.width / 2 + relativeMouseX - OBJECT_SIZE / 2
      const objectY = canvasCur.height / 2 + relativeMouseY - OBJECT_SIZE / 2

      // 객체 그리기
      ctx.drawImage(objImage, objectX, objectY, OBJECT_SIZE, OBJECT_SIZE)

      // 아이템 갯수 차감
      const objIndex = objList.findIndex((img) => img === selectedObj)
      const newItemList = [...items]
      newItemList[objIndex].count -= 1
      setItems(newItemList)

      // 로그 출력
      const selectedItem = newItemList[objIndex]
      console.log(
        `Object placed: ${selectedItem.name}, Count: ${selectedItem.count}`
      )
    }
  }

  const handleSelectedObj = (obj) => {
    setSelectedObj(obj)

    const objIndex = objList.findIndex((img) => img === obj)
    if (objIndex !== -1) {
      const selectedItem = items[objIndex]
    }

    // 마우스 위치 초기화
    setMousePosition({
      positionX: null,
      positionY: null,
    })
  }

  const navigate = useNavigate()
  const matchingActive = false // 조건을 여기서 설정, MATE 매칭 활성화 시 true, 비활성화 시 false

  const handlePeopleIconClick = () => {
    if (matchingActive) {
      navigate('/mate-info')
    } else {
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <style.MainContainer
      onMouseMove={(e) => {
        if (selectedObj !== '') {
          const canvasRect = canvasRef.current.getBoundingClientRect()
          const canvasCenterX = canvasRect.width / 2
          const canvasCenterY = canvasRect.height / 2
          const mouseX = e.clientX - canvasRect.left
          const mouseY = e.clientY - canvasRect.top

          // 마우스 커서와 캔버스의 중심 간의 상대적인 위치 계산
          const relativeMouseX = mouseX - canvasCenterX + OBJECT_SIZE * 2 + 19
          const relativeMouseY = mouseY - canvasCenterY + OBJECT_SIZE * 2 + 18

          setMousePosition({
            ...mousePosition,
            positionX: relativeMouseX,
            positionY: relativeMouseY,
          })
        }
      }}
      onClick={(e) => {
        const canvasRect = canvasRef.current.getBoundingClientRect()
        if (
          selectedObj !== '' &&
          e.clientX >= canvasRect.left &&
          e.clientX <= canvasRect.right &&
          e.clientY >= canvasRect.top &&
          e.clientY <= canvasRect.bottom
        ) {
          const scaleX = canvasRef.current.width / canvasRect.width
          const scaleY = canvasRef.current.height / canvasRect.height

          const canvasX = (e.clientX - canvasRect.left) * scaleX
          const canvasY = (e.clientY - canvasRect.top) * scaleY

          drawObject({
            positionX: canvasX,
            positionY: canvasY,
          })

          setSelectedObj('')
        } else if (selectedObj !== '') {
          setSelectedObj('')
        }
      }}
    >
      <style.HeaderContainer>
        <style.ButtonContainer>
          <Ic_Alarm onClick={() => navigate('/alarm')} />
        </style.ButtonContainer>
        <style.CooingLogo>
          <CooingLogo />
        </style.CooingLogo>
        <style.ButtonContainer>
          <Ic_People onClick={handlePeopleIconClick} />
        </style.ButtonContainer>
      </style.HeaderContainer>

      <style.CanvasContainer
        onMouseMove={(e) => {
          if (selectedObj !== '') {
            const canvasRect = canvasRef.current.getBoundingClientRect()
            const scaleX = canvasRef.current.width / canvasRect.width
            const scaleY = canvasRef.current.height / canvasRect.height

            setMousePosition({
              positionX: (e.clientX - canvasRect.left) * scaleX,
              positionY: (e.clientY - canvasRect.top) * scaleY,
            })
          }
        }}
      >
        <style.CanvasComponent
          ref={canvasRef}
          width={380} // Canvas 요소의 너비를 창의 너비로 설정
          height={380} // Canvas 요소의 높이를 창의 높이로 설정
        />
      </style.CanvasContainer>

      <style.Line />

      <BottomBar handleSelectedObj={handleSelectedObj} itemList={items} />

      {selectedObj !== '' &&
      mousePosition.positionX !== null &&
      mousePosition.positionY !== null ? (
        <style.SelectedObj
          backgroundImg={selectedObj}
          style={{
            position: 'absolute',
            left: mousePosition.positionX + OBJECT_SIZE - 20,
            top: mousePosition.positionY + OBJECT_SIZE + 35,
            pointerEvents: 'none',
          }}
        />
      ) : null}

      <MateModal
        show={showModal}
        onClose={closeModal}
        title='MATE 정보'
        message='MATE 매칭을 위해 [마이페이지 - 매칭 기능 활성화]
에서 MATE 매칭을 활성화 해주세요. 😊'
      />
    </style.MainContainer>
  )
}
