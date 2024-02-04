import s from './ArtistCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { EDIT_ARTIST } from '../../../pages/routes'
import { IArtist } from '../../../types/artists/interfaces'

interface IProps {
  artist: IArtist
}

const ArtistCard = ({ artist }: IProps) => {
  const youtubeURL = `https://www.youtube.com/results?search_query=${artist.name}`

  return (
    <div className={s.artistCard}>
      <Link to={`${EDIT_ARTIST}${artist._id}`}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={`data:image/png;base64,${artist.coverImage}`}
            alt='artist image'
          />
          <p className={s.info}>INFO</p>
        </div>
      </Link>
      <a className={s.nameWithLink} href={youtubeURL} target='_blank'>
        <p className={s.name}>{artist.name}</p>
        <span className={s.youtubeIconBackground}>
          <FontAwesomeIcon className={s.youtubeIcon} icon={faYoutube} />
        </span>
      </a>
    </div>
  )
}

export default ArtistCard
