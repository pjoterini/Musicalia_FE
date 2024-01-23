import s from './Button.module.scss'

interface IProps {
  children: React.ReactNode
}

function Button({ children }: IProps) {
  return <button className={s.button}>{children}</button>
}

export default Button
