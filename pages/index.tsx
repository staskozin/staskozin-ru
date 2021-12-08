import type { NextPage } from 'next'
import Head from 'next/head'
import HeadBasic from '../components/HeadBasic'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

import s from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <HeadBasic />
      <Head>
        <title>Станислав Козин, разработчик</title>
        <meta name="description" content="Станислав Козин — Frontend-разработчик" />
      </Head>
      <Header />
      <article className={s['about-me']}>
        <p>Разрабатываю сайты.</p>
        <p>Знаю <b>HTML</b> и&nbsp;<b>CSS</b>. Пишу на&nbsp;<b>TypeScript</b>, <b>React</b> и&nbsp;<b>SCSS</b>. Этот сайт работает на&nbsp;<b>Next.js</b></p>
        <p>Также пишу телеграм-ботов на&nbsp;<b>Node.js</b>.</p>
      </article>
      <Portfolio />
      <Footer />
    </>
  )
}

export default Home
