import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ArtistForm, {
  ArtistInputs
} from '../../components/artists/ArtistForm/ArtistForm'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useArtistsContext } from '../../context/ArtistsContext'
import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../context/CRUDFormStateContext'
import { CRUDFormType } from '../../types/common/CRUDForm/enums'
import { NEW_ARTIST, UPDATE_ARTIST } from '../routes'
import { useEffect } from 'react'

function CreateArtist() {
  const { setArtists } = useArtistsContext()
  const { setState } = useCRUDFormStateContext()
  const navigate = useNavigate()

  const createArtist: SubmitHandler<ArtistInputs> = async (data) => {
    try {
      const formData = new FormData()

      formData.append('name', data.name)
      formData.append('genre', data.genre)
      formData.append('rating', data.rating.toString())
      formData.append('cover', data.cover[0])

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${NEW_ARTIST}`,
        {
          method: 'POST',
          body: formData
          //  if you define Content-Type manually, you can't inform about boundary information. It needs to be managed automatically by browser because you send files too.
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          // },
        }
      )

      const { createdArtist } = await response.json()
      console.log(createdArtist)

      setArtists((prev) => prev && [...prev, { ...createdArtist }])
      navigate(`${UPDATE_ARTIST}${createdArtist._id}`)
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
      <SectionTitle>Create Artist</SectionTitle>
      <ArtistForm formType={CRUDFormType.CREATE} createArtist={createArtist} />
    </>
  )
}

export default CreateArtist
