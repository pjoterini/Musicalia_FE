import ArticleCard from './ArticleCard/ArticleCard'
import s from './Articles.module.scss'
import ArticlesNav from './ArticlesNav/ArticlesNav'
import { v4 as uuidv4 } from 'uuid'

interface IProps {
  articles?: IArticle[]
}

const Articles = ({ articles }: IProps) => {
  return (
    <section className={s.articles}>
      <h3>Articles</h3>
      <ArticlesNav />
      <div className={s.cardsContainer}>
        {articles &&
          articles.map((article) => (
            <ArticleCard key={uuidv4()} article={article} />
          ))}
      </div>
    </section>
  )
}

export default Articles
