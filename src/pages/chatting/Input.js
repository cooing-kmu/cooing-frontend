import React from 'react'
import './Chatting.css'
import theme from '../../Theme'
import sendIcon from '../../assets/icons/icon-send.svg'

const Input = () => {
  return (
    <div className='input'>
      <input
        type='text'
        placeholder='메시지를 입력하세요.'
        style={{ color: `${theme.gray}` }}
      />
      <div className='send'>
        <button onClick={() => console.log('aa')}>
          <img src={sendIcon} alt='보내기버튼' />
        </button>
      </div>
    </div>
  )
}
export default Input
