import s from './Entity.module.scss'
import Button from '../../../components/common/Button/Button'

interface IProps {
  children: React.ReactNode
}

function Entity({ children }: IProps) {
  return (
    <div className={s.entity}>
      <h2>{children}</h2>
      <div className={s.buttons}>
        <Button>see all</Button>
        <Button>add new</Button>
      </div>
    </div>
  )
}

export default Entity
