import Button from '../../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons'
import s from './Entity.module.scss'

interface IProps {
  children: React.ReactNode
}

function Entity({ children }: IProps) {
  return (
    <div className={s.entity}>
      <h2>{children}</h2>
      <div className={s.buttons}>
        <Button>
          <FontAwesomeIcon icon={faList} />
          LIST
        </Button>
        <Button>
          <FontAwesomeIcon icon={faPlus} />
          ADD
        </Button>
      </div>
    </div>
  )
}

export default Entity
