import { useEffect, useState } from 'react'
import { ContainerType } from '../../../types/common/CardContainer/enums'
import { ISong, ISongsContainer } from '../../../types/songs/interfaces'
import SongCard from '../SongCard/SongCard'
import s from './SongsContainer.module.scss'

const SongsContainer = ({
  songs,
  containerType,
  gridStyle
}: ISongsContainer) => {
  const [slicedSongs, setSlicedSongs] = useState<ISong[] | undefined>(songs)

  useEffect(() => {
    if (containerType === ContainerType.RECENT) {
      setSlicedSongs(songs?.slice(songs.length - 10, songs.length).reverse())
    }
  }, [])

  return (
    <div className={s.songsContainer} style={gridStyle}>
      {slicedSongs &&
        containerType === ContainerType.RECENT &&
        slicedSongs.map((song) => <SongCard key={song._id} song={song} />)}
      {songs &&
        containerType === ContainerType.ALL &&
        songs.map((song) => <SongCard key={song._id} song={song} />)}
    </div>
  )
}

export default SongsContainer
