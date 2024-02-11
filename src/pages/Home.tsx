import { useEffect, useState } from 'react'
import SlowDataInfo from '../components/SlowDataInfo/SlowDataInfo'
import Articles from '../components/articles/Articles'
import ArtistsContainer from '../components/artists/ArtistsContainer/ArtistsContainer'
import SectionTitle from '../components/common/SectionTitle/SectionTitle'
import SongsContainer from '../components/songs/SongsContainer/SongsContainer'
import { useArticlesContext } from '../context/ArticlesContext'
import { useArtistsContext } from '../context/ArtistsContext'
import { useSongsContext } from '../context/SongsContext'
import { ContainerType } from '../types/common/CardContainer/enums'
import Spinner from '../components/common/Spinner/Spinner'

function Home() {
  const { setArticles } = useArticlesContext()
  const { artists, setArtists } = useArtistsContext()
  const { songs, setSongs } = useSongsContext()
  const [isServerAlive, setIsServerAlive] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL)
      const data = await response.json()

      setArticles(data.articles)
      setArtists(data.artists)
      setSongs(data.songs)
      setIsServerAlive(true)
    }

    getData()
  }, [])

  return (
    <>
      {!isServerAlive && <SlowDataInfo />}
      <Articles />
      <SectionTitle extra='Recently added'>Articles</SectionTitle>
      <Spinner loading={!artists} />
      {artists && (
        <ArtistsContainer
          artists={artists}
          containerType={ContainerType.RECENT}
        />
      )}
      <SectionTitle extra='Recently added'>Songs</SectionTitle>
      <Spinner loading={!songs} />

      {songs && (
        <SongsContainer songs={songs} containerType={ContainerType.RECENT} />
      )}
    </>
  )
}

export default Home
