import { FC } from 'react'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { routes } from '@app/router'
import { useScrollTop } from '@hooks'
import { AboutPage, MainPage, PrevetionPage, SymptomsPage, TreatmentPage } from '@pages'

import { AnimatedRoutesProps } from './types'

export const AnimatedRoutes: FC<AnimatedRoutesProps> = () => {
  const location = useLocation()

  useScrollTop()

  return (
    <Routes location={location}>
      <Route path="/" element={<Navigate to={routes.main} replace />} />
      <Route path={routes.main} element={<MainPage />} />
      <Route path={routes.about} element={<AboutPage />} />
      <Route path={routes.treatment} element={<TreatmentPage />} />
      <Route path={routes.prevention} element={<PrevetionPage />} />
      <Route path={routes.symptoms} element={<SymptomsPage />} />
    </Routes>
  )
}

export default AnimatedRoutes
