import s from './SectionTitle.module.scss'

interface IProps {
  children: React.ReactNode
  extra?: string
}

const SectionTitle = ({ children, extra }: IProps) => {
  return (
    <h3 className={s.sectionTitle}>
      {children} {extra && <span className={s.extra}>{extra}</span>}
    </h3>
  )
}

export default SectionTitle
