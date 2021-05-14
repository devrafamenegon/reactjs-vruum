import { useState } from 'react'
import { DashCardContainer, DashCardTop, DashCardImage, DashCardForm, DashCardFormButtons, DashCardBottom } from '../styles/components/Card';

export function CardConsumption() {

  const [result, setResult] = useState(null);
  const [litros, setLitros] = useState(null);
  const [kmPerc, setKmPerc] = useState(null);

  function consumptionResult() {
    if(litros != null || kmPerc != null) {
      return setResult((Number(kmPerc) / Number(litros)).toFixed(2))
    }
  }

  function formClear() {
    setResult("Preencha os campos para realizar o cálculo");
    setLitros(null);
    setKmPerc(null);
  }

  return (
    <DashCardContainer>
      <DashCardTop>

        <DashCardImage>
          <img src="/dashboard/bmw.svg" />
        </DashCardImage>

        <DashCardForm>
          <h2>MEDIA DE CONSUMO</h2>

          <form>
            <h5>Quantidades de litros:</h5>
            <input type="text" id="litros" onChange={(event) => setLitros(event.target.value)} />

            <h5>Quilômetros percorridos:</h5>
            <input type="text" onChange={(event) => setKmPerc(event.target.value)} />

            <DashCardFormButtons buttonColor="var(--red)">
              <button id="btn-submit" type="button" onClick={consumptionResult}>Calcular</button>
              <button id="btn-reset" type="reset" onClick={formClear}>Limpar</button>
            </DashCardFormButtons>
          </form>

        </DashCardForm>

      </DashCardTop>
      <DashCardBottom>
        <span>{result ? `Seu veículo tem uma autonomia de: ${result} Km/L`  : "Preencha os campos para realizar o cálculo"}</span>
      </DashCardBottom>
    </DashCardContainer>
  );
}