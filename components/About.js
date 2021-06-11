import styles from '@/components/About.module.scss'

export default function About() {
  return (
    <section className={styles.about}>
      <p>Разрабатываю сайты на JavaScript и телеграм-ботов на Python.</p>
      <p>Фронтенд пишу на React, знаком с Redux. Этот сайт сделан на Next.js.</p>
      <p>Работал с Linux (CentOS 8), настраивал Nginx и PostgreSQL, запускал приложения на Node.js и Python.</p>
      <p>Умею работать в Figma и Photoshop.</p>
    </section>
  )
}
