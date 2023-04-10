import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-radius: 4px;
  padding: 44px 70px 50px 41px;

  position: absolute;
  left: 15%;
  top: 155px;

  gap: 24px;

  background: var(--color-grey10);

  .name_div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;
    border-radius: 50%;
  }

  .name_abbreviate {
    font-weight: 500;
    font-size: 36px;
    color: var(--color-whiteFixed);
  }

  .username_div {
    display: flex;
    gap: 9px;
  }

  .username {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 20px;
    color: var(--color-grey1);
  }

  .span_div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 32px;
    background: var(--color-brand4);
    border-radius: 4px;
  }

  .account {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-brand1);
  }

  .user_description {
    width: 100%;
  }

  button {
    width: 160px;
    height: 48px;
  }
`;
