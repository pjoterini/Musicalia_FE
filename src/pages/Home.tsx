import { useEffect, useState } from 'react'
import SlowDataInfo from '../components/SlowDataInfo/SlowDataInfo'
import Articles from '../components/articles/Articles'
import ArtistCard from '../components/ArtistCard/ArtistCard'
import SongCard from '../components/SongCard/SongCard'
import { useArticlesContext } from '../context/ArticlesContext'

function Home() {
  const { articles, setArticles } = useArticlesContext()
  const [artists, setArtists] = useState<IArtist[] | null>(null)
  const [artistsCovers, setArtistsCovers] = useState<string[] | null>(null)
  const [songs, setSongs] = useState<ISong[] | null>(null)
  const [songsCovers, setSongsCovers] = useState<string[] | null>(null)

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
      <Articles articles={articles} />
      {artists &&
        artistsCovers &&
        artists.map((artist, idx) => (
          <ArtistCard
            key={artist._id}
            artist={artist}
            cover={artistsCovers[idx]}
          />
        ))}
      {songs &&
        songsCovers &&
        songs.map((song, idx) => (
          <SongCard key={song._id} song={song} cover={songsCovers[idx]} />
        ))}
    </>
  )
}

export default Home
