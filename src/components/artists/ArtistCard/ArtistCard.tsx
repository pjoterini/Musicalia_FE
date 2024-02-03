import s from './ArtistCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

interface IProps {
  artist: IArtist
  cover: string
}

const ArtistCard = ({ artist, cover }: IProps) => {
  const youtubeURL = `https://www.youtube.com/results?search_query=${artist.name}`

  return (
    <div className={s.artistCard}>
      <Link to={`/artists/${artist._id}`}>
        <div className={s.imageContainer}>
          <img
            className={s.image}
            src={`data:image/png;base64,${cover}`}
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
