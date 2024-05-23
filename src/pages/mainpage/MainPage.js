import Footer from '../../components/footer/Footer'
import React, { useState, useRef, useEffect } from 'react'
import * as style from './Styles'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CooingLogo } from '../../assets/cooingLogo.svg'
import { ReactComponent as Ic_Alarm } from '../../assets/icons/icon-alarm.svg'
import { ReactComponent as Ic_People } from '../../assets/icons/icon-people.svg'
import Img_CookieHouse from '../../assets/images/image-cookiehouse.png'
import BottomBar from './BottomBar'

const OBJECT_SIZE = 90 // 객체의 크기

export default function MainPage() {
  const canvasRef = useRef(null)
  const [selectedObj, setSelectedObj] = useState('')
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  })

  useEffect(() => {
    const handleResize = () => {
      const canvasCur = canvasRef.current
      const canvasRect = canvasCur.getBoundingClientRect()
      const scaleX = canvasCur.width / canvasRect.width
      const scaleY = canvasCur.height / canvasRect.height

      setMousePosition({
        positionX: mousePosition.positionX / scaleX,
        positionY: mousePosition.positionY / scaleY,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mousePosition])

  useEffect(() => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')
    const bgImage = new Image()
    bgImage.src = Img_CookieHouse
    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, canvasCur.width, canvasCur.height)
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
    }
  }

  const handleSelectedObj = (obj) => {
    setSelectedObj(obj)

    // 마우스 위치 초기화
    setMousePosition({
      positionX: null,
      positionY: null,
    })
  }

  const navigate = useNavigate()

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
    >
      <style.HeaderContainer>
        <style.ButtonContainer>
          <Ic_Alarm onClick={() => navigate('/alarm')} />
        </style.ButtonContainer>
        <style.CooingLogo>
          <CooingLogo />
        </style.CooingLogo>
        <style.ButtonContainer>
          <Ic_People onClick={() => navigate('/mate-info')} />
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
        onClick={(e) => {
          if (selectedObj !== '') {
            const canvasRect = canvasRef.current.getBoundingClientRect()
            const scaleX = canvasRef.current.width / canvasRect.width
            const scaleY = canvasRef.current.height / canvasRect.height

            const canvasX = (e.clientX - canvasRect.left) * scaleX
            const canvasY = (e.clientY - canvasRect.top) * scaleY

            drawObject({
              positionX: canvasX,
              positionY: canvasY,
            })

            setSelectedObj('')
          }
        }}
      >
        <style.CanvasComponent
          ref={canvasRef}
          width={400} // Canvas 요소의 너비를 창의 너비로 설정
          height={400} // Canvas 요소의 높이를 창의 높이로 설정
        />
      </style.CanvasContainer>

      <style.Line />

      <BottomBar handleSelectedObj={handleSelectedObj} />

      {selectedObj !== '' &&
      mousePosition.positionX !== null &&
      mousePosition.positionY !== null ? (
        <style.SelectedObj
          backgroundImg={selectedObj}
          style={{
            position: 'absolute',
            left: mousePosition.positionX + OBJECT_SIZE / 2 - 5,
            top: mousePosition.positionY + OBJECT_SIZE + 15,
            // width: OBJECT_SIZE,
            // height: OBJECT_SIZE,
            pointerEvents: 'none',
          }}
        />
      ) : null}
    </style.MainContainer>
  )
}
