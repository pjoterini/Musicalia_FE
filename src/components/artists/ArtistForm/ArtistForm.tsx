import { SubmitHandler, useForm } from 'react-hook-form'
import { IArtist } from '../../../types/artists/interfaces'
import { CRUDFormType } from '../../../types/common/CRUDForm/enums'
import ArtistCard from '../ArtistCard/ArtistCard'
import s from './ArtistForm.module.scss'

interface IProps {
  formType: CRUDFormType
  artist?: IArtist
  createArtist?: SubmitHandler<ArtistInputs>
  updateArtist?: SubmitHandler<ArtistInputs>
  deleteArtist?: () => Promise<void>
}

export type ArtistInputs = {
  name: string
  genre: string
  rating: number
  cover: FileList
}

export default function ArtistForm({
  formType,
  artist,
  createArtist,
  updateArtist,
  deleteArtist
}: IProps) {
  const isEditForm = formType === CRUDFormType.EDIT

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ArtistInputs>({
    defaultValues: {
      name: artist ? artist.name : '',
      genre: artist ? artist.genre : '',
      rating: artist ? artist.rating : 1
    }
  })

  return (
    <div className={s.artistInfo}>
      {artist && <ArtistCard artist={artist} />}
      <form
        className={s.artistForm}
        onSubmit={handleSubmit(
          isEditForm
            ? (updateArtist as SubmitHandler<ArtistInputs>)
            : (createArtist as SubmitHandler<ArtistInputs>)
        )}
      >
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          placeholder={artist ? artist.name : ''}
          {...register('name', {
            required: 'This field is required',
            minLength: { value: 1, message: 'Minimum length is 1' }
          })}
        />
        <p className='error'> {errors.name?.message}</p>
        <label htmlFor='genre'>Genre</label>
        <input
          id='genre'
          placeholder={artist ? artist.genre : ''}
          {...register('genre', {
            required: 'This field is required',
            minLength: { value: 1, message: 'Minimum length is 1' }
          })}
        />
        <p className='error'>{errors.genre?.message}</p>
        <label htmlFor='rating'>Rating</label>
        <input
          id='rating'
          type='number'
          {...register('rating', {
            required: 'This field is required',
            min: 1,
            max: 10
          })}
        />
        <p className='error'>{errors.rating?.message}</p>
        <label htmlFor='cover'>Cover (Must be a .jpg file)</label>
        <input
          id='cover'
          type='file'
          {...register('cover', {
            required: isEditForm ? false : 'This field is required'
          })}
        />
        <p className='error'>{errors.cover?.message}</p>
        <div className={s.submitInputs}>
          <input className='submit-input' type='submit' value='save' />
          {deleteArtist && (
            <button type='button' onClick={deleteArtist} className='danger'>
              DELETE
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
