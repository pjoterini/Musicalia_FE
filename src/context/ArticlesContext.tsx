import React, { createContext, useContext, useState } from 'react'

type ArticlesContextProviderProps = {
  children: React.ReactNode
}

type Articles = IArticle[] | undefined
type Query = string

type ArticlesContext = {
  articles: Articles
  setArticles: React.Dispatch<React.SetStateAction<Articles>>
  query: Query
  setQuery: React.Dispatch<React.SetStateAction<Query>>
}

export const ArticlesContext = createContext<ArticlesContext | null>(null)

const ArticlesContextProvider = ({
  children
}: ArticlesContextProviderProps) => {
  const [query, setQuery] = useState<string>('music')
  const [articles, setArticles] = useState<Articles>()

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, query, setQuery }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}

export const useArticlesContext = () => {
  const context = useContext(ArticlesContext)
  if (!context) {
    throw new Error(
      'useArticlesContext must be used within a ArticlesContextProvider'
    )
  }

  return context
}

export default ArticlesContextProvider
