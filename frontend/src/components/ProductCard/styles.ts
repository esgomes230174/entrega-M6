import styled from "styled-components";

export const ProductContainer = styled.section`
  width: 20rem;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 100%;
    background-color: var(--color-grey7);
    border: 2px solid var(--color-grey7);
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      transform: scale(1);
      position: absolute;

      transition: 0.4s;

      &:hover {
        transform: scale(1.2);
        cursor: pointer;
      }
    }

    label {
      top: 5px;
      left: 5px;
      position: absolute;
      padding: 0 0.5rem;

      font-family: "Inter";
      font-style: normal;
      font-size: 14px;
      text-align: center;

      color: #ffffff;
      background: ${(props) => props.color};
    }

    :hover {
      border: 2px solid var(--color-brand1);
    }
  }

  .product-title {
    color: var(--color-grey1);
  }

  .product-description {
    width: 95%;
    height: 5rem;
    overflow: auto;

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: justify;
      color: var(--color-grey2);
      word-break: break-all;
    }

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const ProductOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  .owner-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 150px;
    color: var(--color-whiteFixed);
  }

  .owner-name {
    color: var(--color-grey2);
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .product-details {
    display: flex;
    gap: 10px;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.25rem 0.5rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      border-radius: 5px;
      background-color: var(--color-brand4);
      color: var(--color-brand1);
    }
  }

  .product-price {
    font-family: "Lexend", sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey1);
  }
`;
