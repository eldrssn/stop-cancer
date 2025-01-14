import { useEffect, useRef, useState } from 'react'

interface UseSequenceProps {
  width: number
  height: number
  frames: string[]
  frameInterval: number
  isStarted: boolean
  isLooping?: boolean
  delay?: number
  isMobile?: boolean
}

export const useSequence = ({
  width,
  height,
  frames,
  frameInterval,
  isStarted,
  isLooping = false,
  delay,
  isMobile,
}: UseSequenceProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isComplete = useRef(false)
  const imagesLoaded = useRef(false)

  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [isLoaded, setIsLoaded] = useState(false) // Добавленное состояние для загрузки

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let loadedImages = 0

    if (!imagesLoaded.current) {
      const downloadedImages: HTMLImageElement[] = []
      frames.forEach((src, index) => {
        const img = new Image()
        img.src = src
        img.onload = () => {
          loadedImages++
          if (loadedImages === frames.length) {
            imagesLoaded.current = true
            setIsLoaded(true) // Обновляем состояние, когда все кадры загружены
          }
        }
        downloadedImages[index] = img
      })
      setImages(downloadedImages)
    }

    let currentFrame = 0
    let lastUpdateTime = 0
    let animationId: number
    let delayTimeoutId: ReturnType<typeof setTimeout>

    const drawImage = (image: HTMLImageElement) => {
      const canvasRatio = canvas.width / canvas.height
      const imageRatio = image.width / image.height

      let drawWidth, drawHeight, x, y

      if (canvasRatio > imageRatio) {
        drawWidth = canvas.width
        drawHeight = canvas.width / imageRatio
        x = 0
        y = (canvas.height - drawHeight) / 2
      } else {
        drawHeight = canvas.height
        drawWidth = canvas.height * imageRatio
        x = (canvas.width - drawWidth) / 2
        y = 0
      }

      ctx.drawImage(image, x, y, drawWidth, drawHeight)
    }

    const animate = (currentTime: number) => {
      if (!isStarted) return

      if (currentTime - lastUpdateTime > frameInterval) {
        if (images[currentFrame]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          drawImage(images[currentFrame])
          currentFrame++

          if (currentFrame >= images.length) {
            isComplete.current = true
            if (isLooping) {
              delayTimeoutId = setTimeout(() => {
                currentFrame = 0
                isComplete.current = false
                animate(0)
              }, delay)
            }
            return
          }
        }
        lastUpdateTime = currentTime
      }

      if (!isComplete.current || isLooping) {
        animationId = requestAnimationFrame(animate)
      }
    }

    if (imagesLoaded.current && isStarted && !isComplete.current) {
      animate(0)
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (delayTimeoutId && !isStarted) {
        clearTimeout(delayTimeoutId)
      }
    }
  }, [width, height, frames, frameInterval, isStarted, isLooping, delay, images, isMobile])

  return { canvasRef, isComplete, isLoaded }
}
