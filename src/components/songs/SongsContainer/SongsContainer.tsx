import { useEffect } from 'react'
import { useSongsContext } from '../../../context/SongsContext'
import { CardType } from '../../../types/common/CardContainer/enums'
import { ICardsContainer } from '../../../types/common/CardContainer/interfaces'
import SongCard from '../SongCard/SongCard'
import s from './SongsContainer.module.scss'

const SongsContainer = ({ cardType, gridStyle }: ICardsContainer) => {
  const { songs, songsCovers } = useSongsContext()

  useEffect(() => {
    cardType === CardType.RECENT && songs?.slice(0, 10)
  }, [])

  return (
    <div className={s.songsContainer} style={gridStyle}>
      {songs &&
        songsCovers &&
        songs.map((song, idx) => (
          <SongCard key={song._id} song={song} cover={songsCovers[idx]} />
        ))}
    </div>
  )
}

export default SongsContainer
