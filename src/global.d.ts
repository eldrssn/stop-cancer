import { GAEvent, YaParams, YMFunction } from './src/analytics'

export {}

declare global {
  interface Window {
    dataLayer: GAEvent[]
    yaParams: YaParams
    ym: YMFunction
  }
}
