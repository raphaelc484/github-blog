import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/External-link'
import { PostHeaderContainer } from './styled'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <>
      <PostHeaderContainer>
        <header>
          <ExternalLink
            type="button"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Voltar"
            onClick={goBack}
            variant="iconLeft"
          />
          <ExternalLink text="Ver no Github" href="#" />
        </header>

        <h1>Javascript data type and data structures</h1>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            Há um dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 Comentários
          </li>
        </ul>
      </PostHeaderContainer>
    </>
  )
}
