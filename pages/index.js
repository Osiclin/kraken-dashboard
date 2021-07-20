import Head from 'next/head'
import Body from '../components/Body'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Sidebar />
        <Body />
      </main>
    </div>
  )
}
