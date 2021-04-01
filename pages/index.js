import Head from 'next/head'
import LottieControl from '../src/controllers/LottieControl'
import styles from '../src/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img  src="Logo.svg" />
        </div>
        <h1 className={styles.title}>
          Encurtador de URL
        </h1>
        <div className={styles.sociais}>
          <img src="LinkedIn.svg" />
          <img src="github.svg" />
        </div>
      </main>

      <section className={styles.center}>
        <div className={styles.lottie}>
          <LottieControl /> 
        </div>
        <h1>
        Encurtador de URL simples, prático e gratuito.
        </h1>
      </section>

      <section className={styles.url}>
        <div>
          <p>Cole a URL desjeada para ser encurtada:</p>
        </div>
        <input></input>
        <button>Encurtar</button>
      </section>


      <footer className={styles.footer}>
        
      </footer>
      
    </div>
  )
}
