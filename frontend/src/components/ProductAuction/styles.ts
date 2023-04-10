import styled from "styled-components";

export const Container = styled.div`
  color: var(--color-grey10);

  width: 710px;
  height: 380px;
  border-radius: 4px;
  position: relative;
  margin: 1rem;
  cursor: pointer;

  .div-details {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 325px;
    height: 490px;
    margin: 1rem;

    .divCard-auction {
      height: 435px;

      > img {
        width: 325px;
        height: 435px;
        object-fit: contain;
      }

      .div-description {
        padding: 20px 15px;
        height: 435px;
        justify-content: unset;

        .div-time {
          margin-bottom: 60px;
        }

        .div-details {
          flex-direction: column;
        }
      }
    }
  }
`;

export const AuctionCard = styled.div`
  height: 320px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--color-grey7);
  }
`;

export const DivDescription = styled.div`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  width: 100%;
  height: 325px;
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 30px;

  .div-time {
    background: var(--color-whiteFixed);
    border-radius: 32px;
    padding: 5px;
    width: 123px;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    span {
      font-weight: 500;
      font-size: 16px;
      color: var(--color-grey1);
    }
  }

  :hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 180px;

  h4 {
    font-weight: 600;
    font-size: 20px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: var(--color-grey5);
  }

  > .div-owner {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    .owner-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 150px;
      color: var(--color-whiteFixed);
      margin-bottom: 0px;
      background-color: purple;
    }

    .owner-name {
      color: var(--color-whiteFixed);
    }
  }

  .div-details {
    display: flex;

    div {
      width: 113px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > p {
        font-weight: 500;
        font-size: 14px;
        color: var(--color-brand1);

        background: var(--color-brand4);
        border-radius: 4px;
        padding: 4px 8px;
      }
    }
    span {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  background: var(--color-brand1);
  height: 70px;
  padding: 0px 36px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  > p {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 0px;
  }

  > .arrow {
    padding-left: 24rem;
  }

  button {
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    .arrow {
      padding-left: 2rem;
    }
  }
`;
