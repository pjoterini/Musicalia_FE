import s from './ArtistForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IArtist } from '../../../types/artists/interfaces'
import { CRUDFormType } from '../../../types/common/CRUDForm/enums'
import FormSubmitMessage from '../../common/FormSubmitMessage/FormSubmitMessage'
import ArtistCard from '../ArtistCard/ArtistCard'

interface IProps {
  formType: CRUDFormType
  artist?: IArtist
  createArtist?: SubmitHandler<ArtistInputs>
  updateArtist?: SubmitHandler<ArtistInputs>
  deleteArtist?: () => Promise<void>
}

export interface ArtistInputs {
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
    <div className='form-info'>
      <div className={s.artistCardContainer}>
        {artist && <ArtistCard artist={artist} />}
      </div>
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
            minLength: { value: 2, message: 'Minimum length is 2' }
          })}
        />
        <p className='error'> {errors.name?.message}</p>
        <label htmlFor='genre'>Genre</label>
        <input
          id='genre'
          placeholder={artist ? artist.genre : ''}
          {...register('genre', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Minimum length is 2' }
          })}
        />
        <p className='error'>{errors.genre?.message}</p>
        <label htmlFor='rating'>Rating</label>
        <input
          id='rating'
          type='number'
          {...register('rating', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Rating must be a value between 1 and 10'
            },
            max: {
              value: 10,
              message: 'Rating must be a value between 1 and 10'
            }
          })}
        />
        <p className='error'>{errors.rating?.message}</p>
        <label htmlFor='cover'>Cover (Must be a .jpg file)</label>
        <input
          id='cover'
          type='file'
          accept='image/jpeg'
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
        <FormSubmitMessage />
      </form>
    </div>
  )
}
