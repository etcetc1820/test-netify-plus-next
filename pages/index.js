import Head from 'next/head'
import Script from "next/script";
import styles from '../styles/Home.module.css'
import { attributes, react as HomeContent } from '../content/home.md';

export default function Home() {
  const { title, cats } = attributes;

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
      <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>

        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </main>
      {/*<Script>*/}
        <script dangerouslySetInnerHTML={{__html: `if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }`}}/>
        {/*</Script>*/}
    </div>
  )
}
