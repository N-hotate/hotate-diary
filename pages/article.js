import Head from 'next/head'
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore"
import style from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const id = router.query.id;
  // console.log(id);

  const [article, setArticle] = useState([]);
  useEffect(() => {
    (async () => {
      // パラメータが取得できるまでは処理をスキップする
      if (!id) {
        return;
      }
      const docRef = doc(db, "articles", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setArticle({
          id: docSnap.id,
          title: docSnap.data().title,
          description: docSnap.data().description
        });
      }
    })();
  }, [id]); 

  return (
    <div className="{styles.container}">
      <Head>
        <title>{article.title} | hotate diary ...</title>
        <meta name="description" content="{article.description}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="{styles.main}">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </main>
    </div>
  )
}