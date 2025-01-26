import { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { AnimatedRoutes } from '@components'

import { usePreloader } from './hooks/use-preloader'
import { Loader } from './pages/main-page/main-page.styled'

const App = () => {
  const [showLoader, setShowLoader] = useState(true)

  const isLoading = usePreloader()

  useEffect(() => {
    if (isLoading) return

    const timeoutId = setTimeout(() => setShowLoader(false), 900)

    return () => clearTimeout(timeoutId)
  }, [isLoading])

  return (
    <BrowserRouter>
      {showLoader && <Loader $hide={!isLoading} />}
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
