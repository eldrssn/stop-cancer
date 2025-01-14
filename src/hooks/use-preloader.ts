import { useEffect, useState } from 'react'

import { Assets } from 'pixi.js'

import { useCheckDevice } from '@hooks'

import aboutCenter from '/src/assets/images/about/about-center.png'
import aboutTop from '/src/assets/images/about/about-top.png'
import ballLay from '/src/assets/images/about/ball-lay.png'
import ball1 from '/src/assets/images/about/ball1.png'
import ball2 from '/src/assets/images/about/ball2.png'
import ball4 from '/src/assets/images/about/ball4.png'
import mol1 from '/src/assets/images/about/mol1.png'
import mol2 from '/src/assets/images/about/mol2.png'
import mol3 from '/src/assets/images/about/mol3.png'
import topMobile from '/src/assets/images/about/top-mobile.png'
import balls1920 from '/src/assets/images/methods/balls-1-1920.png'
import bgTop360 from '/src/assets/images/methods/bg-top-360.png'
import bgTop1280 from '/src/assets/images/methods/bg-top-1280.png'
import bgTop1920 from '/src/assets/images/methods/bg-top-1920.png'
import balls360 from '/src/assets/images/prevention/balls-360.png'
import balls1280 from '/src/assets/images/prevention/balls-1280.png'
import ballsPrevention1920 from '/src/assets/images/prevention/balls-1920.png'
import bgTopPrevention360 from '/src/assets/images/prevention/bg-top-360.png'
import bgTopPrevention1280 from '/src/assets/images/prevention/bg-top-1280.png'
import bgTopPrevention1920 from '/src/assets/images/prevention/bg-top-1920.png'
import bgTopSymptoms360 from '/src/assets/images/symptoms/bg-top-360.png'
import bgTopSymptoms1280 from '/src/assets/images/symptoms/bg-top-1280.png'
import bgTopSymptoms1920 from '/src/assets/images/symptoms/bg-top-1920.png'
import ballsSymptoms360 from '/src/assets/images/symptoms/img-360.png'
import ballsSymptoms1280 from '/src/assets/images/symptoms/img-1280.png'
import ballsSymptoms1920 from '/src/assets/images/symptoms/img-1920.png'

const images360 = [bgTop360, balls360, bgTopPrevention360, ballsSymptoms360, bgTopSymptoms360]
const images1280 = [bgTop1280, balls1280, bgTopPrevention1280, ballsSymptoms1280, bgTopSymptoms1280]
const images1920 = [
  balls1920,
  bgTop1920,
  ballsPrevention1920,
  bgTopPrevention1920,
  ballsSymptoms1920,
  bgTopSymptoms1920,
]

const commonImages = [aboutCenter, aboutTop, ballLay, ball1, ball2, ball4, mol1, mol2, mol3, topMobile]

export const usePreloader = () => {
  const [isPixiLoading, setIsPixiLoading] = useState(true)
  const [isAssetsLoading, setIsAssetsLoading] = useState(true)
  const { isMobile } = useCheckDevice()
  const isLoading = isAssetsLoading || isPixiLoading

  useEffect(() => {
    const loadPixiAssets = async () => {
      try {
        await Assets.load(isMobile ? images360 : images1280.concat(commonImages))
        setIsPixiLoading(false)
      } catch (err) {
        setIsPixiLoading(false)
      }
    }

    loadPixiAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const screenWidth = window.innerWidth
    let urls = [...commonImages]

    if (screenWidth < 768) {
      urls = [...urls, ...images360]
    } else if (screenWidth < 1440) {
      urls = [...urls, ...images1280]
    } else {
      urls = [...urls, ...images1920]
    }

    const head = document.head || document.getElementsByTagName('head')[0]

    urls.forEach((url) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      head.appendChild(link)
    })

    let loadedCount = 0
    const totalImages = urls.length

    urls.forEach((url) => {
      const img = new Image()
      img.src = url

      img.onload = img.onerror = () => {
        loadedCount += 1
        if (loadedCount === totalImages) {
          setIsAssetsLoading(false)
        }
      }
    })
  }, [])

  return isLoading
}
