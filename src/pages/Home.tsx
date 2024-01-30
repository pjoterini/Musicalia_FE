import { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import ArtistCard from '../components/ArtistCard/ArtistCard'

function Home() {
  const [articles, setArticles] = useState<IArticle[] | null>(null)
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
      <div>
        {articles &&
          articles.map((article) => <ArticleCard article={article} />)}
        {artists &&
          artistsCovers &&
          artists.map((artist, idx) => (
            <ArtistCard artist={artist} cover={artistsCovers[idx]} />
          ))}
        {songs &&
          songs.map((song, idx) => (
            <div key={song._id}>
              <div>{song.title}</div>
              {songsCovers && (
                <img
                  key={idx}
                  src={`data:image/png;base64,${songsCovers[idx]}`}
                  alt=''
                />
              )}
            </div>
          ))}
      </div>
    </>
  )
}

export default Home
