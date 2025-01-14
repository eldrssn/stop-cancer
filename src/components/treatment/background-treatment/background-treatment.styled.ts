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
    top: -55rem;
    bottom: -208rem;
  }
`
export const Background = styled.img`
  object-fit: cover;
  width: 100%;
`

export const Gradient1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 1041rem;
  background: rgb(249, 209, 80);
  background: linear-gradient(
    189deg,
    rgba(249, 209, 80, 1) 0%,
    rgba(249, 209, 80, 1) 30%,
    rgba(242, 243, 247, 0) 60%,
    rgba(242, 243, 247, 0) 100%
  );
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 1441rem;
  }
`

export const Gradient2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 1576rem;
  background: rgb(249, 209, 80);
  background: linear-gradient(
    344deg,
    rgba(249, 209, 80, 1) 0%,
    rgba(249, 209, 80, 1) 30%,
    rgba(242, 243, 247, 0) 60%,
    rgba(242, 243, 247, 0) 100%
  );

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    height: 1000rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 1441rem;
    background: linear-gradient(
      304deg,
      rgba(249, 209, 80, 1) 0%,
      rgba(249, 209, 80, 1) 30%,
      rgba(242, 243, 247, 0) 60%,
      rgba(242, 243, 247, 0) 100%
    );
  }
`

export const Svg = styled.div`
  position: absolute;
  aspect-ratio: 1;
`

export const Svg1 = styled(Svg)`
  top: 298rem;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 403rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 730rem;
    aspect-ratio: unset;
  }
`

export const SvgBackground = styled.img`
  position: absolute;
  top: 303rem;
  right: 0;
  left: 0;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 703rem;
  }
`

export const Svg2 = styled(Svg)`
  top: 2038rem;
  left: 0;
  width: 1618rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2065rem;
    width: 1399rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 2005rem;
    width: 2010rem;
  }
`
export const Svg3 = styled(Svg)`
  top: 3564rem;
`

export const Svg4 = styled(Svg)`
  bottom: 909rem;
`

export const SvgBlur = styled(Svg)`
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
`

export const SvgBlur1 = styled(SvgBlur)`
  width: 1358rem;
  top: -414rem;
  left: -133rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -574rem;
    left: -473rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 728rem;
    top: 62rem;
    left: -350rem;
  }
`
export const SvgBlur2 = styled(SvgBlur)`
  width: 356rem;
  top: 108rem;
  right: 210rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 228rem;
    top: 12rem;
    right: -115rem;
  }
`

export const SvgBlur3 = styled(SvgBlur)`
  width: 729rem;
  top: 725rem;
  right: -25rem;

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

export const SvgBlur4 = styled(SvgBlur)`
  top: 1609rem;
  left: 88rem;
  width: 932rem;
  z-index: 1;

  background: linear-gradient(-154deg, rgba(176, 167, 254, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2384rem;
    left: -5rem;
    width: 806rem;
  }
`

export const SvgBlur8 = styled(SvgBlur)`
  top: 2509rem;
  right: -88rem;
  width: 932rem;
  z-index: 1;

  background: linear-gradient(-154deg, rgba(176, 167, 254, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    bottom: 20rem;
    top: unset;
    left: -430rem;
    width: 577rem;
  }
`

export const SvgBlur9 = styled(SvgBlur)`
  top: 4471rem;
  left: -134rem;
  width: 624rem;
  background: linear-gradient(-154deg, rgba(176, 167, 254, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
`

export const SvgBlur5 = styled(Svg)`
  top: 2499rem;
  right: 0;
`

export const SvgBlur6 = styled(SvgBlur)`
  width: 624rem;
  bottom: -257rem;
  left: -194rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 577rem;
    bottom: 0rem;
    left: -477rem;
  }
`

export const SvgColor1 = styled(Svg)`
  top: 303rem;
  right: 225rem;
`

export const SvgColor2 = styled(Svg)`
  top: 2175rem;
  left: 0;
  aspect-ratio: unset;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2505rem;
    left: -55rem;
  }
`

export const SvgColor3 = styled(Svg)`
  top: 2269rem;
  left: 495rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 295rem;
    top: 2628rem;

    width: 718rem;
  }
`

export const SvgColor4 = styled(Svg)`
  bottom: 249rem;
  right: 0;
  aspect-ratio: unset;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    bottom: 214rem;
  }
`
export const SvgColor5 = styled(Svg)`
  bottom: 0;
  right: 200rem;
  aspect-ratio: unset;
`

export const Image = styled.img`
  position: absolute;
`

export const SvgImage = styled.img`
  width: 100%;
  height: auto;
`

export const Image1 = styled(Image)`
  top: 138rem;
  left: 0;
  width: 100%;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -12rem;
  }
`

export const Image2 = styled(Image)`
  top: 3327rem;
  left: 0;
  width: auto;
  height: 373rem;
`

export const Image3 = styled(Image)`
  bottom: 0;
  left: 0;
  width: 100%;
  right: 0;
`
