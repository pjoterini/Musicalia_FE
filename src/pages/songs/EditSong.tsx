import { useNavigate, useParams } from 'react-router-dom'
import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../context/CRUDFormStateContext'
import { useEffect, useState } from 'react'
import SongForm, { SongInputs } from '../../components/songs/SongForm/SongForm'
import { ISong } from '../../types/songs/interfaces'
import { SubmitHandler } from 'react-hook-form'
import { SONGS_LIST, UPDATE_SONG } from '../routes'
import { useSongsContext } from '../../context/SongsContext'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { CRUDFormType } from '../../types/common/CRUDForm/enums'

function EditSong() {
  const { id } = useParams()
  const { setState } = useCRUDFormStateContext()
  const [song, setSong] = useState<ISong | undefined>()
  const { setSongs } = useSongsContext()
  const navigate = useNavigate()

  const updateSong: SubmitHandler<SongInputs> = async (data) => {
    try {
      const formData = new FormData()

      formData.append('title', data.title)
      formData.append('artistID', data.artistID)
      formData.append('rating', data.rating.toString())
      formData.append('cover', data.cover[0])

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${UPDATE_SONG}${song?._id}`,
        {
          method: 'PUT',
          body: formData
        }
      )

      const { updatedSong } = await response.json()

      setSongs((prev) =>
        prev?.map((song) => {
          if (song._id === updatedSong._id) {
            return { ...updatedSong }
          }
          return song
        })
      )
      setState(CRUDFormState.SUCCESS)
    } catch (error) {
      setState(CRUDFormState.ERROR)
      console.error(error)
    }
  }

  const deleteSong: () => Promise<void> = async () => {
    if (window.confirm('Are you sure you want to delete this song?')) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}${UPDATE_SONG}${song?._id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: song?._id
            })
          }
        )

        const { _id } = await response.json()

        setSongs((prev) => prev?.filter((song) => song._id !== _id))
        navigate(SONGS_LIST, { replace: true })
      } catch (error) {
        setState(CRUDFormState.ERROR)
        console.error(error)
      }
    }
  }

  useEffect(() => {
    const getSong = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${UPDATE_SONG}${id}`
      )
      const { song } = await response.json()

      setSong(song)
    }

    !song && getSong()
    !song && setState(CRUDFormState.PENDING)
  }, [])

  return (
    <>
      <SectionTitle>Edit Song</SectionTitle>
      {song && id && (
        <SongForm
          formType={CRUDFormType.EDIT}
          song={song}
          updateSong={updateSong}
          deleteSong={deleteSong}
        />
      )}
    </>
  )
}

export default EditSong
