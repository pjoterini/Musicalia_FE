import { useSongsContext } from '../../../context/SongsContext'
import SongCard from '../SongCard/SongCard'
import s from './SongsContainer.module.scss'

const SongsContainer = () => {
  const { songs, songsCovers } = useSongsContext()

  return (
    <div className={s.songsContainer}>
      {songs &&
        songsCovers &&
        songs.map((song, idx) => (
          <SongCard key={song._id} song={song} cover={songsCovers[idx]} />
        ))}
    </div>
  )
}

export default SongsContainer
