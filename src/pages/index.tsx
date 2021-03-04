import Head from 'next/head'
import { HomeCard } from '../components/HomeCard';
import { HomeLogo } from '../components/HomeLogo';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
      </Head>

      <header>
        <HomeLogo />
      </header>
      <main>
        <HomeCard 
          img="cooper" 
          title="Consumo" 
          description="Calcular a média de consumo do seu carro." 
          route="consumo"
          color="styles.cardRed"
        />
        <HomeCard 
          img="fuel" 
          title="Combustíveis" 
          description="Comparar o preço do Álcool e da Gasolina para saber qual o mais vantajoso para abastecer." 
          route="combustiveis"
          color="styles.cardGreen"
        />
        <HomeCard 
          img="road" 
          title="Percurso" 
          description="Calcular qual será o gasto total em uma viagem." 
          route="custo"
          color="styles.cardBlue"
        />
      </main>
    </div>
    
  );
}