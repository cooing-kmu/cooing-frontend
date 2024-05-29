import './Chatting.css'
import ChattingListData from '../../data/ChattingListData'
import backIcon from '../../assets/icons/icon-arrow-left.svg'
import moreIcon from '../../assets/icons/icon-more-wh.svg'
import Messages from './Messages'
import Input from './Input'
export default function ChattingRoom() {
  return (
    <div className='chatting-room'>
      <div className='chatting-room-header'>
        <img src={backIcon} alt={'뒤로가기'} />
        <span>슈크림도어 그레텔님 (MATE)</span>
        <img src={moreIcon} alt='더보기' />
      </div>
      <div className='chatting-room-chat'>
        <Messages />
        <Input />
      </div>
    </div>
  )
}
