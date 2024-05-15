import React from 'react'
import { Link } from 'react-router-dom'
import './InfoSection.css'

import vector from '../assets/vector-right-white.svg'
const InfoSection = ({
  title,
  detailLink,
  scrapLink,
  bgColor,
  detailColor,
  scrapColor,
  icon,
}) => {
  return (
    <div className='section-component' style={{ backgroundColor: bgColor }}>
      <h2 className='section-title'>
        {title} <img src={icon} />{' '}
      </h2>
      <div className='section-links'>
        <Link
          to={detailLink}
          className='section-link'
          style={{ backgroundColor: detailColor }}
        >
          바로보기 <img src={vector} />
        </Link>
        <Link
          to={scrapLink}
          className='section-link'
          style={{ backgroundColor: scrapColor }}
        >
          스크랩 목록
          <img src={vector} />
        </Link>
      </div>
    </div>
  )
}

export default InfoSection
