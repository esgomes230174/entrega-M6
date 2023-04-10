import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--color-grey10);
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  position: fixed;
  border-bottom: 2px solid var(--color-grey6);
  z-index: 3;

  figure {
    margin-top: 1rem;
    cursor: pointer;
  }

  .navbar-teste {
    width: 60%;
    height: 100%;
    display: flex;

    align-items: center;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivNavBarUser = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0rem 1rem;

  span {
    color: var(--color-grey2);
    cursor: pointer;
    font-weight: 600;

    :hover {
      color: var(--color-brand1);
    }
  }
`;

export const DivNavBar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-right: 2px solid var(--color-grey6);

  a {
    text-decoration: none;
    color: var(--color-grey2);

    :hover {
      color: var(--color-grey2);
    }
  }
`;
