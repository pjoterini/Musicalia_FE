import SectionTitle from '../common/SectionTitle/SectionTitle'
import s from './Artists.module.scss'
import ArtistsContainer from './ArtistsContainer/ArtistsContainer'
const Artists = () => {
  return (
    <section className={s.artists}>
      <SectionTitle>Artists</SectionTitle>
      <ArtistsContainer />
    </section>
  )
}

export default Artists
