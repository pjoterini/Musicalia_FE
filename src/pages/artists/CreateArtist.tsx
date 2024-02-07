import { SubmitHandler } from 'react-hook-form'
import ArtistForm, {
  ArtistInputs
} from '../../components/artists/ArtistForm/ArtistForm'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useArtistsContext } from '../../context/ArtistsContext'
import { IArtist } from '../../types/artists/interfaces'
import { ARTISTS_LIST, NEW_ARTIST } from '../routes'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CRUDFormType } from '../../types/common/CRUDForm/enums'

function CreateArtist() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState<boolean>(false)
  const { setArtists } = useArtistsContext()

  useEffect(() => {
    if (submitted) navigate(ARTISTS_LIST)
  }, [submitted])

  const createArtist: SubmitHandler<ArtistInputs> = async (data) => {
    try {
      console.log('runs')
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
          //  if you define Content-Type manually, you can't inform about boundary information. It need to managed automatically by browser because you send files too.
          // headers: {
          //   'Content-Type': 'multipart/form-data'
          // },
        }
      )

      const createdArtist: IArtist = await response.json()

      setArtists((prev) => prev && [...prev, { ...createdArtist }])
      setSubmitted(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <SectionTitle>Create Artist</SectionTitle>
      <ArtistForm formType={CRUDFormType.CREATE} createArtist={createArtist} />
    </>
  )
}

export default CreateArtist
