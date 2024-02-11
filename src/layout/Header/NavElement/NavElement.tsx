import { faList, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import s from './NavElement.module.scss'

interface IProps {
  children: React.ReactNode
}

function NavElement({ children }: IProps) {
  return (
    <div className={s.entity}>
      <h2>{children}</h2>
      <div className={s.buttons}>
        <NavLink end to={`/${children}`}>
          <button className={s.firstButton} type='button'>
            <FontAwesomeIcon className={s.icon} icon={faList} />
            LIST
          </button>
        </NavLink>
        <NavLink end to={`/${children}/new`}>
          <button type='button'>
            <FontAwesomeIcon className={s.icon} icon={faPlus} />
            NEW
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default NavElement
