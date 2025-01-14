import styled from 'styled-components'

import { Breakpoints } from '@app/tokens'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  z-index: -1;
`
export const SvgImage = styled.img``

export const Block = styled.div`
  z-index: -1 !important;
  position: relative;
  top: -85rem;
  left: 0;
  right: 0;
  height: 100%;
  bottom: -101rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -90rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: -55rem;
    bottom: -208rem;
  }
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
    rgba(238, 81, 105, 0.8) 0%,
    rgba(238, 81, 105, 0.8) 20%,
    rgba(238, 230, 81, 0.3) 45%,
    rgba(238, 230, 81, 0.1) 50%,
    rgba(238, 230, 81, 0) 100%
  );
`

export const Gradient2 = styled.div`
  position: absolute;
  top: 2460rem;
  right: 0;
  left: 0;
  width: 100%;
  height: 1576rem;
  background: rgb(249, 209, 80);
  background: linear-gradient(
    25deg,
    rgba(238, 81, 105, 0.8) 0%,
    rgba(238, 81, 105, 0.8) 20%,
    rgba(238, 230, 81, 0.3) 45%,
    rgba(238, 230, 81, 0.05) 50%,
    rgba(238, 230, 81, 0) 100%
  );

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2202rem;
    background: linear-gradient(
      25deg,
      rgba(238, 81, 105, 0.8) 0%,
      rgba(238, 81, 105, 0.8) 20%,
      rgba(238, 230, 81, 0.3) 45%,
      rgba(238, 230, 81, 0.1) 50%,
      rgba(238, 230, 81, 0) 100%
    );
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 1441rem;
    top: 2502rem;
  }
`

export const Svg = styled.div`
  position: absolute;
  aspect-ratio: 1;
`

export const Svg1 = styled(Svg)`
  aspect-ratio: unset;
  top: 174rem;
  left: 0;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 411rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 606rem;
  }
`

export const Image = styled.img`
  position: absolute;
`

export const Image1 = styled(Image)`
  top: -30rem;
  left: 0;
  width: 100%;
  right: 0;
`

export const Image2 = styled(Image)`
  top: 1274rem;
  left: 0;
  width: 413rem;
  height: 733rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 316rem;
    height: 529rem;
    top: 1032rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 226rem;
    height: 308rem;
    top: 1258rem;
  }
`

export const Image3 = styled(Image)`
  top: 2931rem;
  left: 0;
  width: 100%;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 3059rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 3015rem;
  }
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
    top: -574rem;
    left: -473rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 543rem;
    top: -32rem;
    left: -145rem;
  }
`

export const SvgBlur2 = styled(SvgBlur)`
  width: 317rem;
  top: 170rem;
  right: 106rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 288rem;
    top: 127rem;
    right: 12rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 603rem;
    top: 609rem;
    right: -207rem;
  }
`

export const SvgBlur3 = styled(SvgBlur)`
  width: 824rem;
  top: 1299rem;
  right: 1198rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 1077rem;
    left: -102rem;
    width: 824rem;
    right: unset;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 480rem;
    top: 1349rem;
    right: 34rem;
    left: unset;
  }
`

export const SvgBlur4 = styled(SvgBlur)`
  width: 782rem;
  top: 2438rem;
  left: 800rem;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2358rem;
    left: 650rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 453rem;
    top: 2658rem;
    left: -180rem;
  }
`

export const SvgBlur5 = styled(SvgBlur)`
  top: 2922rem;
  left: 180rem;
  width: 932rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 515rem;
    left: 80rem;
    top: 3100rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 315rem;
    top: 3438rem;
    left: -60rem;
  }
`
