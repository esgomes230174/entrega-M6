import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: var(--color-grey1);

  label {
    font-weight: 500;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 48px;
    padding-left: 0.9rem;

    font-weight: 400;
    font-size: 16px;

    border: 1.5px solid var(--color-grey8);
    border-radius: 4px;

    &:hover {
      background: var(--color-grey8);
    }

    &:focus {
      outline: none;
      background: var(--color-grey9);
      border: 1.5px solid var(--color-brand2);
      border-radius: 4px;
    }

    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: var(--color-grey3);

      @media (max-width: 425px) {
        font-size: 12px;
      }
    }

    &:focus::placeholder {
      color: transparent;
    }

    @media (max-width: 425px) {
    }
  }
`;
