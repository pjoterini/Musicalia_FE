import { useEffect } from 'react'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../../components/songs/SongsContainer/SongsContainer'
import { useSongsContext } from '../../context/SongsContext'
import { ContainerType } from '../../types/common/CardContainer/enums'
import { SONGS_LIST } from '../routes'
import Spinner from '../../components/common/Spinner/Spinner'

function SongsList() {
  const { songs, setSongs } = useSongsContext()

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${SONGS_LIST}`
      )
      const { songs } = await response.json()

      setSongs(songs)
    }

    !songs && getSongs()
  }, [])

  return (
    <>
      <SectionTitle extra='all'>Songs</SectionTitle>
      {songs ? (
        <SongsContainer
          songs={songs}
          containerType={ContainerType.ALL}
          gridStyle={{
            gridTemplateColumns: 'repeat(auto-fill, 220px)'
          }}
        />
      ) : (
        <Spinner loading={!songs} />
      )}
    </>
  )
}

export default SongsList
