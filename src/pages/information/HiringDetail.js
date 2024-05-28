import React from 'react'
import {
  MainContainer,
  InfoContainer,
  DetailContainer,
} from '../../components/information/BgComponent'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import HiringData from '../../data/HiringData'

const HiringDetail = () => {
  const { id } = useParams()
  const hiring = HiringData.find((item) => item.id === parseInt(id))

  if (!hiring) {
    return (
      <MainContainer>
        <div>채용 데이터를 찾을 수 없습니다.</div>
      </MainContainer>
    )
  }
  return (
    <MainContainer>
      <Header title={'채용공고'} />
      <InfoContainer>
        <div>
          <h1>{hiring.recrutPbancTtl}</h1>
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
              {`D-${hiring.decimalDay}`}
            </p>
            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>채용 요약</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />
            <DetailContainer title='채용 분야' content={hiring.ncsCdNmLst} />
            <DetailContainer
              title='공고 기간'
              content={`${hiring.pbancBgngYmd} ~ ${hiring.pbancEndYmd}`}
            />
            <DetailContainer
              title='채용 인원'
              content={`${hiring.recrutNope}명`}
            />
            <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
              <DetailContainer
                title='전형 및 절차'
                content={hiring.scrnprcdrMthdExpln}
              />
            </div>
            <DetailContainer title='채용 사이트' content={hiring.srcUrl} />

            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>지원 자격</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />
            <DetailContainer title='경력' content={hiring.recrutSeNm} />
            <DetailContainer title='학력' content={hiring.acbgCondNmLst} />
            <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
              <DetailContainer title='자격 조건' content={hiring.aplyQlfcCn} />
            </div>
            <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
              <DetailContainer title='우대 조건' content={hiring.prefCondCn} />
            </div>
            <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
              <DetailContainer title='결격 사유' content={hiring.disqlfcRsn} />
            </div>

            <h4 style={{ textAlign: 'center', marginBottom: 5 }}>근무 조건</h4>
            <hr
              style={{
                width: '19%',
                border: 0,
                borderTop: '1.85px solid',
                marginTop: 0,
                marginBottom: 20,
              }}
            />

            <DetailContainer title='채용 형태' content={hiring.hireTypeNmLst} />
            <DetailContainer title='기관명' content={hiring.instNm} />
            <DetailContainer title='근무지' content={hiring.workRgnNmLst} />
          </div>
        </div>
      </InfoContainer>
    </MainContainer>
  )
}

export default HiringDetail
