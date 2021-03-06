import styles from '../styles/components/DashCard.module.css'

export function DashCard() {
  return (
    <div className={styles.dashCardContainer}>
      <div className={styles.dashCardTop}>

        <div className={styles.dashCardImage}>
          <img src="/dashboard/bmw.svg" />
        </div>

        <div className={styles.dashCardForm}>
          <h2>MEDIA DE CONSUMO</h2>
          <form action="/dashboard/consumption" method="post">
            <h5>Quantidades de litros:</h5>
            <input type="text"/>
            <h5>Quilômetros percorridos:</h5>
            <input type="text"/>

            <div className={styles.dashCardFormButtons}>
              <button type="submit">Calcular</button>
              <button type="button">Limpar</button>
            </div>

          </form>
        </div>

      </div>
      <div className={styles.dashCardBottom}>
        <span>Seu veículo tem uma autonomia de: {}</span>
      </div>

      <script type="text/javascript">
        
      </script>
    </div>
  );
}