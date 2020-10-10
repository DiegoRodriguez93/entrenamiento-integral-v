import Head from 'next/head';

import Header from './Components/Header';
import Profesors from './Components/Profesors';
import About from './Components/About';
import Schedule from './Components/Schedule';
import Pricing from './Components/Pricing';
import Form from './Components/Form';
import WhatsApp from './Components/WhatsApp';

import { NextSeo } from 'next-seo';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

export default function Home() {
  return (
    <div className="container">
        <NextSeo
        title="Entrenamiento Integral V"
        description="5ta edición del entrenamiento integral de Ajedrez Latino con la participación especial del MI Benjamín Mela y el GM Leandro Krysa."
        />
        <Head>
          <title>Entrenamiento Integral V</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <main>
      <Tada>
        <Header/>
      </Tada>
      <Fade>
        <About/>
        <Profesors/>
        <Schedule/>
        <Pricing/>
        <Form/>
      </Fade>

          <WhatsApp/>

      </main>

    </div>
  )
}
