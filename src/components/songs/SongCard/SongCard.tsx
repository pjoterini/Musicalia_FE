import s from './SongCard.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { parseDate } from '../../../utility/parseDate'
import { UPDATE_SONG } from '../../../pages/routes'
import { ISong } from '../../../types/songs/interfaces'

interface IProps {
  song: ISong
}

const SongCard = ({ song }: IProps) => {
  const youtubeURL = `https://www.youtube.com/results?search_query=${song.artist.name} ${song.title}`

  return (
    <div className={s.songCard}>
      <a className={s.imageLink} href={youtubeURL} target='blank'>
        <img
          className={s.image}
          src={`data:image/png;base64,${song.coverImage}`}
          alt=''
        />
        <div className={s.playIcon}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </a>
      <Link to={`${UPDATE_SONG}${song._id}`}>
        <p className={s.description}>
          {song.artist.name} - {song.title} <span className={s.info}>INFO</span>
        </p>
        <p className={s.extraInfo}>
          <span className={s.createdAt}>{parseDate(song)}</span>
          <span className={s.rating}>{song.rating}/10</span>
        </p>
      </Link>
    </div>
  )
}

export default SongCard
