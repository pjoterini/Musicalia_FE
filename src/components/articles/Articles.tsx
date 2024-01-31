import ArticleCard from './ArticleCard/ArticleCard'
import s from './Articles.module.scss'
import ArticlesNav from './ArticlesNav/ArticlesNav'

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
            <ArticleCard key={article.title} article={article} />
          ))}
      </div>
    </section>
  )
}

export default Articles
