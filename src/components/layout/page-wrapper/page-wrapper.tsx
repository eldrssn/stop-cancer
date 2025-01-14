import { FC, ReactElement, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import * as S from './page-wrapper.styled'

type PageWrapperProps = {
  children: ReactElement
}

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const { pathname } = useLocation()
  const [isLock, setIsLock] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const timer = setTimeout(() => {
      document.body.style.overflow = ''
      setIsLock(false)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

  return <S.Wrapper $lock={isLock}>{children}</S.Wrapper>
}

export default PageWrapper
