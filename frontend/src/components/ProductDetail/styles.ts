import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: 7rem;
  background: rgb(69, 41, 230);
  background: linear-gradient(
    180deg,
    rgba(69, 41, 230, 1) 15%,
    var(--color-grey8) 15%
  );

  @media screen and (min-width: 1024px) {
    background: linear-gradient(
      180deg,
      rgba(69, 41, 230, 1) 50%,
      var(--color-grey8) 30%
    );
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 95%;
    margin: 0 auto;
    gap: 8rem;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 700px;
  margin-left: 33px;

  @media screen and (max-width: 1024px) {
    margin-left: unset;
  }
`;

export const CoverImg = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  border-radius: 5px;
  background-color: var(--color-whiteFixed);

  > div {
    width: 100%;

    > img {
      width: 100%;
      height: 100%;
      max-height: 250px;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 350px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const ProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 350px;
  padding-bottom: 1rem;
  margin-top: 0.8rem;
  border-radius: 5px;
  background-color: var(--color-whiteFixed);

  @media screen and (min-width: 1024px) {
    height: 250px;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;

    > div {
      display: flex;
      gap: 1rem;

      span {
        padding: 8px;
        border-radius: 5px;
        font-size: 0.8rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        color: var(--color-brand1);
        background-color: var(--color-brand4);
      }
    }
  }

  > button {
    width: 100px;
    text-align: center;
    padding: 0.6rem;
    border-radius: 5px;
    margin-top: 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--color-whiteFixed);
    text-decoration: none;
    background-color: var(--color-brand1);
  }

  span {
    font-family: "Lexend", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-grey1);
  }

  > a {
    height: 48px;
    width: 100px;
    text-align: center;
    white-space: nowrap;
    padding: 0.6rem;
    border-radius: 5px;
    border: 1px solid #4529e6;

    cursor: pointer;
    transition: all 0.3s;

    margin-top: 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--color-whiteFixed);
    text-decoration: none;
    background-color: var(--color-brand1);

    &:hover {
      background-color: var(--color-whiteFixed);
    }

    p {
      height: 48px;
      margin-top: 2rem;
      padding: 0.6rem;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-family: "Lexend", sans-serif;
  font-weight: 600;
  color: var(--color-grey1);
  padding: 2rem;
`;

export const ProductDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  border-radius: 5px;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: var(--color-whiteFixed);

  > p {
    padding: 0 2rem;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--color-grey2);
    line-height: 2rem;
  }

  @media screen and (min-width: 1024px) {
    height: 250px;
  }
`;

export const Aside = styled.aside`
  width: 95%;
  max-width: 600px;
  margin-top: 2rem;
  background-color: transparent;

  > div {
    background-color: var(--color-whiteFixed);
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    max-width: 700px;
  }

  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`;

export const Photos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 2rem;

  > p {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--color-grey2);
    line-height: 2rem;
    margin-top: 1rem;
  }

  > div {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;

    figure {
      display: flex;
      align-items: center;
      width: 108px;
      height: 108px;
      background-color: var(--color-grey7);
      cursor: pointer;
    }
  }

  .no-photos {
    width: 150px;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  height: 450px;
  border-radius: 4px;
  padding: 2rem 1rem;
  margin: 2rem 0rem 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 36px;
    color: var(--color-whiteFixed);
    font-family: "Inter", sans-serif;
    font-weight: 600;
  }

  > span {
    font-size: 1.2rem;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: var(--color-grey1);
  }

  > p {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: var(--color-grey2);
    line-height: 2rem;
    padding: 10px;
  }
`;

export const DivBox1 = styled.div`
  display: flex;
  width: 95%;
  margin-left: 33px;

  .div-box2 {
    display: flex;
    flex-direction: column;
    width: 95%;
    max-width: 700px;
    margin-left: 33px;
  }

  @media screen and (min-width: 320px) {
    margin-left: unset;

    .div-box2 {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    .div-box2 {
      margin-left: 60px;
      width: 50.5%;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: 10px;
    width: unset;
  }

  @media screen and (min-width: 1269px) {
    .div-box2 {
      width: 690px;
    }
  }

  @media screen and (min-width: 1920px) {
    .div-box2 {
      margin-left: 250px;
      width: 700px;
    }
  }

  @media screen and (min-width: 2560px) {
    .div-box2 {
      width: 700px;
      margin-left: 570px;
    }
  }
`;
