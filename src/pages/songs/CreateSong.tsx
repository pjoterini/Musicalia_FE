import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import SongForm, { SongInputs } from '../../components/songs/SongForm/SongForm'
import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../context/CRUDFormStateContext'
import { useSongsContext } from '../../context/SongsContext'
import { CRUDFormType } from '../../types/common/CRUDForm/enums'
import { NEW_SONG, UPDATE_SONG } from '../routes'
import { useEffect } from 'react'

function CreateSong() {
  const navigate = useNavigate()
  const { setState } = useCRUDFormStateContext()
  const { setSongs } = useSongsContext()

  const createSong: SubmitHandler<SongInputs> = async (data) => {
    try {
      const formData = new FormData()

      formData.append('title', data.title)
      formData.append('artistID', data.artistID)
      formData.append('rating', data.rating.toString())
      formData.append('cover', data.cover[0])

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${NEW_SONG}`,
        {
          method: 'POST',
          body: formData
        }
      )

      const { createdSong } = await response.json()

      setSongs((prev) => prev && [...prev, { ...createdSong }])
      navigate(`${UPDATE_SONG}${createdSong._id}`)
    } catch (error) {
      setState(CRUDFormState.ERROR)
      console.error(error)
    }
  }

  useEffect(() => {
    setState(CRUDFormState.PENDING)
  }, [])

  return (
    <>
      <SectionTitle>Create Song</SectionTitle>
      <SongForm formType={CRUDFormType.CREATE} createSong={createSong} />
    </>
  )
}

export default CreateSong
