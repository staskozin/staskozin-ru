import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import RiceCalculator from '../components/RiceCalculator'
import Footer from '../components/Footer'

const RiceCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Рисовый калькулятор — Станислав Козин, разработчик</title>
        <meta name="description" content="Калькулятор ингредиентов для варки риса" />
      </Head>
      <Header />
      <h1>Рисовый калькулятор</h1>
      <RiceCalculator />
      <Footer />
    </>
  )
}

export default RiceCalculatorPage
