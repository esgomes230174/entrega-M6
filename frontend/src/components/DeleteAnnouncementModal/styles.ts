import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30%;

  .final-buttons {
    display: flex;
    width: 100%;
    gap: 20px;

    button:nth-child(1) {
      width: 40%;
    }

    button:nth-child(2) {
      width: 60%;
    }
  }
`;
