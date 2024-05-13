import React from 'react'
import './ScrapList.css'
import { MainContainer } from '../../components/BgComponent'
import policyData from '../../data/PolicyData'

const PolicyDetail = ({ policyId }) => {
  const policy = policyData.find((item) => item.id === policyId)

  if (!policy) {
    return <div>정책을 찾을 수 없습니다.</div>
  }

  return (
    <MainContainer>
      <div className='policy-detail-head'>지원정책</div>
      <div className='polcy-detail-body'>
        <div>
          <h1>{policy.polyBizSjnm}</h1>
          <h2>정책 소개</h2>
          <p>{policy.ploytcnCn}</p>
          <h2>정책 분야</h2>
          <p>{policy.polyRlmCd}</p>
          <h2>지원 내용</h2>
          <p>{policy.sporCn}</p>
          <h2>사업 기간</h2>
          <p>신청기간: {policy.prdRpttSecd.split('□')[1]}</p>
          <p>운영기간: {policy.bizPrdCn}</p>
          <h2>지원 규모</h2>
          <p>{policy.sporScvl}</p>
          <h2>신청 자격</h2>
          <ul>
            <li>연령: {policy.ageInfo}</li>
            <li>거주지 및 소득: {policy.prcpCn}</li>
            <li>학력: {policy.accrRqisCn}</li>
            <li>취업상태: {policy.empmSttsCn}</li>
            <li>특화 분야: {policy.splzRlmRqisCn}</li>
            <li>추가 단서 사항: {policy.aditRscn}</li>
          </ul>
          <h2>신청 방법</h2>
          <ul>
            <li>신청 절차: {policy.rqutProcCn}</li>
            <li>심사 및 발표: {policy.jdgnPresCn}</li>
            <li>신청 사이트: {policy.rqutUrla}</li>
            <li>제출 서류: {policy.pstnPaprCn}</li>
          </ul>
          <h2>기타 정보</h2>
          <p>{policy.etct}</p>
          <h2>주관 기관</h2>
          <p>{policy.mngtMson}</p>
          <h2>운영기관</h2>
          <p>{policy.cnsgNmor}</p>
          <h2>참고 사이트</h2>
          <ul>
            <li>
              <a href={policy.rfcSiteUrla1}>{policy.rfcSiteUrla1}</a>
            </li>
            <li>
              <a href={policy.rfcSiteUrla2}>{policy.rfcSiteUrla2}</a>
            </li>
          </ul>
        </div>
      </div>
    </MainContainer>
  )
}

export default PolicyDetail
