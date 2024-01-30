import s from './Content.module.scss'

interface IProps {
  children: React.ReactNode
}

function Content({ children }: IProps) {
  return <div className={s.contentContainer}>{children}</div>
}

export default Content
