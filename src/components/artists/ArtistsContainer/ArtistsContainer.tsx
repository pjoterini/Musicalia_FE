import { useEffect, useState } from 'react'
import { IArtist, IArtistsContainer } from '../../../types/artists/interfaces'
import { ContainerType } from '../../../types/common/CardContainer/enums'
import ArtistCard from '../ArtistCard/ArtistCard'
import ArtistEditCard from '../ArtistEditCard/ArtistEditCard'
import s from './ArtistsContainer.module.scss'

const ArtistsContainer = ({
  artists,
  containerType,
  gridStyle
}: IArtistsContainer) => {
  const [slicedArtists, setSlicedArtists] = useState<IArtist[] | undefined>(
    artists
  )

  useEffect(() => {
    if (containerType === ContainerType.RECENT) {
      setSlicedArtists(artists?.slice(0, 6))
    }
  }, [])

  return (
    <div className={s.artistsContainer} style={gridStyle}>
      {slicedArtists &&
        containerType === ContainerType.RECENT &&
        slicedArtists.map((artist) => (
          <ArtistCard key={artist._id} artist={artist} />
        ))}
      {slicedArtists &&
        containerType === ContainerType.ALL &&
        slicedArtists.map((artist) => (
          <ArtistEditCard key={artist._id} artist={artist} />
        ))}
    </div>
  )
}

export default ArtistsContainer
