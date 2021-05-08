import { useState } from 'react'
import { DashCardContainer, DashCardTop, DashCardImage, DashCardForm, DashCardFormButtons, DashCardBottom } from '../styles/components/Card';

export function CardFuel() {

  const [resultFuel, setResultFuel] = useState ("")
  const [result, setResult] = useState(null);
  const [etanol, setEtanol] = useState(null);
  const [gasolina, setGasolina] = useState(null);

  function fuelResult() {
    if(etanol != null || gasolina != null) {
      setResult((Number(etanol) / Number(gasolina)));
      Number(result) < 0.7 ? setResultFuel("Abasteça com Etanol") : setResultFuel("Abasteça com Gasolina")
    }
  }

  function formClear() {
    setResultFuel("Preencha os campos para realizar o cálculo");
    setResult(0);
    setEtanol(0);
    setGasolina(0);
  }

  return (
    <DashCardContainer>
      <DashCardTop>

        <DashCardImage>
          <img src="/dashboard/fuel.svg" />
        </DashCardImage>

        <DashCardForm>
          <h2>ETANOL OU GASOLINA?</h2>
          
          <form>
            <h5>Preço do etanol:</h5>
            <input type="text" id="litros" onChange={(event) => setEtanol(event.target.value)}/>

            <h5>Preço da gasolina:</h5>
            <input type="text" onChange={(event) => setGasolina(event.target.value)}/>

            <DashCardFormButtons buttonColor="var(--green)">
              <button id="btn-submit" type="button" onClick={fuelResult}>Calcular</button>
              <button id="btn-reset" type="reset" onClick={formClear}>Limpar</button>
            </DashCardFormButtons>
          </form>

        </DashCardForm>

      </DashCardTop>
      <DashCardBottom>
        <span>{resultFuel ? resultFuel  : "Preencha os campos para realizar o cálculo"}</span>
      </DashCardBottom>
    </DashCardContainer>
  );
}