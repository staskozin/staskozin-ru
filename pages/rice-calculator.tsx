import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RiceCalculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Рисовый калькулятор — Станислав Козин, разработчик</title>
        <meta name="description" content="Калькулятор ингредиентов для варки риса" />
      </Head>
      <Header />
      
      <Footer />
    </>
  )
}

export default RiceCalculator
