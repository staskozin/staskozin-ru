import Link from 'next/link'
import Image from 'next/image'

import styles from '@/components/Layout/Header.module.scss'

export default function Header({ home }) {
  return (
    <header className={styles.header}>
      {home ? (
        <div className={styles.logo}>
          <Image src='/stas.png' alt='Станислав Козин' width={48} height={48} />
          <h1 className={styles.title}>Станислав Козин</h1>
        </div>
      ) : (
        <Link href='/'>
          <a className={`${styles.logo} ${styles.logo_link}`}>
            <Image src='/stas.png' alt='Станислав Козин' width={48} height={48} />
            <h2 className={styles.title}><span>Станислав Козин</span></h2>
          </a>
        </Link>
      )}
      <ul className={styles.links}>
        <li><a href="https://github.com/staskozin">Гитхаб</a></li>
        <li><a href="https://t.me/staskozin">ТГ</a></li>
        <li><a href="https://vk.com/staskozin">ВК</a></li>
      </ul>
    </header>
  )
}
