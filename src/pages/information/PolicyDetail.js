import React, { useEffect, useState } from 'react'
import {
  MainContainer,
  InfoContainer,
  DetailContainer,
} from '../../components/information/BgComponent'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import { DOMAIN_NAME } from '../../App'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { hasInfoScrapState } from '../../Atom'
import { ReactComponent as Ic_ScrapTrue } from '../../assets/icons/icon-info-scrap-true.svg'
import { ReactComponent as Ic_ScrapFalse } from '../../assets/icons/icon-info-scrap-false.svg'

const PolicyDetail = () => {
  const { id } = useParams()
  const [policy, setPolicy] = useState([])
  const [error, setError] = useState(false)
  const [hasInfoScrap, setHasInfoScrap] = useRecoilState(hasInfoScrapState)

  console.log(hasInfoScrap)
  useEffect(() => {
    fetch(`${DOMAIN_NAME}/support/policy/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPolicy(data.body)
      })
      .catch((error) => {
        setError(true)
      })
  }, [id, hasInfoScrap]) // id가 변경될 때마다 요청을 다시 보냅니다.

  if (error) {
    return (
      <MainContainer>
        <div>정책 데이터를 찾을 수 없습니다.</div>
      </MainContainer>
    )
  }

  const handleScrapClick = async () => {
    try {
      const response = await axios.post(
        `${DOMAIN_NAME}/support/policy/${id}/scrap`,
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
      <Header title={'지원정책'} />
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

        <InfoContainer style={{ position: 'relative' }}>
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
              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                정책 요약
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
              <DetailContainer title='정책 분야' content={policy.polyRlmCd} />
              <DetailContainer title='정책 지역' content={policy.polyBizSecd} />
              <DetailContainer title='지원 내용' content={policy.sporCn} />
              <DetailContainer
                title='사업 신청기간'
                content={policy.prdRpttSecd}
              />
              <DetailContainer
                title='사업 운영기간'
                content={policy.bizPrdCn}
              />
              <DetailContainer title='지원 규모' content={policy.sporScvl} />

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                신청 자격
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
              <DetailContainer title='연령' content={policy.ageInfo} />
              <DetailContainer title='거주지 및 소득' content={policy.prcpCn} />
              <DetailContainer title='학력' content={policy.accrRqisCn} />
              <DetailContainer title='취업상태' content={policy.empmSttsCn} />
              <DetailContainer
                title='특화 분야'
                content={policy.splzRlmRqisCn}
              />
              <DetailContainer
                title='추가 단서 사항'
                content={policy.aditRscn}
              />
              <DetailContainer
                title='참여 제한 대상'
                content={policy.prcpLmttTrgtCn}
              />

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                신청 방법
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

              <DetailContainer title='신청 절차' content={policy.rqutProcCn} />
              <DetailContainer
                title='심사 및 발표'
                content={policy.jdgnPresCn}
              />
              <DetailContainer
                title='신청 사이트'
                content={<a href={policy.rqutUrla}>{policy.rqutUrla}</a>}
              />
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
                content={
                  <a href={policy.rfcSiteUrla1}>{policy.rfcSiteUrla1}</a>
                }
              />
              <DetailContainer
                title='참고 사이트 2'
                content={
                  <a href={policy.rfcSiteUrla2}>{policy.rfcSiteUrla2}</a>
                }
              />
            </div>
          </div>
        </InfoContainer>
      </MainContainer>
    </MainContainer>
  )
}

export default PolicyDetail
