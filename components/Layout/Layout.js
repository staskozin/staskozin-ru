import Head from 'next/head'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

import styles from '@/components/Layout/Layout.module.scss'

export const siteTitle = 'Станислав Козин'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/stas.png" />
        <meta name="description" content="Сайт Станислава Козина" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header home={home} />
      <main>{children}</main>
      <Footer home={home} />
    </div>
  )
}
