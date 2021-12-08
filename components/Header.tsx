import s from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <h1>Станислав Козин</h1>
      <aside>
        <a href="">Гитхаб</a>
        <a href="">Телеграм</a>
      </aside>
    </header>
  )
}
