import { useArticlesContext } from '../../context/ArticlesContext'
import SectionTitle from '../common/SectionTitle/SectionTitle'
import s from './Articles.module.scss'
import ArticlesContainer from './ArticlesContainer/ArticlesContainer'
import ArticlesNav from './ArticlesNav/ArticlesNav'

const Articles = () => {
  const { query } = useArticlesContext()

  return (
    <section className={s.articles}>
      <SectionTitle extra={query}>Articles</SectionTitle>
      <ArticlesNav />
      <ArticlesContainer />
    </section>
  )
}

export default Articles
