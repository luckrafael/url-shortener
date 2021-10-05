import Head from "next/head";
import React from "react";
import { GitHub, LinkedIn } from "../src/components/sociais";
import LottieControl from "../src/controllers/LottieControl";
import styles from "../src/styles/Home.module.css";
import { useState } from "react";
import api from "../utils/api";

export default function Home() {
  const [link, setLink] = useState(false);
  const [urlInicial, setUrlInicial] = useState("");
  const [urlFinal, setUrlFinal] = useState("");

  const regExUrlValidation = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;

  async function Shortner() {
    if (urlInicial.length <= 0 || !regExUrlValidation.exec(urlInicial)) {
      alert("Você precisa adicionar uma URL");
      return;
    }
    const { data } = await api.post("/shortner", {
      url: urlInicial,
    });
    setUrlFinal(`${process.env.NEXT_PUBLIC_BASE_URL}/${data.code}`);
    setLink(true);
  }

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
          <p>Cole a URL desejada para ser encurtada:</p>
        </div>
        <input
          className={styles.input}
          value={urlInicial}
          onChange={(e) => {
            setUrlInicial(e.target.value);
          }}
        ></input>
        {link && (
          <div className={styles.url}>
            <p>
              Link encurtado:{" "}
              <a target="_blank" href={urlFinal}>
                {urlFinal}
              </a>
            </p>
          </div>
        )}
        <button onClick={Shortner}>Encurtar</button>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
