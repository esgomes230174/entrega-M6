import styled from "styled-components";

export const Container = styled.div`
  width: 84vw;
  border-radius: 20px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.7rem 0 1rem 1.5rem;

    button {
      color: var(--color-grey4);

      :hover {
        background-color: white;
        color: var(--color-grey0);
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 1rem 1.5rem 1.5rem 1.5rem;
    p {
      margin-bottom: 0.8rem;
    }
  }

  @media (min-width: 610px) {
    width: 520px;
  }
`;

export const Geral = styled.div`
  /* margin: 32px; */
`;
