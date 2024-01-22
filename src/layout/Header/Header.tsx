import Entity from './Entity/Entity'
import s from './Header.module.scss'

function Header() {
  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <h1 className={s.title}>Musicalia</h1>
        <nav className={s.navigationContainer}>
          <Entity>artists</Entity>
          <Entity>songs</Entity>
        </nav>
      </header>
    </div>
  )
}

export default Header
