import s from './SongCard.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  song: ISong
  cover: string
}

const SongCard = ({ song, cover }: IProps) => {
  const youtubeURL = `https://www.youtube.com/results?search_query=${song.artist.name} ${song.title}`

  return (
    <div className={s.songCard}>
      <a className={s.imageLink} href={youtubeURL} target='blank'>
        <img
          className={s.image}
          src={`data:image/png;base64,${cover}`}
          alt=''
        />
        <div className={s.playIcon}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      </a>
      <Link to={`/songs/${song._id}`}>
        <p className={s.description}>
          {song.artist.name} - {song.title} <span className={s.info}>INFO</span>
        </p>
      </Link>
    </div>
  )
}

export default SongCard
