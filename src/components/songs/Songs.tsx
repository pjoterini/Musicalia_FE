import SectionTitle from '../common/SectionTitle/SectionTitle'
import s from './Songs.module.scss'
import SongsContainer from './SongsContainer/SongsContainer'

const Songs = () => {
  return (
    <section className={s.songs}>
      <SectionTitle>Songs</SectionTitle>
      <SongsContainer />
    </section>
  )
}

export default Songs
