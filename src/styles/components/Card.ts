import styled from "styled-components";

interface DashCardFormButtonsProps {
  buttonColor: string;
}

const DashCardContainer = styled.div`
  max-width: 65vw;

  justify-content: center;
  align-items: center;

  margin: 80px auto;
  padding: 50px;

  color: var(--white);
  background: var(--dark-gray);

  @media (max-width: 980px) {
    max-width: 80vw;
  }

  @media (max-width: 800px) {
    max-width: 90vw;
    padding: 10px;
  }
`;

const DashCardTop = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;

  h2 {
    margin-bottom: 20px;
  }

  @media (max-width: 1430px) {
    flex-direction: column;
  }
`;

const DashCardImage = styled.div`
  flex: 50%;
  padding: 2vw;
  text-align: center; 

  img {
    max-height: 250px;
  }
`;

const DashCardForm = styled.div`
  flex: 50%;
  padding: 30px;

  h5 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 30px;

    padding-left: 10px;
    margin-bottom: 30px;

    border: 0;

    color: var(--white);
    background: var(--background);
  }
`;

const DashCardFormButtons = styled.div<DashCardFormButtonsProps>`
  display: flex;

  button {
    height: 30px;
    border: 0;
    transition: 0.5s;
  }

  & > :first-child {
    flex: 60%;

    color: var(--white);
    background: ${(props: DashCardFormButtonsProps) => props.buttonColor};

    :hover {
      flex: 100%;
    }
  }

  & > :last-child {
    flex: 40%;

    color: var(--white);
    background: var(--light-gray);

    :hover {
      flex: 100%;
    }
  }

  @media (max-width: 320px) {
    input {
      margin-bottom: 20px;
    }
  }
`;

const DashCardBottom = styled.div`
  height: 60px;
  width: 90%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--background);

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    span {
      font-size: 1.2rem;
    }
  }
`;

export { DashCardContainer, DashCardTop, DashCardImage, DashCardForm, DashCardFormButtons, DashCardBottom }
