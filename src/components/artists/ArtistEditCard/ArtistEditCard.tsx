import s from './ArtistEditCard.module.scss'
import ArtistCard from '../ArtistCard/ArtistCard'
import { parseDate } from '../../../utility/parseDate'
import { Link } from 'react-router-dom'
import { UPDATE_ARTIST } from '../../../pages/routes'
import { IArtist } from '../../../types/artists/interfaces'

interface IProps {
  artist: IArtist
}

const ArtistEditCard = ({ artist }: IProps) => {
  return (
    <div className={s.artistEditCard}>
      <ArtistCard artist={artist} />
      <div className={s.detailsContainer}>
        <div className={s.details}>
          <div className={s.keys}>
            <p className={s.key}>Rating:</p>
            <p className={s.key}>Genre:</p>
            <p className={s.key}>Added at:</p>
          </div>
          <div className={s.values}>
            <p className={s.value}>{artist.rating}/10</p>
            <p className={s.value}>{artist.genre}</p>
            <p className={s.value}>{parseDate(artist)}</p>
          </div>
        </div>
        <Link to={`${UPDATE_ARTIST}${artist._id}`}>
          <button className={s.btn}>Edit</button>
        </Link>
      </div>
    </div>
  )
}

export default ArtistEditCard
