import React from 'react'
import { MainContainer, InfoContainer } from '../../components/BgComponent'
import policyData from '../../data/PolicyData'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/header/Header'
export const DetailContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`
export const DetailHeadContainer = styled.div`
  display: flex;
  font-weight: bold;
  margin-right: 9px;
  text-align: center;
  justify-content: center;
  width: 28%;
`
export const DetailBodyContainer = styled.div`
  width: 72%;
`
const PolicyDetail = ({ policyId }) => {
  const { id } = useParams()
  const policy = policyData.find((item) => item.id === parseInt(id))

  if (!policy) {
    return (
      <MainContainer>
        <div>정책 데이터를 찾을 수 없습니다.</div>
      </MainContainer>
    )
  }
  return (
    <MainContainer>
      <Header title={'지원정책'} />
      <InfoContainer>
        <div>
          <h1>{policy.polyBizSjnm}</h1>
          <div
            style={{
              textAlign: 'left',
              padding: '0 10px',
              justifyContent: '',
            }}
          >
            <p
              style={{
                textAlign: 'center',
                fontSize: '15px',
                marginBottom: '36px',
              }}
            >
              {' '}
              {policy.polyItcnCn}
            </p>
            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>정책 요약</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />
            <DetailContainer>
              <DetailHeadContainer>정책 분야</DetailHeadContainer>
              {policy.polyRlmCd}
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>정책 지역</DetailHeadContainer>
              <DetailBodyContainer>{policy.polyBizSecd}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>지원 내용</DetailHeadContainer>
              <DetailBodyContainer>{policy.sporCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>사업 신청기간</DetailHeadContainer>
              <DetailBodyContainer>{policy.prdRpttSecd}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>사업 운영기간</DetailHeadContainer>
              <DetailBodyContainer>{policy.bizPrdCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>지원 규모</DetailHeadContainer>
              <DetailBodyContainer>{policy.sporScvl}</DetailBodyContainer>
            </DetailContainer>

            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>신청 자격</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />
            <DetailContainer>
              <DetailHeadContainer>연령</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.ageInfo}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>거주지 및 소득</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.prcpCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>학력</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.accrRqisCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>취업상태</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.empmSttsCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>특화 분야</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.splzRlmRqisCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>추가 단서 사항</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.aditRscn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>참여 제한 대상</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.prcpLmttTrgtCn}</DetailBodyContainer>
            </DetailContainer>

            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>신청 방법</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />

            <DetailContainer>
              <DetailHeadContainer>신청 절차</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.rqutProcCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>심사 및 발표</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.jdgnPresCn}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>신청 사이트</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.rqutUrla}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>제출 서류</DetailHeadContainer>{' '}
              <DetailBodyContainer>{policy.pstnPaprCn}</DetailBodyContainer>
            </DetailContainer>

            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>기타</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />
            <DetailContainer>
              <DetailHeadContainer>기타 정보</DetailHeadContainer>
              <DetailBodyContainer>{policy.etct}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>주관 기관</DetailHeadContainer>
              <DetailBodyContainer>{policy.mngtMson}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>운영기관</DetailHeadContainer>
              <DetailBodyContainer>{policy.cnsgNmor}</DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>참고 사이트 1</DetailHeadContainer>
              <DetailBodyContainer>
                <a href={policy.rfcSiteUrla1}>{policy.rfcSiteUrla1}</a>
              </DetailBodyContainer>
            </DetailContainer>
            <DetailContainer>
              <DetailHeadContainer>참고 사이트 2</DetailHeadContainer>
              <DetailBodyContainer>
                <a href={policy.rfcSiteUrla2}>{policy.rfcSiteUrla2}</a>
              </DetailBodyContainer>
            </DetailContainer>
          </div>
        </div>
      </InfoContainer>
    </MainContainer>
  )
}

export default PolicyDetail
