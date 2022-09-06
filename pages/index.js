import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import '../firebase'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    (async () => {
      const articles = [];
      const querySnapshot = await getDocs(collection(db, 'articles'));
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        articles.push({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
        setArticles(articles);
      });
    })();
  }, []);
  // データベースからのデータが入る
  console.log(articles);
  return (
    <div className={styles.container}>
      <Head>
        <title>hotate diary</title>
        <meta name="description" content="hotate の春夏秋冬" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          ようこそ <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
        <h1>hotate diary...</h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          {articles.map((article) => {
            return (
              <a key={article.id} href={`/article?id=${article.id}`} className={styles.card}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </a>
            )
          })}

          {/*
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
