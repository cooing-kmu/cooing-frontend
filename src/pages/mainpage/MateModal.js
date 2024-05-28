import React from 'react'
import * as style from './Styles' // 스타일을 임포트

const MateModal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null
  }

  return (
    <style.ModalOverlay>
      <style.ModalContent>
        <p>{title}</p>
        <p>{message}</p>
        <style.ConfirmButton onClick={onClose}>확인</style.ConfirmButton>
      </style.ModalContent>
    </style.ModalOverlay>
  )
}

export default MateModal
