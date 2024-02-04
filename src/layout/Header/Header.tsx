import NavElement from './NavElement/NavElement'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import { HOME } from '../../pages/routes'
import { useEffect } from 'react'
import { rainbowWord } from '../../utility/rainbowWord'

function Header() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      rainbowWord()
    }, 4000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className={s.headerContainer}>
      <header className={s.header}>
        <Link to={HOME}>
          <h1 className={s.title}>
            <span className='letter'>M</span>
            <span className='letter'>U</span>
            <span className='letter'>S</span>
            <span className='letter'>I</span>
            <span className='letter'>C</span>
            ALIA
            <span className='letter'>.</span>
          </h1>
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
