// src/store/atoms.js
import { atom } from 'recoil';

export const userState = atom({
    key: 'userState', // 고유한 key
    default: null, // 기본값은 로그인 되지 않은 상태
})
export const roleState = atom({
    key: 'role',
    default: '', // 초기값은 빈 문자열로 설정
});

export const nicknameState = atom({
    key: 'name',
    default: '',
});

export const profileMessageState = atom({
    key: 'profileMessage',
    default: '',
});

export const profileImageState = atom({
    key: 'profileImageUrl',
    default: '',
});

export const interestState = atom({
    key: 'interestKeyword',
    default: Array(16).fill(0), // 초기값은 클릭되지 않은 상태를 의미하는 0으로 채워진 배열
});

export const concernKeywordState = atom({
    key: 'concernKeyword', // unique ID for this atom
    default: Array(8).fill(0), // default value (initial state)
});

export const isMatchingActiveState = atom({
    key: 'isMatchingActive',
    default: 'true',
});



