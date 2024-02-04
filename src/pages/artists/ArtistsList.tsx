import { useEffect } from 'react'
import ArtistsContainer from '../../components/artists/ArtistsContainer/ArtistsContainer'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useArtistsContext } from '../../context/ArtistsContext'
import { ARTISTS_LIST } from '../routes'
import { ContainerType } from '../../types/common/CardContainer/enums'

function ArtistsList() {
  const { setArtists } = useArtistsContext()

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${ARTISTS_LIST}`
      )
      const data = await response.json()

      setArtists(data.artists)
    }

    getArtists()
  }, [])

  return (
    <>
      <SectionTitle extra='all'>Artists</SectionTitle>
      <ArtistsContainer
        containerType={ContainerType.ALL}
        gridStyle={{
          gridTemplateColumns: 'repeat(auto-fill, 500px)'
        }}
      />
    </>
  )
}

export default ArtistsList
