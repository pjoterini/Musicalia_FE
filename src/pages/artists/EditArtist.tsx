import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import ArtistForm, {
  ArtistInputs
} from '../../components/artists/ArtistForm/ArtistForm'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../../components/songs/SongsContainer/SongsContainer'
import { useArtistsContext } from '../../context/ArtistsContext'
import { IArtist } from '../../types/artists/interfaces'
import { ContainerType } from '../../types/common/CardContainer/enums'
import { ISong } from '../../types/songs/interfaces'
import { ARTISTS_LIST, UPDATE_ARTIST } from '../routes'
import { CRUDFormType } from '../../types/common/CRUDForm/enums'

function EditArtist() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [submitted, setSubmitted] = useState<boolean>(false)
  const { setArtists } = useArtistsContext()
  const [artist, setArtist] = useState<IArtist | undefined>()
  const [songs, setSongs] = useState<ISong[] | undefined>()

  const updateArtist: SubmitHandler<ArtistInputs> = async (data) => {
    try {
      const formData = new FormData()

      artist && formData.append('id', artist._id)
      formData.append('name', data.name)
      formData.append('genre', data.genre)
      formData.append('rating', data.rating.toString())
      formData.append('cover', data.cover[0])

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${UPDATE_ARTIST}${artist?._id}`,
        {
          method: 'PUT',
          body: formData
        }
      )

      const responseObj: { updatedArtist: IArtist } = await response.json()
      const updatedArtist = responseObj.updatedArtist

      setArtists((prev) =>
        prev?.map((artist) => {
          if (artist._id === updatedArtist._id) {
            return { ...updatedArtist }
          }
          return artist
        })
      )
    } catch (error) {
      console.error(error)
    }
  }

  const deleteArtist: () => Promise<void> = async () => {
    if (window.confirm('Are you sure you want to delete this artist?')) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}${UPDATE_ARTIST}${artist?._id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: artist?._id
            })
          }
        )

        const deletedArtistId = await response.json()

        setArtists((prev) =>
          prev?.filter((artist) => artist._id !== deletedArtistId)
        )
        setSubmitted(true)
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    if (submitted) navigate(ARTISTS_LIST, { replace: true })

    const getArtist = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${UPDATE_ARTIST}${id}`
      )
      const data = await response.json()

      setArtist(data.artist)
      setSongs(data.songs)
    }

    !artist && getArtist()
  }, [submitted])

  return (
    <>
      <SectionTitle extra={id}>Edit Artist</SectionTitle>
      {artist && id && (
        <ArtistForm
          formType={CRUDFormType.EDIT}
          artist={artist}
          updateArtist={updateArtist}
          deleteArtist={deleteArtist}
        />
      )}
      {songs && (
        <SongsContainer songs={songs} containerType={ContainerType.ALL} />
      )}
    </>
  )
}

export default EditArtist
