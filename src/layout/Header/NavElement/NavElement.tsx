import Button from '../../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons'
import s from './NavElement.module.scss'
import { Link } from 'react-router-dom'

interface IProps {
  children: React.ReactNode
}

function NavElement({ children }: IProps) {
  return (
    <div className={s.entity}>
      <h2>{children}</h2>
      <div className={s.buttons}>
        <Link to={`/${children}`}>
          <Button>
            <FontAwesomeIcon icon={faList} />
            LIST
          </Button>
        </Link>
        <Link to={`/${children}/new`}>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
            ADD
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NavElement
