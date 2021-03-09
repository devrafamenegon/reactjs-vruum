import styles from '../styles/components/CardFuel.module.css'
import { useState } from 'react'

export function CardFuel() {

  const [resultFuel, setResultFuel] = useState ("")
  const [result, setResult] = useState(null);
  const [etanol, setEtanol] = useState(null);
  const [gasolina, setGasolina] = useState(null);

  function fuelResult() {
    setResult((Number(etanol) / Number(gasolina)));
    Number(result) < 0.7 ? setResultFuel("Etanol") : setResultFuel("Gasolina")
  }

  function formClear() {
    setResultFuel("")
    setResult(0);
    setEtanol(0);
    setGasolina(0);
  }

  return (
    <div className={styles.dashCardContainer}>
      <div className={styles.dashCardTop}>

        <div className={styles.dashCardImage}>
          <img src="/dashboard/fuel.svg" />
        </div>

        <div className={styles.dashCardForm}>
          <h2>ETANOL OU GASOLINA?</h2>
          
          <form>
            <h5>Preço do etanol:</h5>
            <input type="text" id="litros" onChange={(event) => setEtanol(event.target.value)} />

            <h5>Preço da gasolina:</h5>
            <input type="text" onChange={(event) => setGasolina(event.target.value)} />

            <div className={styles.dashCardFormButtons}>
              <button id="btn-submit" type="button" onClick={fuelResult}>Calcular</button>
              <button id="btn-reset" type="reset" onClick={formClear}>Limpar</button>
            </div>
          </form>

        </div>

      </div>
      <div className={styles.dashCardBottom}>
        <span>Abasteça seu veículo com: {resultFuel}</span>
      </div>
    </div>
  );
}