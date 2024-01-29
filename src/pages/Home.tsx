import { useEffect, useState } from 'react'

interface IArticle {
  author: string
  content: string
  description: string
  source: string
  url: string
  urlToImage: string
  publishedAt: string
  title: string
}
interface IArtist {
  _id: string
  name: string
  genre: string
  rating: number
  createdAt: string
  coverImage: {
    data: any
    type: string
  }
}
interface ISong {
  _id: string
  artist: {
    name: string
    genre: string
    rating: number
  }
  title: string
  rating: number
  createdAt: string
  coverImage: {
    data: any
    type: string
  }
}

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
          articles.map((article) => (
            <div key={article.publishedAt}>
              <p>{article.title}</p>
              <img src={article.urlToImage} alt='' />
            </div>
          ))}
        {artists &&
          artists.map((artist, idx) => (
            <div key={artist._id}>
              <div>{artist.name}</div>
              {artistsCovers && (
                <img
                  key={idx}
                  src={`data:image/png;base64,${artistsCovers[idx]}`}
                  alt=''
                />
              )}
            </div>
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
