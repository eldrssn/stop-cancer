import { Navigate, useRoutes } from 'react-router-dom'

import { useScrollTop } from '@hooks'
import { AboutPage, MainPage, PrevetionPage, SymptomsPage, TreatmentPage } from '@pages'

import { routes } from './routes'

export const Router = () => {
  useScrollTop()

  return useRoutes([
    {
      path: '/',
      element: <Navigate to={routes.main} replace />,
    },
    {
      path: routes.main,
      element: <MainPage />,
    },
    {
      path: routes.about,
      element: <AboutPage />,
    },
    {
      path: routes.treatment,
      element: <TreatmentPage />,
    },
    {
      path: routes.prevention,
      element: <PrevetionPage />,
    },
    {
      path: routes.symptoms,
      element: <SymptomsPage />,
    },
  ])
}
