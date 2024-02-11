import { useLocation } from 'react-router-dom'
import {
  ARTISTS_LIST,
  NEW_ARTIST,
  NEW_SONG,
  SONGS_LIST
} from '../../pages/routes'
import s from './Content.module.scss'

interface IProps {
  children: React.ReactNode
}

function Content({ children }: IProps) {
  const { pathname } = useLocation()
  let backgroundImagePath = 'none'

  if (pathname.includes(ARTISTS_LIST) && pathname.length === 33) {
    backgroundImagePath = `url('/pixel_background1.webp')`
  } else if (pathname === NEW_ARTIST) {
    backgroundImagePath = `url('/pixel_background2.webp')`
  } else if (pathname.includes(SONGS_LIST) && pathname.length === 31) {
    backgroundImagePath = `url('/pixel_background3.webp')`
  } else if (pathname === NEW_SONG) {
    backgroundImagePath = `url('/pixel_background4.webp')`
  }
  const backgroundImage = {
    backgroundImage: `${backgroundImagePath}`
  }

  return (
    <div className={s.contentContainer}>
      <div style={backgroundImage} className={s.backgroundImage}></div>
      {children}
    </div>
  )
}

export default Content
