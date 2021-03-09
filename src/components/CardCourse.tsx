import styles from '../styles/components/CardCourse.module.css'
import { useState } from 'react'

export function CardCourse() {

  
  const [result, setResult] = useState(null);
  const [combPreco, setCombPreco] = useState (null)
  const [kmPerc, setKmPerc] = useState(null);
  const [autonomia, setAutonomia] = useState(null);

  function courseResult() {
    setResult((Number(kmPerc) / Number(autonomia)) * Number(combPreco));
    setResult(Number(result.toFixed(2)));
  }

  function formClear() {
    setResult(null);
    setCombPreco(null);
    setKmPerc(null);
    setAutonomia(null);
  }

  return (
    <div className={styles.dashCardContainer}>
      <div className={styles.dashCardTop}>

        <div className={styles.dashCardImage}>
          <img src="/dashboard/road.svg" />
        </div>

        <div className={styles.dashCardForm}>
          <h2>ETANOL OU GASOLINA?</h2>
          
          <form>
            <h5>Quilômetros:</h5>
            <input type="text" onChange={(event) => setKmPerc(event.target.value)} />

            <h5>Preço por litro do combústivel:</h5>
            <input type="text" onChange={(event) => setCombPreco(event.target.value)} />

            <h5>Autonomia do veículo:</h5>
            <input type="text" onChange={(event) => setAutonomia(event.target.value)} />

            <div className={styles.dashCardFormButtons}>
              <button id="btn-submit" type="button" onClick={courseResult}>Calcular</button>
              <button id="btn-reset" type="reset" onClick={formClear}>Limpar</button>
            </div>
          </form>

        </div>

      </div>
      <div className={styles.dashCardBottom}>
        <span>O gasto será de: R${result}</span>
      </div>
    </div>
  );
}