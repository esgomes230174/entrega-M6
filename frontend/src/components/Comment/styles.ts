import styled from "styled-components";

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;

  .comment {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .comment-info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .name_abbreviate {
    width: 32px;
    height: 32px;
    background: var(--color-pink1);
    border-radius: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    font-weight: 500;
    font-size: 14px;
    color: var(--color-whiteFixed);
  }

  .name {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-right: 8px;
    color: var(--color-grey1);
  }

  .dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--color-grey4);
    margin-right: 13px;
  }

  .date {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-grey3);
  }

  .comment-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-grey2);
  }

  .edit-comment {
    position: relative;
    textarea {
      border-radius: 4px;
      width: 100%;
      max-width: 630px;
      padding: 33px 28px;
      border: 1.5px solid var(--color-grey7);

      font-weight: 400;
      font-size: 16px;
      color: #868e96;
    }
  }

  .save-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 60px;
    height: 30px;
    border-radius: 4px;

    position: absolute;
    right: 86px;
  }

  .cancel-btn {
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
  }
`;

export const CommentSettings = styled.div`
  display: flex;
  gap: 10px;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    :hover {
      color: var(--color-grey3);
    }
  }
`;
