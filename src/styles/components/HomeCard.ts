import styled from "styled-components";

interface CardCoverProps {
  cardBackground: string;
}

const CardContainer = styled.div<CardCoverProps>`
  max-width: 350px;
  height: 100%;
  text-align: center;

  &:hover .cover {
    transform: translateY(0);
    background: ${(props: CardCoverProps) => props.cardBackground};

    img {
      opacity: 1;
    }

    h3 {
      opacity: 1;
    }
  }

  @media (max-width: 1280px) {
    max-width: 550px;
  }

  @media (max-width: 860px) {
    max-width: 750px;
  }

  @media (max-width: 768px) {
    .cover {
      transform: translateY(0);
      background: ${(props: CardCoverProps) => props.cardBackground};

      img {
        opacity: 1;
      }

      h3 {
        opacity: 1;
      }
    }
  }
`;

const CardCover = styled.div.attrs({ className: 'cover' })`
  height: 230px;
  background: var(--background);

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;

  transition: 0.5s;
  transform: translateY(115px);

  img {
    width: 60%;
    height: 150px;

    opacity: 0.2;
    transition: 0.5s;
  }

  h3 {
    color: var(--title);
    font-size: 1.5rem;

    opacity: 0.2;
    transition: 0.5s;
  }
`;

const CardBody = styled.div`
  height: 230px;
  background: var(--white);
  display: none;

  padding: 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  transition: 0.5s;
  transform: translateY(-115px);

  span {
    font-size: 1.2rem;
  }

  button {
    width: 100%;
    height: 40px;
    background: var(--white);

    margin-top: 40px;

    color: var(--dark-gray);
    font-weight: 800;

    border: 1px solid var(--dark-gray);

    transition: 0.5s;

    &:hover {
      background: var(--dark-gray);
      color: var(--white);
    }
  }

  ${CardContainer}:hover &  {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    transform: translateY(0px);

    span {
      font-size: 1.5rem;
    }
  }
`;

export { CardCover, CardBody, CardContainer }
