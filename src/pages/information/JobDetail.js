import React, { useEffect, useState } from 'react'
import {
  MainContainer,
  InfoContainer,
  DetailContainer,
} from '../../components/information/BgComponent'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import { useRecoilState } from 'recoil'
import { hasInfoScrapState } from '../../utils/userAtom'
import { ReactComponent as Ic_ScrapTrue } from '../../assets/icons/icon-info-scrap-true.svg'
import { ReactComponent as Ic_ScrapFalse } from '../../assets/icons/icon-info-scrap-false.svg'
import axios from 'axios'

const JobDetail = () => {
  const { id } = useParams()
  const [job, setJob] = useState([])
  const [error, setError] = useState(false)
  const [hasInfoScrap, setHasInfoScrap] = useRecoilState(hasInfoScrapState)

  useEffect(() => {
    fetch(`${DOMAIN_NAME}/support/job/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setJob(data.body)
      })
      .catch((error) => {
        setError(true)
      })
  }, [id, hasInfoScrap]) // id가 변경될 때마다 요청을 다시 보냅니다.

  if (error) {
    return (
      <MainContainer>
        <div>채용 데이터를 찾을 수 없습니다.</div>
      </MainContainer>
    )
  }

  const handleScrapClick = async () => {
    try {
      const response = await axios.post(
        `${DOMAIN_NAME}/support/job/${id}/scrap`,
        {},
        {
          headers: {
            Authorization: window.localStorage.getItem('Authorization'),
          },
        }
      )
      if (response.status === 200) {
        setHasInfoScrap(!hasInfoScrap)
        console.log(hasInfoScrap)
      }
    } catch (error) {
      console.error('스크랩을 전송하는 중 오류 발생:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`${DOMAIN_NAME}/support/policy/${id}/scrap`, {
        headers: {
          Authorization: window.localStorage.getItem('Authorization'),
        },
      })
      setHasInfoScrap(!hasInfoScrap)
      console.log('삭제 성공')
    } catch (error) {
      console.error('삭제 실패', error)
      console.log(hasInfoScrap)
    }
  }
  return (
    <MainContainer>
      <Header title={'채용공고'} />
      <MainContainer>
        <div
          style={{
            position: 'absolute',
            top: '90px',
            right: '70px',
            zIndex: 1,
          }}
        >
          {hasInfoScrap === true ? (
            <Ic_ScrapTrue onClick={handleDelete} />
          ) : (
            <Ic_ScrapFalse onClick={handleScrapClick} />
          )}
        </div>
        <InfoContainer>
          <div>
            <h1>{job.recrutPbancTtl}</h1>
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
                {`D-${job.decimalDay}`}
              </p>
              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                채용 요약
              </h4>
              <hr
                style={{
                  width: '19%',
                  border: 0,
                  borderTop: '1.85px solid',
                  marginTop: 0,
                  marginBottom: 20,
                }}
              />
              <DetailContainer title='채용 분야' content={job.ncsCdNmLst} />
              <DetailContainer
                title='공고 기간'
                content={`${job.pbancBgngYmd} ~ ${job.pbancEndYmd}`}
              />
              <DetailContainer
                title='채용 인원'
                content={`${job.recrutNope}명`}
              />
              <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                <DetailContainer
                  title='전형 및 절차'
                  content={job.scrnprcdrMthdExpln}
                />
              </div>
              <DetailContainer
                title='채용 사이트'
                content={<a href={job.srcUrl}> {job.srcUrl} </a>}
              />

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                지원 자격
              </h4>
              <hr
                style={{
                  width: '19%',
                  border: 0,
                  borderTop: '1.85px solid',
                  marginTop: 0,
                  marginBottom: 20,
                }}
              />
              <DetailContainer title='경력' content={job.recrutSeNm} />
              <DetailContainer title='학력' content={job.acbgCondNmLst} />
              <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                <DetailContainer title='자격 조건' content={job.aplyQlfcCn} />
              </div>
              <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                <DetailContainer title='우대 조건' content={job.prefCondCn} />
              </div>
              <div style={{ textAlign: 'left', whiteSpace: 'pre-line' }}>
                <DetailContainer title='결격 사유' content={job.disqlfcRsn} />
              </div>

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                근무 조건
              </h4>
              <hr
                style={{
                  width: '19%',
                  border: 0,
                  borderTop: '1.85px solid',
                  marginTop: 0,
                  marginBottom: 20,
                }}
              />

              <DetailContainer title='채용 형태' content={job.hireTypeNmLst} />
              <DetailContainer title='기관명' content={job.instNm} />
              <DetailContainer title='근무지' content={job.workRgnNmLst} />
            </div>
          </div>
        </InfoContainer>{' '}
      </MainContainer>
    </MainContainer>
  )
}

export default JobDetail
