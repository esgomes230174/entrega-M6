import styled from "styled-components";

export const ContainerF = styled.footer`
  width: 100%;

  div {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-grey0);
    align-items: center;
    padding: 0 3rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: var(--color-grey1);
    color: white;
    padding-top: 10px;
    text-decoration: none;

    :hover {
      color: white;
    }
  }

  @media screen and (max-width: 425px) {
    div {
      gap: 5px;
    }
  }
`;
