export const MYTH_TEST = [
  {
    question: 'О раке узнали в XIX веке. До этого его проявления списывали на другие болезни.',
    options: [
      { text: 'Правда', isCorrect: false },
      { text: 'Ложь', isCorrect: true },
    ],
    link: 'https://www.niioncologii.ru/highlights/index?id=10755#:~:text=%E2%80%93%20%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%20%D1%83%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%80%D0%B0%D0%BA%D0%B5%20%D0%B2%D1%81%D1%82%D1%80%D0%B5%D1%87%D0%B0%D0%B5%D1%82%D1%81%D1%8F,%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D0%B7%D0%BB%D0%BE%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BE%D0%BF%D1%83%D1%85%D0%BE%D0%BB%D0%B8.',
    feedbackCorrect: 'Верно, диагностировать онкологические заболевания начали',
    feedbackIncorrect: 'Нет, диагностировать онкологические заболевания начали',
    feedbackEnd: ' ещё при\u00A0Гиппократе в 400-х годах до нашей эры',
  },
  {
    question: 'Рак груди — проблема женщин. Мужчины им не\u00A0болеют.',
    options: [
      { text: 'Правда', isCorrect: false },
      { text: 'Ложь', isCorrect: true },
    ],
    link: 'https://www.who.int/ru/news-room/fact-sheets/detail/breast-cancer',
    feedbackIncorrect: `Мужчины болеют им\u00A0реже, но\u00A0такое, увы, случается. А\u00A0схема лечения одинакова для\u00A0обоих полов.`,
    feedbackCorrect:
      'Да, мужчины болеют им\u00A0реже, но\u00A0такое случается. А\u00A0схема лечения одинакова для\u00A0обоих полов.',
  },
  {
    question: 'Волосы после «химии» выпадают не\u00A0у всех.',
    options: [
      { text: 'Правда', isCorrect: true },
      { text: 'Ложь', isCorrect: false },
    ],
    link: 'https://onco-life.ru/ob-onkologii/reabilitacheya/remissiya/obraz-zhizni/post/esli-vypadayut-volosy',

    feedbackCorrect: 'Да, есть противоопухолевые препараты, которые ',
    feedbackIncorrect: 'Нет, есть противоопухолевые препараты, которые ',
    linkText: 'редко',
    feedbackEnd: ' вызывают алопецию, к\u00A0тому же многое зависит от\u00A0индивидуальных особенностей пациента.',
    tooltip: 'Официальный портал Минздрава России об онкологических заболеваниях / Если выпадают волосы',
  },
  {
    question: 'Опухоли мозга и\u00A0центральной нервной системы всегда начинаются из-за\u00A0стресса.',
    options: [
      { text: 'Правда', isCorrect: false },
      { text: 'Ложь', isCorrect: true },
    ],

    feedbackIncorrect:
      'Нет, доказать связь стресса и\u00A0рака ещё никому не\u00A0удалось. Даже тяжёлая форма депрессии не\u00A0повышает риски заболеть.',
    feedbackCorrect:
      'Верно. Доказать связь стресса и\u00A0рака ещё никому не\u00A0удалось. Даже тяжёлая форма депрессии не\u00A0повышает риски заболеть.',
  },
  {
    question: 'Смуглые люди не\u00A0болеют меланомой.',
    options: [
      { text: 'Правда', isCorrect: false },
      { text: 'Ложь', isCorrect: true },
    ],

    feedbackCorrect: 'Всё верно. Светлокожие болеют ',
    feedbackIncorrect: 'Нет. Светлокожие болеют ',
    feedbackEnd: ' чаще, но от\u00A0меланомы не\u00A0застрахован никто.',
  },
]
