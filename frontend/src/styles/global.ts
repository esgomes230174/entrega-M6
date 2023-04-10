import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-brand1: #4529E6;
  --color-brand2: #5126EA;
  --color-brand3: #B0A6F0;
  --color-brand4: #EDEAFD;

  --color-grey0: #0B0D0D;
  --color-grey1: #212529;
  --color-grey2: #495057;
  --color-grey3: #868E96;
  --color-grey4: #ADB5BD;
  --color-grey5: #CED4DA;
  --color-grey6: #DEE2E6;
  --color-grey7: #E9ECEF;
  --color-grey8: #F1F3F5;
  --color-grey9: #F8F9FA;
  --color-grey10: #FDFDFD;

  --color-whiteFixed: #FFFFFF;

  --color-alert1: #CD2B31;
  --color-alert2: #FDD8D8;
  --color-alert3: #FFE5E5;
  --color-sucess1: #18794E;
  --color-sucess2: #CCEBD7;
  --color-sucess3: #DDF3E4;
  
  --color-pink1: #E34D8C;
  --color-pink2: #C04277;
  --color-pink3: #7D2A4D;

  --color-purple1: #7000FF;
  --color-purple2: #6100FF;
  --color-purple3: #6200E3;
  --color-purple4: #5700E3;
  --color-purple5: #36007D;
  --color-purple6: #30007D;

  --color-green1: #349974;
  --color-green2: #2A7D5F;
  --color-green3: #153D2E;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    
    ul, ol {
        list-style: none;
    }
    
    img {
        max-width: 100%;
        max-height: 100%;
    } 

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        border: 2px solid var(--color-whiteFixed);
        background: var(--color-grey4);
    }
`;
