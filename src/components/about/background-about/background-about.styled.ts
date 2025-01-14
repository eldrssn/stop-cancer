import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

import bgBottom from '/src/assets/images/about/about-bottom.png'
import bgCenter from '/src/assets/images/about/about-center.png'
import bgTop from '/src/assets/images/about/about-top.png'
import bgBottomMobile from '/src/assets/images/about/bottom-mobile.png'
import bgTopMobile from '/src/assets/images/about/top-mobile.png'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`
export const BgTop = styled.div`
  height: 1351rem;
  width: 100vw;
  background: ${`url("${bgTop}") no-repeat top`};
  background-size: contain;
  position: relative;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 667rem;
    width: 100vw;
    background: ${`url("${bgTopMobile}") no-repeat top`};
    background-size: cover;
  }
`

export const SvgImage = styled.img`
  position: absolute;
  top: -80rem;
  left: 0;
  right: 0;
`

export const BgBottom = styled.div`
  position: absolute;
  bottom: 0;
  height: 2160rem;
  width: 100vw;
  background: ${`url("${bgBottom}") no-repeat bottom`};
  background-size: contain;
  margin-top: auto;
  z-index: -1;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    height: 1226rem;
    width: 100vw;
    background: ${`url("${bgBottomMobile}") no-repeat bottom`};
    background-size: contain;
  }
`

export const BgCenter = styled.div`
  position: absolute;
  top: 1240rem;
  right: 0;
  left: 0;
  height: 1138rem;
  width: 100vw;
  background: ${`url("${bgCenter}") no-repeat top`};
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    bottom: -200rem;
    left: 0;
    right: 0;
    height: 300rem;
    display: block;
    filter: blur(100px);
    background: ${Colors.WHITE};
  }
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 1320rem;
  }
`

export const Blur = styled.div`
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  border-radius: 100%;
  position: absolute;
  border: 1px solid ${Colors.WHITE025};
  aspect-ratio: 1;
`

export const BlurSofter = styled(Blur)`
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`

export const PurpleBlur = styled.div`
  border-radius: 100%;
  position: absolute;
  aspect-ratio: 1;
  background: radial-gradient(
    circle,
    rgba(71, 41, 129, 1) 0%,
    rgba(71, 41, 129, 1) 15%,
    rgba(71, 41, 129, 0) 60%,
    rgba(71, 41, 129, 0) 100%
  );
  filter: blur(80px);
  -webkit-filter: blur(80px);

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    filter: blur(20px);
    -webkit-filter: blur(20px);
  }
`

export const Image = styled.img`
  position: absolute;
  object-fit: contain;
  height: auto;
`
export const SvgWrap1 = styled.div`
  position: absolute;
  object-fit: contain;
  max-width: 1864rem;
  top: 0;
  left: 507rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1864rem;
    height: 1864rem;
    left: 170rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: none;
  }
`

export const SvgWrap2 = styled.div`
  position: absolute;
  object-fit: contain;
  max-width: 2204rem;
  bottom: -369rem;
  right: 158rem;
  filter: blur(10px);
  -webkit-filter: blur(10px);
`

export const SvgWrap3 = styled.div`
  position: absolute;
  object-fit: cover;
  width: 626rem;
  height: 626rem;
  filter: blur(100px);
  -webkit-filter: blur(100px);

  bottom: 17rem;
  right: 194rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    bottom: -137rem;
    right: -194rem;
  }
`

export const SvgWrap4 = styled.div`
  position: absolute;
  object-fit: cover;
  width: 426rem;
  height: 426rem;
  filter: blur(100px);
  -webkit-filter: blur(100px);

  top: 1309rem;
  left: 1699rem;
`

export const SvgWrap5 = styled.div`
  display: none;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: block;
    position: absolute;
    min-width: 921rem;
    max-width: 921rem;
    height: 921rem;
    width: 921rem;
    top: 308rem;
    left: 0;
  }
`

export const SvgWrap6 = styled.div`
  display: none;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: block;
    position: absolute;
    min-width: 761rem;
    max-width: 761rem;
    height: 761rem;
    width: 761rem;
    svg {
      height: 961rem;
      width: 961rem;
    }
    top: 2344rem;
    /* left: 0; */
    right: -120rem;
  }
`

export const SvgWrap7 = styled.div`
  display: none;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: block;
    position: absolute;
    min-width: 921rem;
    max-width: 921rem;
    height: 921rem;
    width: 921rem;
    top: 2844rem;
    left: 0;
  }
`

export const Blur1 = styled(Blur)`
  width: 1358rem;
  left: -133rem;
  top: -554rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: -460rem;
    top: -694rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 543rem;
    left: -165rem;
    top: -38rem;
  }
`
export const Blur2 = styled(BlurSofter)`
  width: 288rem;
  right: 195rem;
  top: -72rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    right: -115rem;
    top: -82rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 603rem;
    right: -207rem;
    top: 599rem;
  }
`

export const Blur3 = styled(Blur)`
  width: 729rem;
  right: 56rem;
  top: 468rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    right: -200rem;
    top: 478rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 474rem;
    right: -8rem;
    top: 1381rem;
  }
`

export const Blur4 = styled(Blur)`
  width: 1051rem;
  right: 56rem;
  bottom: -802rem;
  right: 277rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    right: 56rem;
    bottom: -891rem;
    right: 0;
  }
`

export const Blur5 = styled(Blur)`
  width: 653rem;
  bottom: 246rem;
  right: 1437rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    bottom: 84rem;
    right: 1038rem;
  }
`

export const Image1 = styled(Image)`
  width: 980rem;
  right: -4rem;
  top: -135rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 830rem;
    right: -155rem;
    top: -130rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 261rem;
    scale: 1.55;
    height: auto;
    top: 400rem;
    right: 10rem;
  }
`
export const PurpleBlur1 = styled(PurpleBlur)`
  width: 871rem;
  top: -380rem;
  right: -239rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    filter: blur(120px);
    -webkit-filter: blur(120px);
    right: -359rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 463rem;
    top: 1654rem;
    right: 90rem;
    filter: blur(40px);
    -webkit-filter: blur(40px);
  }
`

export const PurpleBlur2 = styled(PurpleBlur)`
  width: 596rem;
  top: 357rem;
  right: 425rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    filter: blur(200px);
    -webkit-filter: blur(200);
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 325rem;
    right: -118rem;
    top: -118rem;
  }
`

export const PurpleBlur3 = styled(PurpleBlur)`
  width: 878rem;
  bottom: 539rem;
  right: 221rem;
  filter: blur(150px);
  -webkit-filter: blur(150px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    bottom: 209rem;
    right: -70rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 414rem;
    bottom: 61rem;
    right: -53rem;
    filter: blur(50px);
    -webkit-filter: blur(50px);
  }
`

export const PurpleBlur4 = styled(PurpleBlur)`
  width: 776rem;
  top: 1323rem;
  right: 50rem;
  background: radial-gradient(
    circle,
    rgba(71, 41, 129, 1) 0%,
    rgba(71, 41, 129, 1) 15%,
    rgba(71, 41, 129, 0.8) 30%,
    rgba(71, 41, 129, 0.2) 35%,
    rgba(71, 41, 129, 0) 100%
  );
  filter: blur(50px);
  -webkit-filter: blur(50px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1276rem;
    top: 1043rem;
    right: -350rem;
    filter: blur(120px);
    -webkit-filter: blur(120px);
  }
`

export const PurpleBlur5 = styled(PurpleBlur)`
  width: 776rem;
  bottom: -227rem;
  left: -207rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1064rem;
    bottom: -227rem;
    left: -507rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 424rem;
    bottom: 1332rem;
    left: 98rem;
  }
`

export const Image2 = styled(Image)`
  width: 818rem;
  top: 1048rem;
  right: 1199rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 591rem;
    top: 742rem;
    right: 880rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    min-width: 451rem;
    top: 1288rem;
    right: -262rem;
    /* z-index: 1; */
  }
`

export const Image3 = styled(Image)`
  width: 745rem;
  bottom: 434rem;
  right: 14rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 564rem;
    bottom: 267rem;
    right: -152rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 295rem;
    height: 282rem;
    bottom: 1503rem;
    right: -130rem;
  }
`

export const Image4 = styled(Image)`
  width: 626rem;
  bottom: -64rem;
  right: 107rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 626rem;
    bottom: -184rem;
    right: -347rem;
    rotate: 80deg;
  }
`

export const Ball = styled(Image)`
  aspect-ratio: 1;
`

export const Ball1 = styled(Ball)`
  width: 293rem;
  top: 1437rem;
  right: 171rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 293rem;
    top: 1177rem;
    right: -41rem;
  }
`

export const Ball2 = styled(Ball)`
  width: 509rem;
  bottom: 74rem;
  left: 30rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 180rem;
    bottom: -80rem;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }
`
export const Ball3 = styled(Ball)`
  width: 67rem;
  bottom: 203rem;
  left: 438rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 67rem;
    bottom: 153rem;
    left: 198rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    bottom: 203rem;
    left: 155rem;
  }
`

export const Ball4 = styled(Ball)`
  width: 256rem;
  bottom: 70rem;
  left: 442rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 246rem;
    bottom: 90rem;
    left: 202rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    bottom: 83rem;
    left: 173rem;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }
`

export const Ball5 = styled(Ball)`
  width: 159rem;
  top: 1934rem;
  left: 137rem;
  filter: blur(40px);
  -webkit-filter: blur(40px);
`
