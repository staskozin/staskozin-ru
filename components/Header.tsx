import s from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <h1>Станислав Козин</h1>
      </div>
      <aside>
        <a href="">Гитхаб</a>
        <a href="">Телеграм</a>
      </aside>
    </header>
  )
}
