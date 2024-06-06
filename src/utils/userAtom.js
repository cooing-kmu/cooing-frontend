import { atom } from 'recoil'

export const userState = atom({
  key: 'userState', // 고유한 key
  default: null, // 기본값은 로그인 되지 않은 상태
})

export const tokenState = atom({
  key: 'tokenState', // 고유한 key
  default: null, // 기본값은 로그인 되지 않은 상태
})

export const socketState = atom({
  key: 'socketState', // 고유한 key
  default: null, // 기본값은 로그인 되지 않은 상태
})