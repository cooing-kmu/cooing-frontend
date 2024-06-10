import React, { useEffect, useState } from 'react'
import {
  MainContainer,
  InfoContainer,
  DetailContainer,
} from '../../components/information/BgComponent'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import fileIcon from '../../assets/fileIcon.svg'
import { DOMAIN_NAME } from '../../App'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { hasInfoScrapState } from '../../Atom'
import { ReactComponent as Ic_ScrapTrue } from '../../assets/icons/icon-info-scrap-true.svg'
import { ReactComponent as Ic_ScrapFalse } from '../../assets/icons/icon-info-scrap-false.svg'

const BusinessDetail = () => {
  const { id } = useParams()
  const [business, setBusiness] = useState([])
  const [error, setError] = useState(false)
  const [hasInfoScrap, setHasInfoScrap] = useRecoilState(hasInfoScrapState)

  useEffect(() => {
    axios
      .get(`${DOMAIN_NAME}/support/business/${id}`)
      .then((res) => {
        setBusiness(res.data.body)
        console.log(res.data.body)
      })
      .catch((error) => {
        setError(true)
      })
  }, [id])

  if (error) {
    return (
      <MainContainer>
        <div>사업 데이터를 찾을 수 없습니다.</div>
      </MainContainer>
    )
  }

  const handleScrapClick = async () => {
    try {
      const response = await axios.post(
        `${DOMAIN_NAME}/support/business/${id}/scrap`,
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
      await axios.delete(`${DOMAIN_NAME}/support/business/${id}/scrap`, {
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
      <Header title={'지원사업'} />
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
        <InfoContainer style={{ whiteSpace: 'pre-line' }}>
          <div>
            <h1>{business.title}</h1>
            <div
              style={{
                textAlign: 'left',
                padding: '0 10px',
                justifyContent: '',
              }}
            >
              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                사업 요약
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
              <DetailContainer title='사업 분야' content={business.category} />
              <DetailContainer title='사업 지역' content={business.location} />
              <DetailContainer
                title='모집 기간'
                content={business.recruitPeriod}
              />
              <DetailContainer
                title='접수 방법'
                content={business.receptionMethod}
              />
              <DetailContainer
                title='결과 발표'
                content={business.resultDate}
              />
              <DetailContainer
                title='결과 확인'
                content={business.checkResultMethod}
              />

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                상세 내용
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {/*<div>*/}
                {/*  {business.imageUrl && (*/}
                {/*    <img*/}
                {/*      src={business.imageUrl}*/}
                {/*      alt='사업 포스터'*/}
                {/*      width='300px'*/}
                {/*    />*/}
                {/*  )}*/}
                {/*</div>*/}

                {business.content}
              </div>

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>
                기관 정보
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

              <DetailContainer
                title='기관명'
                content={business.organizationName}
              />
              <DetailContainer
                title='담당자명'
                content={business.organizationPerson}
              />
              <DetailContainer
                title='문의'
                content={business.organizationContact}
              />

              <h4 style={{ textAlign: 'center', marginBottom: 5 }}>첨부파일</h4>
              <hr
                style={{
                  width: '19%',
                  border: 0,
                  borderTop: '1.85px solid',
                  marginTop: 0,
                  marginBottom: 20,
                }}
              />
              <div style={{ textAlign: 'center' }}>
                {business.files && business.files.length > 0 ? (
                  business.files.map((file, index) => (
                    <p>
                      <img
                        src={fileIcon}
                        alt={fileIcon}
                        style={{
                          transform: 'translate(0, 20%)',
                          marginRight: '3px',
                        }}
                      />
                      <a
                        key={index}
                        href={file.downName}
                        download={file.downName}
                      >
                        {file.fileName}
                      </a>
                    </p>
                  ))
                ) : (
                  <div>없음</div>
                )}
              </div>
            </div>
          </div>
        </InfoContainer>
      </MainContainer>
    </MainContainer>
  )
}

export default BusinessDetail
