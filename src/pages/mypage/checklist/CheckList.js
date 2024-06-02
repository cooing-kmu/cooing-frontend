import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../../components/header/Header'
import { ReactComponent as Ic_Plus } from '../../../assets/icons/icon-plus.svg'
import * as style from './Styles'
import { DOMAIN_NAME } from '../../../App'

export default function CheckList() {
  const [clickedItem, setClickedItem] = useState('') // 클릭된 아이템의 이름 상태
  const [imagesForClickedItem, setImagesForClickedItem] = useState([]) // 클릭된 아이템의 이미지 리스트 상태
  const [data, setData] = useState(null) // 전체 데이터 상태
  const [isLoading, setIsLoading] = useState(true) // 로딩 상태

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...')
        const response = await axios.get(`${DOMAIN_NAME}/user/checklist`, {
          withCredentials: true, // 쿠키 전송 활성화
        })
        console.log('Data fetched successfully!')
        setData(response.data.body)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleItemClick = (itemName) => {
    if (data && data[itemName]) {
      // console.log(`Data for ${itemName}:`, data[itemName]) // 추가된 콘솔 로그
      setImagesForClickedItem(data[itemName])
      setClickedItem(clickedItem === itemName ? '' : itemName)
    }
  }

  const items = [
    {
      name: 'income',
      text: '1. 소득',
    },
    {
      name: 'housing',
      text: '2. 주거',
    },
    {
      name: 'finance',
      text: '3. 금융',
    },
    {
      name: 'education',
      text: '4. 진학',
    },
    {
      name: 'employment',
      text: '5. 취업',
    },
    {
      name: 'health',
      text: '6. 의료 및 건강',
    },
    {
      name: 'miscellaneous',
      text: '7. 기타',
    },
    {
      name: 'tips',
      text: '8. 알아두면 꿀 팁',
    },
  ]

  return (
    <style.MainContainer>
      <Header title='자립 체크리스트' />
      <style.MenuContainer>
        <style.ToggleContainer>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <style.ItemContainer
                onClick={() => handleItemClick(item.name)}
                clicked={clickedItem === item.name ? 'true' : undefined} // 여기서 수정
              >
                {item.text}
                <Ic_Plus
                  fill={clickedItem === item.name ? '#fd814a' : 'black'}
                />
              </style.ItemContainer>
              {clickedItem === item.name && (
                <style.ImageContainer>
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    imagesForClickedItem.map((imageUrl, index) => (
                      <img
                        key={imageUrl}
                        src={imageUrl}
                        alt={`Image ${index}`}
                      />
                    ))
                  )}
                </style.ImageContainer>
              )}
            </React.Fragment>
          ))}
        </style.ToggleContainer>
      </style.MenuContainer>
    </style.MainContainer>
  )
}
