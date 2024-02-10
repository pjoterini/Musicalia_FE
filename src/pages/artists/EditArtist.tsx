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
import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../context/CRUDFormStateContext'

function EditArtist() {
  const { id } = useParams()
  const { setState } = useCRUDFormStateContext()
  const { setArtists } = useArtistsContext()
  const [artist, setArtist] = useState<IArtist | undefined>()
  const [songs, setSongs] = useState<ISong[] | undefined>()
  const navigate = useNavigate()

  const updateArtist: SubmitHandler<ArtistInputs> = async (data) => {
    try {
      const formData = new FormData()

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

      const { updatedArtist } = await response.json()

      setArtists((prev) =>
        prev?.map((artist) => {
          if (artist._id === updatedArtist._id) {
            return { ...updatedArtist }
          }
          return artist
        })
      )
      setState(CRUDFormState.SUCCESS)
    } catch (error) {
      setState(CRUDFormState.ERROR)
      console.error(error)
    }
  }

  const deleteArtist: () => Promise<void> = async () => {
    if (songs && songs?.length > 0) {
      window.alert('All of this artist songs need to be deleted first!')
      return
    }

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

        const { _id } = await response.json()

        setArtists((prev) => prev?.filter((artist) => artist._id !== _id))
        navigate(ARTISTS_LIST, { replace: true })
      } catch (error) {
        setState(CRUDFormState.ERROR)
        console.error(error)
      }
    }
  }

  useEffect(() => {
    const getArtist = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${UPDATE_ARTIST}${id}`
      )
      const data = await response.json()

      console.log(data.songs)

      setArtist(data.artist)
      setSongs(data.songs)
    }

    !artist && getArtist()
    !artist && setState(CRUDFormState.PENDING)
  }, [])

  return (
    <>
      <SectionTitle>Edit Artist</SectionTitle>
      {artist && id && (
        <ArtistForm
          formType={CRUDFormType.EDIT}
          artist={artist}
          updateArtist={updateArtist}
          deleteArtist={deleteArtist}
        />
      )}

      {songs && (
        <SongsContainer songs={songs} containerType={ContainerType.RECENT} />
      )}
    </>
  )
}

export default EditArtist
