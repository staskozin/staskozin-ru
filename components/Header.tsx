import s from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <h1>Станислав Козин</h1>
      </div>
      <aside>
        <a href="https://github.com/staskozin">Гитхаб</a>
        <a href="https://t.me/staskozin">Телеграм</a>
      </aside>
    </header>
  )
}
