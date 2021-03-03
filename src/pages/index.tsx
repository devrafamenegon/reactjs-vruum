import Head from 'next/head'
import { HomeLogo } from '../components/HomeLogo';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
      </Head>

      <header>
        <HomeLogo/>
      </header>
      <main>
        
      </main>
    </div>
    
  );
}