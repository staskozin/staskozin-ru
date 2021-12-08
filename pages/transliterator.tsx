import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Transliterator from '../components/Transliterator'
import Footer from '../components/Footer'

const TransliteratorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Транслитератор — Станислав Козин, разработчик</title>
        <meta name="description" content="Транслитератор с кириллицы на латиницу" />
      </Head>
      <Header />
      <h1>Транслитератор</h1>
      <Transliterator />
      <Footer />
    </>
  )
}

export default TransliteratorPage
