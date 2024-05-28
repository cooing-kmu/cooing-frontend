import React from 'react'
import {
  MainContainer,
  InfoContainer,
  DetailContainer,
} from '../../components/BgComponent'
import policyData from '../../data/PolicyData'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/header/Header'

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
            <DetailContainer title='정책 분야' content={policy.polyRlmCd} />
            <DetailContainer title='정책 지역' content={policy.polyBizSecd} />
            <DetailContainer title='지원 내용' content={policy.sporCn} />
            <DetailContainer
              title='사업 신청기간'
              content={policy.prdRpttSecd}
            />
            <DetailContainer title='사업 운영기간' content={policy.bizPrdCn} />
            <DetailContainer title='지원 규모' content={policy.sporScvl} />

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
            <DetailContainer title='연령' content={policy.ageInfo} />
            <DetailContainer title='거주지 및 소득' content={policy.prcpCn} />
            <DetailContainer title='학력' content={policy.accrRqisCn} />
            <DetailContainer title='취업상태' content={policy.empmSttsCn} />
            <DetailContainer title='특화 분야' content={policy.splzRlmRqisCn} />
            <DetailContainer title='추가 단서 사항' content={policy.aditRscn} />
            <DetailContainer
              title='참여 제한 대상'
              content={policy.prcpLmttTrgtCn}
            />

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

            <DetailContainer title='신청 절차' content={policy.rqutProcCn} />
            <DetailContainer title='심사 및 발표' content={policy.jdgnPresCn} />
            <DetailContainer title='신청 사이트' content={policy.rqutUrla} />
            <DetailContainer title='제출 서류' content={policy.pstnPaprCn} />

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
            <DetailContainer title='기타 정보' content={policy.etct} />
            <DetailContainer title='주관 기관' content={policy.mngtMson} />
            <DetailContainer title='운영기관' content={policy.cnsgNmor} />
            <DetailContainer
              title='참고 사이트 1'
              content={<a href={policy.rfcSiteUrla1}>{policy.rfcSiteUrla1}</a>}
            />
            <DetailContainer
              title='참고 사이트 2'
              content={<a href={policy.rfcSiteUrla2}>{policy.rfcSiteUrla2}</a>}
            />
          </div>
        </div>
      </InfoContainer>
    </MainContainer>
  )
}

export default PolicyDetail