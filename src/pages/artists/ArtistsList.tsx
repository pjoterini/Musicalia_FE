import { useEffect } from 'react'
import ArtistsContainer from '../../components/artists/ArtistsContainer/ArtistsContainer'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useArtistsContext } from '../../context/ArtistsContext'
import { ARTISTS_LIST } from '../routes'
import { ContainerType } from '../../types/common/CardContainer/enums'
import Spinner from '../../components/common/Spinner/Spinner'

function ArtistsList() {
  const { artists, setArtists } = useArtistsContext()

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${ARTISTS_LIST}`
      )
      const { artists } = await response.json()

      setArtists(artists)
    }

    !artists && getArtists()
  }, [])

  return (
    <>
      <SectionTitle extra='all'>Artists</SectionTitle>
      {artists ? (
        <ArtistsContainer
          artists={artists}
          containerType={ContainerType.ALL}
          gridStyle={{
            gridTemplateColumns: 'repeat(auto-fill, 500px)'
          }}
        />
      ) : (
        <Spinner loading={!artists} />
      )}
    </>
  )
}

export default ArtistsList
