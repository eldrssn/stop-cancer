import React, { FC, useEffect, useRef, useState } from 'react'

import { useCheckDevice } from '@hooks'

import * as S from './chart.styled'

const cancerData = [
  { type: 'Рак молочной железы', rate: '99–100%' },
  { type: 'Рак предстательной железы', rate: '99%' },
  { type: 'Рак щитовидной железы в зависимости от типа ткани', rate: '98%' },
  { type: 'Рак яичка', rate: '95.1%' },
  { type: 'Рак шейки матки', rate: '93%' },
  { type: 'Рак кожи', rate: '91.7%' },
  { type: 'Лимфома Ходжкина', rate: '90%' },
]

export const Chart: FC = () => {
  const { isMobile, isTablet } = useCheckDevice()
  const [currentIndex, setCurrentIndex] = useState<null | number>(isMobile ? 0 : null)
  const [hovered, setHovered] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (isMobile && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute('data-index'))
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setCurrentIndex(index)
            }
          })
        },
        {
          root: containerRef.current,
          threshold: 0.5,
        }
      )

      itemRefs.current.forEach((item) => {
        if (item) observer.observe(item)
      })

      return () => observer.disconnect()
    }
  }, [isMobile])

  // Для яндес браузера
  const scrollByFixedOffset = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      })
    }
  }

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollByFixedOffset(-320)
      itemRefs.current[currentIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < cancerData.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollByFixedOffset(320)
      itemRefs.current[currentIndex + 1].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <S.Container onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {isMobile ? (
        <S.ButtonListMobile ref={containerRef}>
          {currentIndex !== 0 && (
            <S.ButtonPrev type="button" onClick={handlePrev}>
              <svg width="35rem" height="35rem" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1358_285)">
                  <rect
                    width="35"
                    height="35"
                    rx="17.5"
                    transform="matrix(-1 0 0 1 35 0)"
                    fill="white"
                    fillOpacity="0.3"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="34"
                    height="34"
                    rx="17"
                    transform="matrix(-1 0 0 1 34 0)"
                    stroke="#7A6DEC"
                  />
                  <path d="M20 12L15 17.5L20 23" stroke="#7A6DEC" strokeWidth="2" />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1358_285"
                    x="-25"
                    y="-25"
                    width="85"
                    height="85"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1358_285" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1358_285" result="shape" />
                  </filter>
                </defs>
              </svg>
            </S.ButtonPrev>
          )}
          {cancerData.map((item, index) => (
            <React.Fragment key={index}>
              <S.BarWrap
                key={index}
                $isActive={currentIndex === index}
                ref={(el) => (itemRefs.current[index] = el!)}
                data-index={index}
              >
                <S.Button $isHovered={currentIndex === index}>
                  <S.Bar $isHovered={currentIndex === index} $rate={parseInt(item.rate)}>
                    {currentIndex === index && <S.TextBar>{item.rate}</S.TextBar>}
                  </S.Bar>
                </S.Button>
                <S.BarLabel>{item.type}</S.BarLabel>
              </S.BarWrap>
            </React.Fragment>
          ))}
          <S.Hr />
          {currentIndex !== cancerData.length - 1 && (
            <S.ButtonNext type="button" onClick={handleNext}>
              <svg width="35rem" height="35rem" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1078_6)">
                  <rect width="35" height="35" rx="17.5" fill="white" fillOpacity="0.3" />
                  <rect x="0.5" y="0.5" width="34" height="34" rx="17" stroke="#7A6DEC" />
                  <path d="M15 12L20 17.5L15 23" stroke="#7A6DEC" strokeWidth="2" />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1078_6"
                    x="-25"
                    y="-25"
                    width="85"
                    height="85"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1078_6" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1078_6" result="shape" />
                  </filter>
                </defs>
              </svg>
            </S.ButtonNext>
          )}
        </S.ButtonListMobile>
      ) : (
        <>
          <S.Caption $visible={!hovered}>
            <span>{isTablet ? 'Нажмите' : 'Наведите'}, чтобы увидеть показатели</span>
            <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.0264 11.1257C21.8044 10.0474 19.8137 10.0946 19.183 10.1418C19.0687 9.98832 18.9426 9.84664 18.7928 9.71677C17.5708 8.63451 15.5802 8.68567 14.9495 8.73289C14.8351 8.57941 14.709 8.43773 14.5592 8.30786C13.6053 7.46566 12.1901 7.31217 11.3111 7.3043V2.99492C11.3111 1.0311 9.89204 0 8.48873 0C7.08542 0 5.66635 1.02717 5.66635 2.99492V14.2938C5.46531 14.0262 5.24457 13.7822 5.00411 13.5696C3.32093 12.0899 1.60228 12.4283 0.715356 13.3689C-0.191275 14.3292 -0.380485 16.0293 1.00311 17.4146C5.20121 21.6059 7.0736 25.5808 7.0736 30.2955V31H21.1303L21.1776 30.3428C21.1776 30.3192 21.3589 27.8909 22.2577 25.6635C23.2983 23.07 24 19.406 24 16.5331V13.4398C24 12.4913 23.661 11.6924 23.0185 11.1257H23.0264ZM22.5967 16.537C22.5967 19.1974 21.9226 22.7354 20.9529 25.1361C20.2592 26.8598 19.9596 28.6505 19.8453 29.5872H8.48085C8.30346 24.774 6.28916 20.685 2.01223 16.415C1.2278 15.6279 1.32635 14.7857 1.75207 14.3331C2.16991 13.8884 3.02529 13.6995 4.07777 14.6244C5.01594 15.4508 5.67029 16.9542 5.67029 18.0404H7.08148V2.99492C7.08148 1.90085 7.79102 1.40891 8.49267 1.40891C9.19432 1.40891 9.90386 1.90085 9.90386 2.99492V14.097H11.3151V8.71322C12.0325 8.72109 13.0495 8.84702 13.6329 9.36651C13.9719 9.66561 14.1374 10.0788 14.1374 10.6219V14.0734H15.5486V10.6219C15.5486 10.4488 15.5329 10.2835 15.5092 10.1182C16.2266 10.1182 17.2712 10.2441 17.8625 10.7715C18.2015 11.0706 18.3671 11.4838 18.3671 12.0309V15.4823H19.7783V12.0309C19.7783 11.8577 19.7625 11.6885 19.7388 11.5271C20.4523 11.5271 21.493 11.653 22.0921 12.1804C22.4311 12.4795 22.5967 12.8927 22.5967 13.4398V16.537Z"
                fill="#645ABA"
              />
            </svg>
          </S.Caption>

          <S.ButtonList>
            {cancerData.map((item, index) => (
              <S.BarWrap
                key={index}
                onMouseEnter={() => setCurrentIndex(index)}
                onMouseLeave={() => setCurrentIndex(null)}
              >
                <S.Button $isHovered={currentIndex === index}>
                  <S.Bar $isHovered={currentIndex === index} $rate={parseInt(cancerData[currentIndex || 0]?.rate)}>
                    {currentIndex === index && <S.TextBar>{item.rate}</S.TextBar>}
                  </S.Bar>
                </S.Button>
                {currentIndex === index && (
                  <S.BarLabel $isBig={index === 2} $isLast={cancerData.length - 1 === index}>
                    {cancerData[currentIndex].type}
                  </S.BarLabel>
                )}
              </S.BarWrap>
            ))}
          </S.ButtonList>
          <S.Hr />
        </>
      )}
    </S.Container>
  )
}

export default Chart
