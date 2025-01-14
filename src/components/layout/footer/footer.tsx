import { FC, useEffect, useRef, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { trackLogoClick } from '@app/analytics'

import * as S from './footer.styled'
import { FooterProps } from './types'

export const Footer: FC<FooterProps> = () => {
  const { pathname } = useLocation()
  const [isTeamShown, setIsTeamShown] = useState(false)
  const teamRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLLIElement>(null)

  const toggleTeam = () => {
    setIsTeamShown((value) => !value)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isTeamShown &&
        teamRef.current &&
        !teamRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsTeamShown(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isTeamShown])

  return (
    <S.Footer>
      <S.Content>
        <S.Block>
          <S.Link
            href="https://lifehacker.ru/"
            target="_black"
            onClick={() => trackLogoClick(pathname, 'https://lifehacker.ru/', 'в конце', 'ЛХ')}
          >
            Лайфхакер
          </S.Link>{' '}
          © | 15.11.2024
        </S.Block>
        <S.Block>
          Социальная реклама.{' '}
          <S.Link
            href="https://mednet.ru/?erid=LjN8KMCPE"
            target="_black"
            onClick={() => trackLogoClick(pathname, 'https://mednet.ru/?erid=LjN8KMCPE', 'в конце', 'Минздрав')}
          >
            ФГБУ «ЦНИИОИЗ» Минздрава России
          </S.Link>
        </S.Block>
        <S.TeamWrapper>
          <S.List $visible={isTeamShown} ref={teamRef}>
            <S.Row>
              <S.Strong>Креатив: </S.Strong>
              <S.Text>Сергей Габер, Юлия Локшина</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Редактор: </S.Strong>
              <S.Text>Тоня Рубцова </S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Автор: </S.Strong>
              <S.Text>Евгения Вишник </S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Корректор: </S.Strong>
              <S.Text>Елена Грицун</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Дизайнеры: </S.Strong>
              <S.Text>Валерий Гиневичюс, Мария Решетняк</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Разработчик: </S.Strong>
              <S.Text>Макс Калимуллин</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Тестировщик: </S.Strong>
              <S.Text>Алина Курицына</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Аналитик: </S.Strong>
              <S.Text>Даниил Медведев </S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Менеджер проекта: </S.Strong>
              <S.Text>Алина Бегиашвили</S.Text>
            </S.Row>
            <S.Row>
              <S.Strong>Менеджер по продажам: </S.Strong>
              <S.Text> Артём Любушин</S.Text>
            </S.Row>
          </S.List>

          <S.BlockTeam ref={buttonRef} onClick={toggleTeam}>
            Команда проекта
          </S.BlockTeam>
        </S.TeamWrapper>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
