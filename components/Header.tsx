import Link from 'next/link'
import { useRouter } from 'next/router'
import HeadBasic from './HeadBasic'
import s from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={s.header}>
      <HeadBasic />
      <div>

        {
          useRouter().pathname === '/' ?
            <h1>Станислав Козин</h1> :
            <h2><Link href="/">Станислав Козин</Link></h2>
        }
      </div>
      <aside>
        <a href="https://github.com/staskozin">Гитхаб</a>
        <a href="https://t.me/staskozin">Телеграм</a>
      </aside>
    </header>
  )
}
