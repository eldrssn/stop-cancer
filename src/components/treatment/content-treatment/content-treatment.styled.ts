import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30rem;
  padding-bottom: 74rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding-bottom: 71rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    gap: 20rem;
    padding-bottom: 30rem;
  }
`

export const DoctorBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 5rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
  }
`
export const DoctorBlockLeft = styled.div`
  flex-grow: 1;
  border-radius: 35rem 0 0 35rem;
  padding: 30rem 40rem;
  padding-right: 92rem;
  width: 638rem;
  height: auto;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding-right: 56rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    border-radius: 35rem 35rem 0 0;
    padding: 30rem 20rem;
    width: 100%;
  }
`
export const Title = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  margin-bottom: 30rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 35rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
  }
`

export const TitleSmaller = styled(Title)`
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 24rem;
  }
`

export const TextBlock = styled.div`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  display: flex;
  flex-direction: column;
  gap: 15rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
    line-height: 128%;
  }
`
export const Text = styled.p``

export const DoctorBlockRight = styled.div`
  flex-grow: 1;
  border-radius: 0 35rem 35rem 0;
  font-family: 'Muller', sans-serif;
  padding: 30rem 50rem;
  width: 638rem;
  height: auto;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    border-radius: 0 0 35rem 35rem;
    padding: 30rem 20rem;
    width: 100%;
  }
`
export const Doctor = styled.div`
  display: flex;
  gap: 15rem;
  margin-bottom: 15rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
  }
`
export const DoctorImg = styled.img`
  width: 203rem;
  height: 203rem;
  border: 1px solid ${Colors.PURPLE_LIGHT_BORDER};
  border-radius: 25rem;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 124rem;
    height: 124rem;
  }
`
export const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const DoctorName = styled.div`
  font-weight: 700;
  font-size: 18rem;
  line-height: 160%;
`
export const DoctorPosition = styled.div`
  font-weight: 400;
  font-size: 14rem;
  line-height: 160%;
`
export const DoctorText = styled.div`
  font-weight: 400;
  font-size: 18rem;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  gap: 15rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
    line-height: 162%;
  }
`

export const DoctorTextPadding = styled(DoctorText)`
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding: 30rem 0;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 0;
  }
`

export const DoctorBlockFull = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 35rem;
  padding: 30rem 40rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 30rem 20rem;
  }
`
