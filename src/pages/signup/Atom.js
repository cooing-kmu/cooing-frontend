// src/store/atoms.js
import { atom } from 'recoil';

export const roleState = atom({
    key: 'role',
    default: '', // 초기값은 빈 문자열로 설정
});

// 기존의 다른 atom도 여기에 포함될 수 있습니다.
export const nicknameState = atom({
    key: 'name',
    default: '',
});

export const profileMessageState = atom({
    key: 'profileMessage',
    default: '',
});

export const profileImageState = atom({
    key: 'profileImage',
    default: '',
});

export const interestState = atom({
    key: 'interestKeyword',
    default: Array(16).fill(0), // 초기값은 클릭되지 않은 상태를 의미하는 0으로 채워진 배열
});