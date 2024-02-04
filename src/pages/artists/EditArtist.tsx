import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ArtistCard from '../../components/artists/ArtistCard/ArtistCard'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../../components/songs/SongsContainer/SongsContainer'
import { IArtist } from '../../types/artists/interfaces'
import { ContainerType } from '../../types/common/CardContainer/enums'
import { ISong } from '../../types/songs/interfaces'
import { EDIT_ARTIST } from '../routes'
import ArtistForm from '../../components/artists/ArtistForm/ArtistForm'

function EditArtist() {
  const { id } = useParams()
  const [artist, setArtist] = useState<IArtist | undefined>()
  const [songs, setSongs] = useState<ISong[] | undefined>()

  useEffect(() => {
    const getArtist = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${EDIT_ARTIST}${id}`
      )
      const data = await response.json()

      setArtist(data.artist)
      setSongs(data.songs)
    }

    getArtist()
  }, [])

  return (
    <>
      <SectionTitle extra={id}>Edit Artist</SectionTitle>
      {artist && <ArtistCard artist={artist} />}
      <ArtistForm />
      {songs && (
        <SongsContainer songs={songs} containerType={ContainerType.ALL} />
      )}
    </>
  )
}

export default EditArtist
