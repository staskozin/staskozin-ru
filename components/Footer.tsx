import s from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div>2014–{(new Date()).getFullYear()}</div>
      <div><a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a></div>
    </footer>
  )
}
