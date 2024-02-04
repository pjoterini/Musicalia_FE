import s from './ArticleCard.module.scss'

interface IProps {
  article: IArticle
}

const ArticleCard = ({ article }: IProps) => {
  const titleSliced = article.title.slice(0, 50)
  const descriptonSliced = article.description.slice(0, 120)

  return (
    <a href={article.url} target='_blank'>
      <p className={s.title}>
        {titleSliced}
        {article.title.length > titleSliced.length && <span>...</span>}
      </p>
      <img
        className={s.image}
        src={
          article.urlToImage
            ? article.urlToImage
            : `/pixel_background${Math.ceil(Math.random() * 3)}.webp`
        }
        alt='article image'
      />
      <p className={s.description}>
        {descriptonSliced}
        {article.description.length > descriptonSliced.length && (
          <span>...</span>
        )}
      </p>
    </a>
  )
}

export default ArticleCard
