import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Concatenator from '../components/Concatenator'
import Footer from '../components/Footer'

const ConcatenatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Конкатенатор — Станислав Козин, разработчик</title>
        <meta name="description" content="Добавляет к строкам текст слева и справа" />
      </Head>
      <Header />
      <h1>Конкатенатор</h1>
      <Concatenator />
      <Footer />
    </>
  )
}

export default ConcatenatorPage
