import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 1rem 4rem;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-family: oxygen;

  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  .content {
    width: 80rem;
    h1 {
      padding: 1rem 0 2rem 0;
      font-size: 3rem;
      font-weight: 600;
    }

    h2 {
      padding: 1.5rem 0;
      font-size: 2.4rem;
      font-weight: 600;
    }

    p {
      padding: 1rem 0;
    }

    ul {
      padding: 1rem 2rem;
    }

    a {
      color: blue;
    }
  }
`;
