import { useEffect } from 'react'
import SlowDataInfo from '../components/SlowDataInfo/SlowDataInfo'
import Articles from '../components/articles/Articles'
import Artists from '../components/artists/Artists'
import Songs from '../components/songs/Songs'
import { useArticlesContext } from '../context/ArticlesContext'
import { useArtistsContext } from '../context/ArtistsContext'
import { useSongsContext } from '../context/SongsContext'

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
      <Artists />
      <Songs />
    </>
  )
}

export default Home
