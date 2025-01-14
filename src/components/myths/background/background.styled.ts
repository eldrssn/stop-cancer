import styled from 'styled-components'

import { Breakpoints, Colors } from '@app/tokens'

export const Background = styled.div``
export const BgTop = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 1800rem;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 727rem;
    background: linear-gradient(0deg, #f2f3f7 0%, rgba(242, 243, 247, 0) 100%);

    @media screen and (max-width: ${Breakpoints.MOBILE}px) {
      width: 100vw;
      height: 296rem;
    }
  }
`

export const BgBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 1920rem;
    height: 727rem;
    background: linear-gradient(180deg, #f2f3f7 0%, rgba(242, 243, 247, 0) 100%);

    @media screen and (max-width: ${Breakpoints.MOBILE}px) {
      width: 100vw;
      height: 396rem;
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
  }
`

export const ImageBg = styled.img`
  object-fit: contain;
  width: 100%;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    object-fit: cover;
    transform: scale(1.35) translateX(5rem) translateY(140rem);
    position: relative;
  }

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    object-fit: contain;
    transform: unset;
  }
`
export const ImageBgBottom = styled.img`
  object-fit: contain;
  transform: scaleX(-1);
`

export const Image = styled.img`
  position: absolute;
`

export const Bg2 = styled(Image)`
  width: 722rem;
  height: 855rem;
  top: 1904rem;
  left: 0rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 691rem;
    height: 735rem;
    top: 1642rem;
    left: -200rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 237rem;
    height: 252rem;
    top: 1356rem;
    left: 155rem;
  }
`

export const Bg3 = styled(Image)`
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 4281rem;
    left: 155rem;
    width: 352rem;
    height: 374rem;
    transform: rotate(-78deg);
  }
`

export const Ball1 = styled(Image)`
  width: 352rem;
  height: 352rem;
  left: 55.5%;
  top: -105rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 44%;
    top: -60rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 186rem;
    height: 186rem;
    top: -55rem;
    left: 180rem;
  }
`
export const Ball2 = styled(Image)`
  width: 35rem;
  height: 35rem;
  left: 11.2%;
  top: 690rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    top: 3696rem;
    left: 235rem;
    width: 50rem;
    height: 50rem;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }
`
export const Ball3 = styled(Image)`
  width: 121rem;
  height: 121rem;
  left: 12.7%;
  top: 770rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: -30rem;
    top: 851rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 73rem;
    left: 280rem;
    height: 73rem;
    top: 2252rem;
    filter: blur(7px);
    -webkit-filter: blur(7px);
  }
`
export const Ball4 = styled(Image)`
  width: 180rem;
  height: 170rem;
  right: 355rem;
  top: 95rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 1110rem;
    top: 155rem;
    right: unset;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 87rem;
    height: 87rem;
    top: 155rem;
    right: -52rem;
    left: unset;
  }
`
export const Ball5 = styled(Image)`
  width: 230rem;
  height: 230rem;
  left: 17.8%;
  bottom: 1960rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 7%;
    bottom: 1710rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 205rem;
    height: 205rem;
    left: 170rem;
    top: 2945rem;
  }
`
export const Ball6 = styled(Image)`
  width: 120rem;
  height: 120rem;
  left: 33%;
  bottom: 2065rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    left: 29.8%;
    bottom: 1820rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 70rem;
    height: 70rem;
    left: 215rem;
    bottom: unset;
    top: 3615rem;
  }
`

export const Ball7 = styled(Image)`
  width: 348rem;
  height: 361rem;
  right: 222rem;
  bottom: 2420rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    right: 85rem;
    bottom: 2135rem;
    width: 329rem;
    height: 341rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 165rem;
    height: 172rem;
    left: 115rem;
    bottom: unset;
    top: 2261rem;
    right: unset;
  }
`

export const Ball8 = styled(Image)`
  width: 185rem;
  height: 190rem;
  right: 160rem;
  bottom: 2763rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 186rem;
    height: 181rem;
    right: 30rem;
    bottom: 2443rem;
  }
`
export const Circle = styled.span`
  border-radius: 100%;
  position: absolute;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.2);
`
export const CircleBlue = styled(Circle)`
  background: radial-gradient(
    circle,
    rgba(48, 134, 255, 1) 0%,
    rgba(48, 134, 255, 1) 15%,
    rgba(48, 134, 255, 0) 70%,
    rgba(48, 134, 255, 0) 100%
  );
  filter: blur(10px);
  -webkit-filter: blur(10px);
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    filter: blur(45px);
    -webkit-filter: blur(45px);
  }
`

export const CircleWhite = styled(Circle)`
  background: radial-gradient(circle at center, #b9b9b9 0%, rgba(255, 255, 255, 1) 50%, rgba(48, 134, 255, 0) 100%);
  filter: blur(100px);
  -webkit-filter: blur(100px);
`

export const Circle1 = styled(Circle)`
  background-color: ${Colors.WHITE01};
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  top: -492rem;
  left: -153rem;
  width: 1358rem;
  height: 1358rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -592rem;
    left: -433rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 543rem;
    height: 543rem;
    top: -194rem;
    left: -173rem;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
`

export const Circle2 = styled(CircleBlue)`
  top: -492rem;
  right: 211rem;
  border-radius: 100%;
  width: 1326rem;
  height: 1326rem;
  filter: blur(300px);
  -webkit-filter: blur(300px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: -353rem;
    right: -333rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 438rem;
    height: 438rem;
    top: 40rem;
    left: 40rem;
  }
`

export const Circle3 = styled(Circle)`
  top: 894rem;
  right: 72rem;
  border-radius: 100%;
  width: 729rem;
  height: 729rem;
  background-color: ${Colors.WHITE015};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 686rem;
    right: 236rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 411rem;
    height: 411rem;
    top: 383rem;
    right: unset;
    left: 134rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

export const CircleBlue1 = styled(CircleBlue)`
  width: 880rem;
  height: 880rem;
  top: 734rem;
  right: 175rem;

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 556rem;
    height: 556rem;
    left: -175rem;
    right: unset;
    top: 4440rem;
    filter: blur(100px);
    -webkit-filter: blur(100px);
  }
`
export const CircleBlue2 = styled(CircleBlue)`
  width: 880rem;
  height: 880rem;
  top: 382rem;
  left: 415rem;
`

export const Circle4 = styled(Circle)`
  top: 1344rem;
  left: 322rem;
  width: 932rem;
  height: 932rem;
  background: linear-gradient(270deg, rgba(142, 208, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 984rem;
    left: 22rem;
    width: 845rem;
    height: 845rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 474rem;
    height: 474rem;
    left: -105rem;
    top: 987rem;
    background: ${Colors.WHITE01};
  }
`

export const CircleWhite1 = styled(CircleWhite)`
  width: 526rem;
  height: 526rem;
  top: 2200rem;
  left: 450rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 1812rem;
    left: 237rem;
  }
`

export const CircleBlue3 = styled(CircleBlue)`
  width: 880rem;
  height: 880rem;
  top: 2300rem;
  left: 100rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 695rem;
    height: 695rem;
    left: -30rem;
    top: 2030rem;
    filter: blur(50px);
    -webkit-filter: blur(50px);
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 395rem;
    height: 395rem;
    top: 1380rem;
    left: -30rem;
    filter: blur(5px);
    -webkit-filter: blur(5px);
  }
`
export const Circle5 = styled(Circle)`
  top: 2528rem;
  left: -110rem;
  width: 932rem;
  height: 932rem;
  background-color: ${Colors.WHITE01};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2160rem;
    left: -230rem;
    width: 800rem;
    height: 800rem;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 449rem;
    height: 449rem;
    top: 3015rem;
    left: 132rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`

export const Circle6 = styled(Circle)`
  top: 2874rem;
  right: -270rem;
  width: 932rem;
  height: 932rem;
  background-color: ${Colors.WHITE01};
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 2500rem;
    right: -410rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    top: 2464rem;
    left: 50rem;
    width: 449rem;
    height: 449rem;
  }
`

export const Circle7 = styled(Circle)`
  background-color: ${Colors.WHITE01};

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    top: 4522rem;
    left: 76rem;
    width: 474rem;
    height: 474rem;
  }
`

export const CircleBlue4 = styled(CircleBlue)`
  width: 880rem;
  height: 880rem;
  top: 4004rem;
  right: 180rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    top: 3144rem;
    right: -40rem;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 556rem;
    height: 556rem;
    left: -206rem;
    bottom: unset;
    top: 2460rem;
    right: unset;
    filter: blur(130px);
    -webkit-filter: blur(130px);
  }
`

export const CircleBlue5 = styled(CircleBlue)`
  width: 714rem;
  height: 714rem;
  top: 3744rem;
  right: -340rem;

  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    display: none;
  }

  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    display: block;
    width: 556rem;
    height: 556rem;
    right: -246rem;
    bottom: unset;
    top: 3380rem;
    filter: blur(130px);
    -webkit-filter: blur(130px);
  }
`
