import styles from '../styles/components/CardConsumption.module.css'
import { useState } from 'react'

export function CardConsumption() {

  const [result, setResult] = useState(null);
  const [litros, setLitros] = useState(null);
  const [kmPerc, setKmPerc] = useState(null);

  function consumptionResult() {
    return setResult((Number(kmPerc) / Number(litros)).toFixed(2))
  }

  function formClear() {
    setResult(0);
    setLitros(0);
    setKmPerc(0);
  }

  return (
    <div className={styles.dashCardContainer}>
      <div className={styles.dashCardTop}>

        <div className={styles.dashCardImage}>
          <img src="/dashboard/bmw.svg" />
        </div>

        <div className={styles.dashCardForm}>
          <h2>MEDIA DE CONSUMO</h2>
          <form>

            <h5>Quantidades de litros:</h5>
            <input type="text" id="litros" onChange={(event) => setLitros(event.target.value)} />

            <h5>Quilômetros percorridos:</h5>
            <input type="text" onChange={(event) => setKmPerc(event.target.value)} />

            <div className={styles.dashCardFormButtons}>
              <button id="btn-submit" type="button" onClick={consumptionResult}>Calcular</button>
              <button id="btn-reset" type="button" onClick={formClear}>Limpar</button>
            </div>

          </form>
        </div>

      </div>
      <div className={styles.dashCardBottom}>
        <span>Seu veículo tem uma autonomia de: {result} Km/L</span>
      </div>
    </div>
  );
}