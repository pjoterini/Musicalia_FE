import { useEffect } from 'react'
import ArtistsContainer from '../../components/artists/ArtistsContainer/ArtistsContainer'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useArtistsContext } from '../../context/ArtistsContext'
import { ARTISTS_LIST } from '../routes'
import { CardType } from '../../types/common/CardContainer/enums'

function ArtistsList() {
  const { setArtists, setArtistsCovers } = useArtistsContext()

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${ARTISTS_LIST}`
      )
      const data = await response.json()

      setArtists(data.artists)
      setArtistsCovers(data.artistsCovers)
    }

    getArtists()
  }, [])

  return (
    <>
      <SectionTitle extra='all'>Artists</SectionTitle>
      <ArtistsContainer
        cardType={CardType.EDIT}
        gridStyle={{
          gridTemplateColumns: 'repeat(auto-fill, 500px)'
        }}
      />
    </>
  )
}

export default ArtistsList
