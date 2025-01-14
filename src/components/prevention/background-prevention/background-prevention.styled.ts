import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.div`
  position: absolute;
  top: -85rem;
  left: 0;
  right: 0;
  bottom: -101rem;
  z-index: -1;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: -55rem
    bottom: -208rem;
  }
`
export const Background = styled.img`
  object-fit: cover;
  width: 100%;
`

export const SvgBackground = styled.img`
  position: absolute;
  top: 378rem;
  right: 0;
  left: 0;
  z-index: -1;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 24rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 404rem;
  }
`

export const SvgBackground2 = styled.img`
  position: absolute;
  top: 283rem;
  right: 0;
  width: 1319rem;
`

export const Gradient1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 1041rem;
  background: rgba(242, 243, 247, 1);
  background: linear-gradient(
    189deg,
    rgba(80, 249, 208, 1) 0%,
    rgba(80, 249, 208, 1) 30%,
    rgba(242, 243, 247, 0) 60%,
    rgba(242, 243, 247, 0) 100%
  );
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 1441rem;
  }
`

export const Svg = styled.div`
  position: absolute;
  aspect-ratio: 1;
`

export const Svg1 = styled(Svg)`
  aspect-ratio: unset;
  top: 138rem;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 224rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 1102rem;
  }
`

export const Svg2 = styled(Svg)`
  aspect-ratio: unset;
  bottom: 0;
  left: 0;
  z-index: -1;
`

export const SvgBlur = styled(Svg)`
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
`

export const SvgBlur1 = styled(SvgBlur)`
  width: 1358rem;
  top: -494rem;
  left: -34rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -584rem;
    left: -473rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 534rem;
    top: -8rem;
    left: -135rem;
  }
`

export const SvgBlur2 = styled(SvgBlur)`
  width: 317rem;
  top: 248rem;
  right: 210rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 228rem;
    top: 128rem;
    right: -38rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 503rem;
    top: 619rem;
    right: -137rem;
  }
`

export const SvgBlur3 = styled(SvgBlur)`
  width: 729rem;
  top: 725rem;
  right: -25rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 664rem;
    top: 573rem;
    right: -85rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 932rem;
    top: unset;
    bottom: -563rem;
    right: -407rem;
    z-index: 1;
  }
`

export const SvgBlur4 = styled(SvgBlur)`
  width: 932rem;
  bottom: 530rem;
  left: 25rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 664rem;
    top: 584rem;
    right: -150rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 603rem;
    top: 828rem;
    right: -207rem;
  }
`

export const SvgBlur5 = styled(SvgBlur)`
  width: 932rem;
  bottom: -501rem;
  right: 427rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    right: 80rem;
    bottom: -601rem;
    z-index: 1;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 603rem;
    top: 828rem;
    right: -207rem;
  }
`

export const Image = styled.img`
  position: absolute;
`

export const Image1 = styled(Image)`
  top: 0;
  left: 0;
  width: 100%;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 90rem;
  }

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 0;
  }
`

export const Image2 = styled(Image)`
  bottom: 744rem;
  right: 144rem;
  width: 292rem;
  height: 467rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 0;
    width: 178rem;
    height: 173rem;
    bottom: 1200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    left: unset;
    bottom: unset;
    right: 0;
    top: 1139rem;
    width: 178rem;
    height: 188rem;
  }
`

export const Image3 = styled(Image)`
  bottom: 0;
  left: 0;
  width: 100%;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    z-index: 1;
  }
`

export const Image4 = styled(Image)`
  top: 746rem;
  left: 110rem;
  width: 178px;
  height: auto;
`
