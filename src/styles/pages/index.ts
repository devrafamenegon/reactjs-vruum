import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  padding: 38px 32px;
  display: flex;
  flex-direction: column;
  
  main {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: minmax(auto-fit, minmax(100%, 100%));
    grid-gap: 80px;
  }

  @media (max-width: 1280px) {
    main {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
      grid-template-rows: minmax(2, minmax(100%, 100%));
    }
  }

  @media (max-width: 860px) {
    main {
      grid-template-columns: repeat(1, minmax(0px, 1fr));
      grid-template-rows: minmax(3, minmax(100%, 100%));
    }
  }
`;

export { HomeContainer }