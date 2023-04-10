import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 4rem;
  padding-bottom: 3rem;
  background: var(--color-grey8);

  .box {
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: center;

    width: 90vw;
    padding: 2.5rem;

    background: var(--color-grey10);
    border-radius: 4px;

    @media (min-width: 460px) {
      width: 411px;
    }
  }

  h2 {
    margin-bottom: 2rem;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-grey2);

    text-align: center;
    padding-top: 0.7rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 1440px) {
    height: 80vh;
    margin-bottom: 0.45rem;
  }
`;

export const Password = styled.div`
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-grey2);

    text-align: end;
    cursor: pointer;

    :hover {
      color: var(--color-grey0);
    }
  }
`;
