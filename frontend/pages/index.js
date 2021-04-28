import Head from "next/head";
import React from "react";
import { GitHub, LinkedIn } from "../src/components/sociais";
import LottieControl from "../src/controllers/LottieControl";
import styles from "../src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Encurtador de URL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <img src="Logo.svg" />
        </div>
        <h1 className={styles.title}>Encurtador de URL</h1>
        <div className={styles.sociais}>
          <a
            href="https://www.linkedin.com/in/lucas-rafael-simoes/"
            target="blank"
          >
            <LinkedIn />
          </a>
          <a href="https://github.com/luckrafael/" target="blank">
            <GitHub />
          </a>
        </div>
      </main>

      <section className={styles.center}>
        <div className={styles.lottie}>
          <LottieControl />
        </div>
        <h1>Encurtador de URL simples, prático e gratuito.</h1>
      </section>

      <section className={styles.url}>
        <div>
          <p>Cole a URL desjeada para ser encurtada:</p>
        </div>
        <input></input>
        <button>Encurtar</button>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
