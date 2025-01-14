// src/analytics.ts

// Тип для данных, передаваемых в dataLayer
export interface GAEvent {
  event: string
  name: string
  category: string
  slug_location: string
  slug_referrer?: string
  element?: string
  item?: string
}

export interface YaParams {
  param1?: string
  param2?: string
  param3?: string
}

export type YMFunction = (
  counterId: number,
  action: 'init' | 'params' | 'reachGoal',
  params?: YaParams | string
) => void

interface EventData {
  gaEvent: GAEvent
  yandexParams: YaParams
}

// Функция отправки события в Google Analytics
export const sendGAEvent = (eventData: EventData): void => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventData.gaEvent.event,
      name: eventData.gaEvent.name,
      category: eventData.gaEvent.category,
      slug_location: eventData.gaEvent.slug_location,
      slug_referrer: eventData.gaEvent.slug_referrer,
      element: eventData.gaEvent.element,
      item: eventData.gaEvent.item,
    })
  }

  // Отправка параметров визита в Яндекс Метрику
  if (window.ym) {
    window.yaParams = {
      param1: eventData.yandexParams.param1,
      param2: eventData.yandexParams.param2,
      param3: eventData.yandexParams.param3,
    } as YaParams
    window.ym(1915831, 'params', window.yaParams)
  }
}

export const trackLogoClick = (slug_location: string, slug_referrer: string, element: string, item: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик лого',
      category: 'Спецпроект',
      slug_location,
      slug_referrer,
      element,
      item,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик лого',
      param2: item,
      param3: element,
    },
  })
}

export const trackAnswerClick = (slug_location: string, element: string, item: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик ответ',
      category: 'Спецпроект',
      slug_location,
      element,
      item,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик ответ',
      param2: item,
      param3: element,
    },
  })
}

export const trackNextQuestionClick = (slug_location: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик следущий вопрос',
      category: 'Спецпроект',
      slug_location,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик следущий вопрос',
    },
  })
}

export const trackLearnMoreClick = (slug_location: string, slug_referrer: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик узнать больше',
      category: 'Спецпроект',
      slug_location,
      slug_referrer,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик узнать больше',
      param2: slug_referrer,
    },
  })
}

export const trackOtherPagesClick = (slug_location: string, element: string, slug_referrer: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик другие страницы',
      category: 'Спецпроект',
      slug_location,
      element,
      slug_referrer,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик другие страницы',
      param2: slug_referrer,
      param3: element,
    },
  })
}

export const trackMoreAboutDispensaryClick = (slug_location: string, slug_referrer: string) => {
  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_клик больше о диспансеризации',
      category: 'Спецпроект',
      slug_location,
      slug_referrer,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_клик больше о диспансеризации',
      param2: slug_referrer,
    },
  })
}

export const trackExternalLinkClick = (slug_location: string, slug_referrer?: string) => {
  if (!slug_referrer) {
    return
  }

  sendGAEvent({
    gaEvent: {
      event: 'passEventToGa_special',
      name: '/special/gid-po-onkologii/_внешние переходы',
      category: 'Спецпроект',
      slug_location,
      slug_referrer,
    },
    yandexParams: {
      param1: '/special/gid-po-onkologii/_внешние переходы',
      param2: slug_referrer,
    },
  })
}
