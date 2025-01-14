import { routes } from '@app/router'

export const routesLinks = [
  { id: 1, title: 'Мифы и реальность', bottomTittle: 'мифы о раке', href: routes.main },
  { id: 2, title: 'Что такое рак', href: routes.about },
  { id: 3, title: 'Методы лечения', href: routes.treatment },
  { id: 4, title: 'Профилактика', href: routes.prevention },
  { id: 5, title: 'Диспансеризация', href: routes.symptoms },
]
