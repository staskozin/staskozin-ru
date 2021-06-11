import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '@/components/Layout/Layout'
import About from '@/components/About'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Сайт Сталислава Козина" />
      </Head>
      <About />
    </Layout>
  )
}
