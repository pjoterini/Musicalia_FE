interface IProps {
  article: IArticle
}

const ArticleCard = ({ article }: IProps) => {
  return (
    <div key={article.publishedAt}>
      <p>{article.title}</p>
      <img src={article.urlToImage} alt='' />
    </div>
  )
}

export default ArticleCard
