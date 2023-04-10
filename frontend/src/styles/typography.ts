import styled, { css } from "styled-components";
import { BaseTitle } from "../components/BaseTitle";
import { IThemeTitleProps } from "../interfaces/global";

export const ThemeTitle = styled(BaseTitle)<IThemeTitleProps>`
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=IBM+Plex+Sans:wght@200;400&family=Inter:wght@300;400;500;700&family=Lexend:wght@500;600&family=Mochiy+Pop+One&family=Montserrat:wght@400;700&family=Nunito:wght@700&family=Oswald&family=Poppins:ital,wght@0,200;0,500;1,300&family=Righteous&family=Roboto+Slab&family=Roboto:wght@100;400&family=Sarala&family=Source+Sans+Pro&display=swap");

  font-family: "Lexend", sans-serif;

  ${(props) => {
    switch (props.titleSize) {
      case "Heading-1-700":
        return css`
          font-weight: 700;
          font-size: 44px;
        `;
      case "Heading-2-600":
        return css`
          font-weight: 600;
          font-size: 36px;
        `;
      case "Heading-3-600":
        return css`
          font-weight: 600;
          font-size: 32px;
        `;
      case "Heading-3-500":
        return css`
          font-weight: 500;
          font-size: 32px;
        `;
      case "Heading-4-600":
        return css`
          font-weight: 600;
          font-size: 28px;
        `;
      case "Heading-4-500":
        return css`
          font-weight: 500;
          font-size: 28px;
        `;
      case "Heading-5-600":
        return css`
          font-weight: 600;
          font-size: 24px;
        `;
      case "Heading-5-500":
        return css`
          font-weight: 500;
          font-size: 24px;
        `;

      case "Heading-6-600":
        return css`
          font-weight: 600;
          font-size: 20px;
        `;
      case "Heading-6-500":
        return css`
          font-weight: 500;
          font-size: 20px;
        `;
      case "Heading-7-600":
        return css`
          font-weight: 600;
          font-size: 16px;
        `;
      case "Heading-7-500":
        return css`
          font-weight: 500;
          font-size: 16px;
        `;

      default:
        return false;
    }
  }}
`;
