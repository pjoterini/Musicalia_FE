import s from './Footer.module.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={s.footer}>©{currentYear} Musicalia, Piotr Górski</footer>
  )
}

export default Footer
