import { SubmitHandler, useForm } from 'react-hook-form'
import { ISong } from '../../../types/songs/interfaces'

import { useArtistsContext } from '../../../context/ArtistsContext'
import {
  CRUDFormState,
  useCRUDFormStateContext
} from '../../../context/CRUDFormStateContext'
import { CRUDFormType } from '../../../types/common/CRUDForm/enums'
import SongCard from '../SongCard/SongCard'
import s from './SongForm.module.scss'
import { useEffect } from 'react'
import ArtistCard from '../../artists/ArtistCard/ArtistCard'
import { ARTISTS_LIST } from '../../../pages/routes'

interface IProps {
  formType: CRUDFormType
  song?: ISong
  createSong?: SubmitHandler<SongInputs>
  updateSong?: SubmitHandler<SongInputs>
  deleteSong?: () => Promise<void>
}

export type SongInputs = {
  title: string
  artistID: string
  rating: number
  cover: FileList
}

export default function SongForm({
  formType,
  song,
  createSong,
  updateSong,
  deleteSong
}: IProps) {
  const { artists, setArtists } = useArtistsContext()
  const { state } = useCRUDFormStateContext()
  const isEditForm = formType === CRUDFormType.EDIT

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}${ARTISTS_LIST}`
      )
      const { artists } = await response.json()

      setArtists(artists)
    }

    !artists && getArtists()
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SongInputs>({
    defaultValues: {
      title: song ? song.title : '',
      artistID: song && song.artist._id,
      rating: song ? song.rating : 1
    }
  })

  return (
    <div className={s.songInfo}>
      {song && (
        <div className={s.cards}>
          <SongCard song={song} />
          <ArtistCard artist={song.artist} />
        </div>
      )}
      <form
        className={s.songForm}
        onSubmit={handleSubmit(
          isEditForm
            ? (updateSong as SubmitHandler<SongInputs>)
            : (createSong as SubmitHandler<SongInputs>)
        )}
      >
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          placeholder={song ? song.title : ''}
          {...register('title', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Minimum length is 2' }
          })}
        />
        <p className='error'> {errors.title?.message}</p>
        <label htmlFor='artistID'>Artist</label>
        <select
          id='artistID'
          {...register('artistID', {
            required: 'This field is required'
          })}
        >
          {artists?.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {artist.name}
            </option>
          ))}
        </select>
        <p className='error'>{errors.artistID?.message}</p>

        <label htmlFor='genre'>Genre</label>
        <input
          id='genre'
          placeholder={
            song ? song.artist.genre : 'Selected artist genre will be assigned'
          }
          disabled
        />

        <label htmlFor='rating'>Rating</label>
        <input
          id='rating'
          type='number'
          {...register('rating', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Rating values are numbers between 1 and 10'
            },
            max: {
              value: 10,
              message: 'Rating values are numbers between 1 and 10'
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
          {deleteSong && (
            <button type='button' onClick={deleteSong} className='danger'>
              DELETE
            </button>
          )}
        </div>
        {state === CRUDFormState.SUCCESS && (
          <p className='success'>Updated successfully</p>
        )}
        {state === CRUDFormState.ERROR && (
          <p className='error'>Something went wrong</p>
        )}
      </form>
    </div>
  )
}
