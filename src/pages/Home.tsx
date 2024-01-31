import { useEffect, useState } from 'react'
import SlowDataInfo from '../components/SlowDataInfo/SlowDataInfo'
import Articles from '../components/articles/Articles'
import ArtistCard from '../components/ArtistCard/ArtistCard'
import SongCard from '../components/SongCard/SongCard'

function Home() {
  const [articles, setArticles] = useState<IArticle[] | undefined>()
  const [artists, setArtists] = useState<IArtist[] | null>(null)
  const [artistsCovers, setArtistsCovers] = useState<string[] | null>(null)
  const [songs, setSongs] = useState<ISong[] | null>(null)
  const [songsCovers, setSongsCovers] = useState<string[] | null>(null)

  const getData = async () => {
    const response = await fetch('http://localhost:3000')
    const data = await response.json()
    console.log(data)

    setArticles(data.articles)
    setArtists(data.artists)
    setArtistsCovers(data.artistsCovers)
    setSongs(data.songs)
    setSongsCovers(data.songsCovers)
  }

  useEffect(() => {
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
