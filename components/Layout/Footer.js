import styles from '@/components/Layout/Footer.module.scss'

export default function Footer({ home }) {
  return (
    <footer className={styles.footer}>
      <p>© 2014–{new Date().getFullYear()} Станислав Козин</p>
      <p>Иконки — <a href="http://sergeychikin.ru/365/">Сергей Чикин</a></p>
    </footer>
  )
}
