import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Concatenator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Конкатенатор — Станислав Козин, разработчик</title>
        <meta name="description" content="Добавляет к строкам текст слева и справа" />
      </Head>
      <Header />
      
      <Footer />
    </>
  )
}

export default Concatenator
