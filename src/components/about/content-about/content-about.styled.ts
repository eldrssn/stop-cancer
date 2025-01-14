import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Wrapper = styled.section`
  margin-bottom: 131rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 70rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 62rem;
  }
`
export const BlockImmunity = styled.div`
  display: flex;
  gap: 130rem;
  justify-content: space-between;
  margin-bottom: 29rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    gap: 85rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    gap: 20rem;
    margin-bottom: 47rem;
  }
`
export const Header = styled.h2`
  font-weight: 750;
  font-size: 50rem;
  line-height: 100%;
  max-width: 832rem;
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 35rem;
    margin-bottom: 30rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    margin-bottom: 20rem;
    max-width: 100%;
  }
`
export const CellBlock = styled.div`
  width: 610rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
  }
`
export const TextBlock = styled.div`
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-bottom: 0;
  }
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 18rem;
  line-height: 160%;
  font-family: 'Muller', sans-serif;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
    line-height: 140%;
  }

  & span {
    color: ${Colors.RED};
  }
`
export const List = styled.ul`
  padding: 0;
  padding-left: 25rem;
  padding-top: 2rem;
`
export const ListItem = styled.li`
  font-weight: 400;
  font-size: 18rem;
  line-height: 160%;
  font-family: 'Muller', sans-serif;
  padding: 0;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
    line-height: 140%;
  }
`
export const CellConclusion = styled.p`
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  margin-top: 50rem;
  border-radius: 45rem;
  padding: 30rem 40rem;
  border: 1rem solid ${Colors.PURPLE};
  margin-bottom: 29rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    margin-top: 20rem;
    padding: 30rem;
    font-size: 18rem;
    line-height: 126%;
    margin-bottom: 0;
  }
`
export const SchemaWrapper = styled.div`
  width: 534rem;
  height: 460rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 600rem;
    height: 458rem;
    margin-right: -18rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 320rem;
    height: 525rem;
    margin-right: -0;
  }
`

export const SchemaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding-right: 8rem;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    padding: 0;
  }
`

export const Subheader = styled.h3`
  font-weight: 750;
  font-size: 35rem;
  line-height: 100%;
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-top: 30rem;
    margin-bottom: 30rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 25rem;
    margin-bottom: 30rem;
    margin-left: -4rem;
    margin-top: 0;
  }
`
export const BlockWithOpinion = styled.div`
  display: flex;
  gap: 50rem;
  margin-bottom: 130rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    margin-bottom: 100rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    gap: 20rem;
    margin-bottom: 50rem;
    margin-left: -4rem;
  }
`
export const ImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 20rem;
`
export const ImageDoctor = styled(SchemaImage)`
  border: 1px solid #b6aef7;
  border-radius: 25rem;
  min-width: 203rem;
  width: 203rem;
  object-fit: cover;
  aspect-ratio: 1;
  padding: 0;
`
export const Link = styled.a`
  font-weight: 700;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${Colors.RED};
`

export const ImageCapture = styled.figcaption`
  display: flex;
  flex-direction: column;
`
export const Name = styled.p`
  font-weight: 500;
  font-size: 18rem;
  line-height: 160%;
  font-family: 'Muller', sans-serif;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    font-size: 16rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 18rem;
  }
`
export const Rank = styled.p`
  font-weight: 400;
  font-size: 14rem;
  line-height: 160%;
  font-family: 'Muller', sans-serif;
`
export const Opinion = styled.div`
  border-radius: 35rem;
  padding: 30rem 40rem;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15px 35px 0 rgba(58, 57, 159, 0.05);
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 15rem;
  height: min-content;

  & p {
    font-size: 16rem;
    line-height: 162%;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 30rem;
  }
`

export const TypesBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20rem;
  width: 832rem;
  margin-bottom: 50rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 780rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin-bottom: 20rem;
  }
`
export const TypesConclusion = styled.div`
  border-radius: 45rem;
  padding: 40rem;
  width: 100%;
  font-weight: 400;
  font-size: 22rem;
  line-height: 130%;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  box-shadow: 0 15rem 35rem 0 rgba(58, 57, 159, 0.05);
  background: linear-gradient(158deg, #b3abf7 0%, rgba(179, 171, 247, 0.2) 100%);
  margin-top: 80rem;

  & span {
    color: ${Colors.RED};
  }
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1200rem;
    font-size: 20rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 30rem;
    width: 100%;
    font-size: 18rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

export const Stong = styled.strong``
