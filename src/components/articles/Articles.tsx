import SectionTitle from '../common/SectionTitle/SectionTitle'
import s from './Articles.module.scss'
import ArticlesContainer from './ArticlesContainer/ArticlesContainer'
import ArticlesNav from './ArticlesNav/ArticlesNav'

const Articles = () => {
  return (
    <section className={s.articles}>
      <SectionTitle>Articles</SectionTitle>
      <ArticlesNav />
      <ArticlesContainer />
    </section>
  )
}

export default Articles
