import s from './ArticlesNav.module.scss'

const ArticlesNav = () => {
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
    console.log('runs')
    const response = await fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })

    const data = await response.json()
    console.log(data)
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
