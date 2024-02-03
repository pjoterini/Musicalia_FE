import s from './ArtistsContainer.module.scss'
import { useEffect } from 'react'
import { useArtistsContext } from '../../../context/ArtistsContext'
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistEditCard from '../ArtistEditCard/ArtistEditCard'
import { ICardsContainer } from '../../../types/common/CardContainer/interfaces'
import { CardType } from '../../../types/common/CardContainer/enums'

const ArtistsContainer = ({ cardType, gridStyle }: ICardsContainer) => {
  const { artists, artistsCovers } = useArtistsContext()

  useEffect(() => {
    cardType === CardType.RECENT && artists?.slice(0, 6)
  }, [])

  return (
    <div className={s.artistsContainer} style={gridStyle}>
      {artists &&
        artistsCovers &&
        cardType === CardType.RECENT &&
        artists.map((artist, idx) => (
          <ArtistCard
            key={artist._id}
            artist={artist}
            cover={artistsCovers[idx]}
          />
        ))}
      {artists &&
        artistsCovers &&
        cardType === CardType.EDIT &&
        artists.map((artist, idx) => (
          <ArtistEditCard
            key={artist._id}
            artist={artist}
            cover={artistsCovers[idx]}
          />
        ))}
    </div>
  )
}

export default ArtistsContainer
