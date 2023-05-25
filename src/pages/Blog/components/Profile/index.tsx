import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/External-link'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <>
      <ProfileContainer>
        <ProfilePicture src="https://github.com/raphaelc484.png" />

        <ProfileDetails>
          <header>
            <h1>Raphael Clemente Miranda</h1>
            <ExternalLink text="Github" />
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              raphaelc484
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              São Paulo
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              123 seguidores
            </li>
          </ul>
        </ProfileDetails>
      </ProfileContainer>
    </>
  )
}
