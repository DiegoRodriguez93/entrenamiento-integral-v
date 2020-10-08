import Head from 'next/head';

import Profesors from './Components/Profesors';
import About from './Components/About';
import Schedule from './Components/Schedule';
import Pricing from './Components/Pricing';
import Form from './Components/Form';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Entrenamiento Integral V</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <h1 className="title">
            entrenamiento integral V
        </h1>

          <h2>
            DEL 23 DE OCTUBRE AL 1 DE NOVIEMBRE
        </h2>
        </header>

        <About/>
        <Profesors/>
        <Schedule/>
        <Pricing/>
        <Form/>



      </main>

      <footer >

      </footer>
    </div>
  )
}
