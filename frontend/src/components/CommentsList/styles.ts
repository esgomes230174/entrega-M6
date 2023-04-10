import styled from "styled-components";

export const CommentsListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 33px;

  width: 100%;

  .comments {
    padding: 36px 44px;
    background: var(--color-grey10);
    border-radius: 5px;
  }

  .comment-title {
    padding-bottom: 24px;
  }

  .comments-div {
    display: flex;
    flex-direction: column;
    gap: 44px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 18px;
  }
`;

export const RegisterCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 36px 35px 49px 39px;
  border-radius: 5px;
  background: var(--color-grey10);

  .userInfo-div {
    display: flex;
    align-items: center;
  }

  .name_abbreviate {
    width: 32px;
    height: 32px;
    border-radius: 150px;
    background: var(--color-pink1);

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    font-weight: 500;
    font-size: 14px;
    color: var(--color-whiteFixed);
  }

  .username {
    font-weight: 500;
    font-size: 14px;
    color: var(--color-grey1);
  }

  .comment-form {
    position: relative;
  }

  .comment {
    border-radius: 4px;
    width: 100%;
    max-width: 630px;
    height: 128px;
    padding: 33px 28px;
    border: 1.5px solid var(--color-grey7);

    font-weight: 400;
    font-size: 16px;
    color: #868e96;
  }

  .comment-button {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 15px;
    right: 11px;
    width: 108px;
    height: 38px;
    border-radius: 4px;
  }

  .comment-sugestions {
    display: flex;
    gap: 8px;
  }

  .sugestion-btn {
    background: var(--color-grey7);
    border-radius: 24px;
    height: 24px;
    border: none;
    padding: 0px 12px;
    gap: 10px;

    font-weight: 500;
    font-size: 12px;
    color: var(--color-grey3);

    cursor: pointer;

    &:hover {
      color: black;
    }
  }

  @media screen and (max-width: 700px) {
    .comment-button {
      position: inherit;
      margin-top: 24px;
      margin-left: 10px;
    }

    .sugestion-btn {
      height: 32px;
    }
  }

  @media screen and (max-width: 425px) {
    .comment-sugestions {
      flex-wrap: wrap;
      width: 200px;
    }
  }
`;
