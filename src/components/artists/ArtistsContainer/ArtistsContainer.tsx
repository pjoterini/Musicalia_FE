import s from './ArtistsContainer.module.scss'
import { useArtistsContext } from '../../../context/ArtistsContext'
import ArtistCard from '../ArtistCard/ArtistCard'

const ArtistsContainer = () => {
  const { artists, artistsCovers } = useArtistsContext()

  return (
    <div className={s.artistsContainer}>
      {artists &&
        artistsCovers &&
        artists.map((artist, idx) => (
          <ArtistCard
            key={artist._id}
            artist={artist}
            cover={artistsCovers[idx]}
          />
        ))}
    </div>
  )
}

export default ArtistsContainer
