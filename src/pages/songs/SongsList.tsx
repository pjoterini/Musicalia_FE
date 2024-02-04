import { useEffect } from 'react'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../../components/songs/SongsContainer/SongsContainer'
import { useSongsContext } from '../../context/SongsContext'
import { ContainerType } from '../../types/common/CardContainer/enums'
import { SONGS_LIST } from '../routes'

function SongsList() {
  const { setSongs, setSongsCovers } = useSongsContext()

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${SONGS_LIST}`
      )
      const data = await response.json()

      setSongs(data.songs)
      setSongsCovers(data.songsCovers)
    }

    getSongs()
  }, [])

  return (
    <>
      <SectionTitle extra='all'>Songs</SectionTitle>
      <SongsContainer
        containerType={ContainerType.ALL}
        gridStyle={{
          gridTemplateColumns: 'repeat(auto-fill, 220px)'
        }}
      />
    </>
  )
}

export default SongsList
