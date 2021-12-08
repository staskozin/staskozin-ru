import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Transliterator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Транслитератор — Станислав Козин, разработчик</title>
        <meta name="description" content="Транслитератор с кириллицы на латиницу" />
      </Head>
      <Header />
      
      <Footer />
    </>
  )
}

export default Transliterator
