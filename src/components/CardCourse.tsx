import { useState } from 'react'
import { DashCardContainer, DashCardTop, DashCardImage, DashCardForm, DashCardFormButtons, DashCardBottom } from '../styles/components/Card';

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
    <DashCardContainer>
      <DashCardTop>

        <DashCardImage>
          <img src="/dashboard/road.svg" />
        </DashCardImage>

        <DashCardForm>
          <h2>ETANOL OU GASOLINA?</h2>
          
          <form>
            <h5>Quilômetros:</h5>
            <input type="text" onChange={(event) => setKmPerc(event.target.value)} />

            <h5>Preço por litro do combústivel:</h5>
            <input type="text" onChange={(event) => setCombPreco(event.target.value)} />

            <h5>Autonomia do veículo:</h5>
            <input type="text" onChange={(event) => setAutonomia(event.target.value)} />

            <DashCardFormButtons buttonColor="var(--blue)">
              <button id="btn-submit" type="button" onClick={courseResult}>Calcular</button>
              <button id="btn-reset" type="reset" onClick={formClear}>Limpar</button>
            </DashCardFormButtons>
          </form>

        </DashCardForm>

      </DashCardTop>
      <DashCardBottom>
        <span>O gasto será de: R${result}</span>
      </DashCardBottom>
    </DashCardContainer>
  );
}