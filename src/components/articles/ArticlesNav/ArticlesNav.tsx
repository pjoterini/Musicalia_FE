import { useArticlesContext } from '../../../context/ArticlesContext'
import s from './ArticlesNav.module.scss'

const ArticlesNav = () => {
  const { setArticles, setQuery } = useArticlesContext()
  const queries = [
    'music',
    'songs',
    'festivals',
    'classical',
    'artists',
    'soundtracks',
    'retro',
    'alternative'
  ]

  const queryArticles = async (query: string) => {
    const request = { query: query }
    const response = await fetch(import.meta.env.VITE_BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })

    const data = await response.json()
    setArticles(data)
    setQuery(query)
  }

  return (
    <nav className={s.articlesNav}>
      {queries.map((query) => (
        <button key={query} onClick={() => queryArticles(query)} type='submit'>
          {query}
        </button>
      ))}
    </nav>
  )
}

export default ArticlesNav
