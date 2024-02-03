import { useEffect } from 'react'
import SlowDataInfo from '../components/SlowDataInfo/SlowDataInfo'
import Articles from '../components/articles/Articles'
import ArtistsContainer from '../components/artists/ArtistsContainer/ArtistsContainer'
import SectionTitle from '../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../components/songs/SongsContainer/SongsContainer'
import { useArticlesContext } from '../context/ArticlesContext'
import { useArtistsContext } from '../context/ArtistsContext'
import { useSongsContext } from '../context/SongsContext'
import { CardType } from '../types/common/CardContainer/enums'

function Home() {
  const { setArticles } = useArticlesContext()
  const { setArtists, setArtistsCovers } = useArtistsContext()
  const { setSongs, setSongsCovers } = useSongsContext()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL)
      const data = await response.json()

      setArticles(data.articles)
      setArtists(data.artists)
      setArtistsCovers(data.artistsCovers)
      setSongs(data.songs)
      setSongsCovers(data.songsCovers)
    }

    getData()
  }, [])

  return (
    <>
      <SlowDataInfo />
      <Articles />
      <SectionTitle extra='Recently added'>Articles</SectionTitle>
      <ArtistsContainer cardType={CardType.RECENT} />
      <SectionTitle extra='Recently added'>Songs</SectionTitle>
      <SongsContainer cardType={CardType.RECENT} />
    </>
  )
}

export default Home
