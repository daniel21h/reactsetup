import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Daniel Hessel</p>
        <a href="https://rocketseat.com.br"> with Rocketseat</a>
      </main>
    </Container>
  )
}

export default Home
