import s from './SectionTitle.module.scss'

interface IProps {
  children: React.ReactNode
}

const SectionTitle = ({ children }: IProps) => {
  return <h3 className={s.sectionTitle}>{children}</h3>
}

export default SectionTitle
