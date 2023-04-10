import styled from "styled-components";

export const ProductListDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  margin-top: 4rem;

  .no-announcements {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 20px;
    margin-top: 20px;
    text-align: center;

    h4 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
`;
