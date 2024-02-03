import NavElement from './NavElement/NavElement'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import { HOME } from '../../pages/routes'

function Header() {
  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <Link to={HOME}>
          <h1 className={s.title}>MUSICALIA.</h1>
        </Link>
        <nav className={s.navigationContainer}>
          <NavElement>artists</NavElement>
          <NavElement>songs</NavElement>
        </nav>
      </header>
    </div>
  )
}

export default Header
