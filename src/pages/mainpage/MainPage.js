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
import MateModal from './MateModal'
import axios from 'axios'
import { DOMAIN_NAME } from '../../App'

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

var itemList = [
  { name: '빼빼로', count: 0 },
  { name: '도넛', count: 0 },
  { name: '크래커', count: 0 },
  { name: '캔디케인', count: 0 },
  { name: '하트', count: 0 },
  { name: '곰젤리', count: 0 },
  { name: '당고', count: 0 },
  { name: '수박바', count: 0 },
]

export default function MainPage() {
  const canvasRef = useRef(null)
  const [selectedObj, setSelectedObj] = useState('')
  const [mousePosition, setMousePosition] = useState({
    positionX: null,
    positionY: null,
  })
  const [_user, setUser] = useState(null)
  const [items, setItems] = useState(itemList)
  const [showModal, setShowModal] = useState(false)
  const [houseState, setHouseState] = useState(null)

  // 과자집 상태 가져오기
  useEffect(() => {
    const fetchHouseState = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}house`,
          {
            headers: {
              Authorization: window.localStorage.getItem('Authorization'),
            },
          }
        )
        const _user = response.data.body
        setUser({ ...response.data.body })
        _user.rewardList.forEach((item, idx) => {
          itemList[idx]['count'] = item
        })
        console.log('here')
        setHouseState(_user.house)
        drawInitialObjects(_user.house.items)
        console.log('User Response Data:', response.data) // 데이터 확인용 콘솔 로그
      } catch (error) {
        console.error('Error fetching house state:', error)
      }
    }
    fetchHouseState()
  }, [])

  // 초기 객체들을 캔버스에 그리기
  const drawInitialObjects = (items) => {
    const canvasCur = canvasRef.current
    const ctx = canvasCur.getContext('2d')

    // ctx.clearRect(0, 0, canvasCur.width, canvasCur.height); // 기존 캔버스 내용을 지우기

    items.forEach((item) => {
      const objIndex = itemList.findIndex((i) => i.name === item.name)
      if (objIndex !== -1) {
        const objImage = new Image()
        objImage.src = objList[objIndex]
        console.log('items', item)
        objImage.onload = () => {
          ctx.drawImage(objImage, item.x, item.y, OBJECT_SIZE, OBJECT_SIZE)
        }
      }
    })
  }

  // 과자집 상태 업데이트
  const updateHouseState = async (newItems) => {
    try {
      // const tokenResponse = await axios.get(`${DOMAIN_NAME}/test-user`)
      // const token = tokenResponse.data.body

      await axios.post(
        `${process.env.REACT_APP_BASE_URL}house`,
        { house: { items: newItems } },
        {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        }
      )
      setHouseState({ items: newItems })
    } catch (error) {
      console.error('Error updating house state:', error)
    }
  }

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
        ctx.drawImage(cloudImage, 10, 10, 130, 130)
      }

      box3Image.onload = () => {
        ctx.drawImage(
          box3Image,
          canvasCur.width - 110,
          canvasCur.height - 110,
          110,
          110
        )
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

      const canvasCenterX = canvasRect.width / 2
      const canvasCenterY = canvasRect.height / 2
      const relativeMouseX = mouseEndPosition.positionX - canvasCenterX
      const relativeMouseY = mouseEndPosition.positionY - canvasCenterY

      const objectX = canvasCur.width / 2 + relativeMouseX - OBJECT_SIZE / 2
      const objectY = canvasCur.height / 2 + relativeMouseY - OBJECT_SIZE / 2

      ctx.drawImage(objImage, objectX, objectY, OBJECT_SIZE, OBJECT_SIZE)

      const objIndex = objList.findIndex((img) => img === selectedObj)
      const newItemList = [...items]
      newItemList[objIndex].count -= 1
      setItems(newItemList)

      const selectedItem = newItemList[objIndex]
      console.log(
        `Object placed: ${selectedItem.name}, Count: ${selectedItem.count}`
      )

      const updatedItems = [
        ...(houseState?.items || []),
        { name: selectedItem.name, x: objectX, y: objectY },
      ]
      updateHouseState(updatedItems)
    }
  }

  const handleSelectedObj = (obj) => {
    setSelectedObj(obj)

    const objIndex = objList.findIndex((img) => img === obj)
    if (objIndex !== -1) {
      const selectedItem = items[objIndex]
    }

    setMousePosition({
      positionX: null,
      positionY: null,
    })
  }

  const navigate = useNavigate()
  const matchingActive = true

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
        <style.CanvasComponent ref={canvasRef} width={380} height={380} />
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
