import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

import debounce from 'lodash/debounce'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { Header } from '@app/components'

import { ContainerStyled } from './container.styled'
import { ContainerProps } from './types'

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  nextPage,
  prevPage,
  onSetRef,
  pinned,
  withPin,
}) => {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [searchParams] = useSearchParams()

  const [isShowAnim, setShowAnim] = useState(false)
  const isAtBottomRef = useRef(false)
  const isAtTopRef = useRef(false)

  useEffect(() => {
    setShowAnim(true)

    return () => {
      setShowAnim(false)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    if (pinned) return
    const container = containerRef.current

    onSetRef?.(container)

    let isAtBottom = isAtBottomRef.current
    let isAtTop = isAtTopRef.current

    let timeoutId: NodeJS.Timeout | null = setTimeout(() => {
      isAtTop = true
    }, 2500)

    const handleNextPage = () => {
      isAtBottom = false
      isAtTop = false
      if (nextPage) {
        navigate({
          pathname: nextPage,
          search: searchParams.toString(),
        })
      }
    }

    const handlePrevPage = () => {
      isAtTop = false
      isAtBottom = false
      if (prevPage) {
        navigate({
          pathname: prevPage,
          search: searchParams.toString(),
        })
      }
    }

    const handleWheel = (event) => {
      if (isAtBottom && event.deltaY > 35) {
        handleNextPage()
      } else if (isAtTop && event.deltaY < -35) {
        handlePrevPage()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isAtBottom && event.key === 'ArrowDown') {
        handleNextPage()
      } else if (isAtTop && event.key === 'ArrowUp') {
        handlePrevPage()
      }
    }

    let startTouchY = 0
    let endTouchY = 0

    const handleTouchStart = (event) => {
      startTouchY = event.touches[0].clientY
    }

    const handleTouchMove = (event) => {
      endTouchY = event.touches[0].clientY
    }

    const handleTouchEnd = () => {
      const deltaY = endTouchY - startTouchY

      if (endTouchY === 0) {
        return
      }

      if (deltaY > 100 && isAtTop) {
        handlePrevPage()
      } else if (deltaY < -100 && isAtBottom) {
        handleNextPage()
      }

      startTouchY = 0
      endTouchY = 0
    }

    const handleScroll = debounce(() => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      isAtTop = false
      isAtBottom = false
      const { scrollTop, scrollHeight, clientHeight } = withPin ? document.documentElement : container
      const isBottom = scrollTop + clientHeight >= scrollHeight - 20
      const isTop = scrollTop === 0

      if (isBottom && !isAtBottom && nextPage) {
        isAtBottom = true
      } else if (isTop && !isAtTop && prevPage) {
        isAtTop = true
      }
    }, 200)

    container.addEventListener('scroll', handleScroll)
    container.addEventListener('wheel', handleWheel)
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)
    document.addEventListener('touchend', handleTouchEnd, false)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouchStart, false)
      document.removeEventListener('touchmove', handleTouchMove, false)
      document.removeEventListener('touchend', handleTouchEnd, false)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [navigate, nextPage, prevPage, pinned])

  return withPin ? (
    <div ref={containerRef}>
      <Header />
      <CSSTransition in={isShowAnim} timeout={1000} classNames="fade">
        <>{children}</>
      </CSSTransition>
    </div>
  ) : (
    <ContainerStyled ref={containerRef}>
      <Header />
      <CSSTransition in={isShowAnim} timeout={1000} classNames="fade">
        <>{children}</>
      </CSSTransition>
    </ContainerStyled>
  )
}

export default Container
