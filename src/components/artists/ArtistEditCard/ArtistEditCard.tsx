import s from './ArtistEditCard.module.scss'
import ArtistCard from '../ArtistCard/ArtistCard'
import { parseDate } from '../../../utility/parseDate'

interface IProps {
  artist: IArtist
  cover: string
}

const ArtistEditCard = ({ artist, cover }: IProps) => {
  return (
    <div className={s.artistEditCard}>
      <ArtistCard artist={artist} cover={cover} />
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
        <button className={s.btn}>Edit</button>
      </div>
    </div>
  )
}

export default ArtistEditCard
