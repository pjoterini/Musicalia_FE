import s from './ArticlesContainer.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { useArticlesContext } from '../../../context/ArticlesContext'
import ArticleCard from '../ArticleCard/ArticleCard'

const ArticlesContainer = () => {
  const { articles } = useArticlesContext()

  return (
    <div className={s.articlesContainer}>
      {articles &&
        articles.map((article) => (
          <ArticleCard key={uuidv4()} article={article} />
        ))}
    </div>
  )
}

export default ArticlesContainer
