import { FC, useEffect, useMemo, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { trackLogoClick, trackOtherPagesClick } from '@app/analytics'
import { routesLinks } from '@app/data/routes'
import { useCheckDevice } from '@hooks'

import * as S from './header.styled'
import { HeaderProps } from './types'
import lifehacker from '/src/assets/images/lifehakerlogo.png'
import minzdrav from '/src/assets/images/Minzdrav_logo.png'
import minzdravMobile from '/src/assets/images/Minzdrav_logo-mobile.png'
import oncolife from '/src/assets/images/oncolife.svg'

export const Header: FC<HeaderProps> = () => {
  const { isMobile, isTablet } = useCheckDevice()
  const [isNavOpen, setNavOpen] = useState(false)
  const location = useLocation()
  const closeNav = () => setNavOpen(false)
  const toggleNav = () => setNavOpen((isNavOpen) => !isNavOpen)

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isNavOpen])

  const minzdavLogo = useMemo(() => {
    if (isMobile || isTablet) {
      return minzdravMobile
    }

    return minzdrav
  }, [isMobile, isTablet])

  const { pathname } = useLocation()

  const handleNavClick = (linkTo: string) => () => {
    if (isMobile) {
      closeNav()
    }
    trackOtherPagesClick(pathname, 'Сверху', linkTo)
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Link
          href="https://lifehacker.ru/"
          onClick={() => trackLogoClick(pathname, 'https://lifehacker.ru/', 'в начале', 'ЛХ')}
        >
          <S.Logo src={lifehacker} alt="Лого Лайфхакер"></S.Logo>
        </S.Link>
        <S.Nav $isNavOpen={isNavOpen}>
          <S.List>
            {routesLinks.map((route) => (
              <S.Item $active={route.href === location.pathname} key={route.id}>
                <S.NavLink to={route.href} onClick={handleNavClick(route.href)}>
                  {route.title}
                </S.NavLink>
              </S.Item>
            ))}
          </S.List>
        </S.Nav>
        <S.Partners>
          <S.Link
            href="https://minzdrav.gov.ru/"
            onClick={() => trackLogoClick(pathname, 'https://minzdrav.gov.ru/', 'в начале', 'Минздрав')}
          >
            <S.Partner1 src={minzdavLogo} />
          </S.Link>
          <S.Link
            href="https://onco-life.ru/"
            onClick={() => trackLogoClick(pathname, 'https://onco-life.ru/', 'в начале', 'onco')}
          >
            <S.Partner2 src={oncolife} />
          </S.Link>
        </S.Partners>
        {isMobile && (
          <S.NavButton type="button" onClick={toggleNav}>
            {isNavOpen ? (
              <svg width="30rem" height="26rem" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="2.62561"
                  y="21.771"
                  width="30"
                  height="5"
                  rx="2"
                  transform="rotate(-45 2.62561 21.771)"
                  fill="#472981"
                />
                <rect
                  x="6.16125"
                  y="0.693604"
                  width="30"
                  height="5"
                  rx="2"
                  transform="rotate(45 6.16125 0.693604)"
                  fill="#472981"
                />
              </svg>
            ) : (
              <svg width="30rem" height="16rem" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.5" width="30" height="5" rx="2" fill="#472981" />
                <rect y="10.5" width="30" height="5" rx="2" fill="#472981" />
              </svg>
            )}
          </S.NavButton>
        )}
      </S.Content>
    </S.Wrapper>
  )
}

export default Header
