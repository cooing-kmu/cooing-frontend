import Footer from '../../components/footer/Footer'
import React, { useState, useRef, useEffect } from 'react'
import * as style from './Styles'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CooingLogo } from '../../assets/cooingLogo.svg'
import { ReactComponent as Ic_Alarm } from '../../assets/icons/icon-alarm.svg'
import { ReactComponent as Ic_People } from '../../assets/icons/icon-people.svg'
import Img_CookieHouse from '../../assets/images/image-cookiehouse.png'
import BottomBar from './BottomBar'

export default function MainPage() {
  const canvasRef = useRef(null)
  const [selectedObj, setSelectedObj] = useState('')
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  })

  const [mouseEndPosition, setMouseEndPosition] = useState({
    positionX: null,
    positionY: null,
  })
  //
  // const [canvasSize, setCanvasSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // })
  //
  // const updateCanvasSize = () => {
  //   setCanvasSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   })
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('resize', updateCanvasSize)
  //   return () => window.removeEventListener('resize', updateCanvasSize)
  // }, [])
  //
  // useEffect(() => {
  //   drawBackground()
  // }, [canvasSize])

  const drawBackground = () => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')
    const bgImage = new Image()
    bgImage.src = Img_CookieHouse
    if (ctx === null) return
    ctx.drawImage(bgImage, 0, 0, window.innerWidth, window.innerHeight)
  }

  const drawObject = (mouseEndPosition) => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')
    const objImage = new Image()
    objImage.src = selectedObj
    if (ctx === null) return
    if (!mouseEndPosition.positionX) return
    if (!mouseEndPosition.positionY) return
    ctx.drawImage(
      objImage,
      mouseEndPosition.positionX - 45,
      mouseEndPosition.positionY - 45,
      90,
      90
    )
  }

  const handleSelectedObj = (obj) => {
    setSelectedObj(obj)
  }

  const handleMousePositionInSideBar = ({ positionX, positionY }) => {
    setMousePosition({ ...mousePosition, positionX, positionY })
  }

  const navigate = useNavigate()

  return (
    <style.MainContainer
      onMouseMove={(e) => {
        if (selectedObj !== '') {
          setMousePosition({
            ...mousePosition,
            positionX: e.clientX,
            positionY: e.clientY,
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

      <style.CanvasContainer backgroundImg={Img_CookieHouse}>
        <style.CanvasComponent ref={canvasRef} width='480' height='400' />
      </style.CanvasContainer>

      <style.Line />

      <BottomBar
        handleSelectedObj={handleSelectedObj}
        handleMousePositionInSideBar={handleMousePositionInSideBar}
      />
      {selectedObj !== '' &&
      mousePosition.positionX &&
      mousePosition.positionY ? (
        <style.SelectedObj
          backgroundImg={selectedObj}
          style={{
            position: 'absolute',
            left: mousePosition.positionX, // 화면 비율이 바뀌면 이 값도 바꿔줘야함 ;; 575
            top: mousePosition.positionY,
          }}
          onClick={(e) => {
            console.log('click')
            setSelectedObj('')
            drawObject({
              positionX: e.clientX, // 여기도 575
              positionY: e.clientY, // 여기도 103
            })
          }}
        />
      ) : null}
    </style.MainContainer>
  )
}
