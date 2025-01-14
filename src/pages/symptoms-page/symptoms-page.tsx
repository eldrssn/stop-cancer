import { FC, useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { routes } from '@app/router'
import { BackgroundSymptoms, Container, ContentSymptoms, Footer, HeroSymptoms, ProgressSymptoms } from '@components'
import { useCheckDevice } from '@hooks'

import * as S from './symptoms-page.styled'

gsap.registerPlugin(ScrollTrigger)

export const SymptomsPage: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { isMobile, isTablet } = useCheckDevice()

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      ScrollTrigger.create({
        trigger: container,
        start: isMobile ? '22% top' : isTablet ? '24% top' : '23% top',
        end: isMobile ? '+=4100px' : '+=4110px',
        onUpdate: (self) => setScrollProgress(self.progress * 100),
        scrub: true,
        pin: pinRef.current,
      })

      ScrollTrigger.create({
        trigger: container,
        start: isMobile ? '11.5% top' : '10.8% top',
        end: isMobile ? '+=4110px' : '+=4100px',
        scrub: true,
        pin: bgRef.current,
        pinSpacing: false,
      })
    }

    return () => {
      ScrollTrigger.killAll()
    }
  }, [isMobile, isTablet])

  return (
    <Container prevPage={routes.prevention} pinned={scrollProgress > 0} withPin>
      <S.Main ref={containerRef}>
        <BackgroundSymptoms ref={bgRef} />
        <S.Wrapper>
          <HeroSymptoms />
          <ProgressSymptoms ref={pinRef} scrollProgress={scrollProgress} />
          <ContentSymptoms />
        </S.Wrapper>
        <Footer />
      </S.Main>
    </Container>
  )
}

export default SymptomsPage
