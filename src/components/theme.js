import { media } from "./breakpoints";
import { css } from 'styled-components';

export const theme = {
    colors: {
        primary: '#d5ff97',
        secondary: '#000000',
        textPrimary: '#000000',
        textSecondary: '#ffffff',
      },

      typography: {
      h1:`
        font-family: "Mynerve";
        font-weight: 400;
        font-style: normal;
        font-size: 100px;
        line-height: 120px;

        ${css`
            @media ${media.tablet} {
              font-size: 74px;
              line-height: 70px;
            }
          `}
  
          ${css`
            @media ${media.mobile} {
              font-size: 40px;
              line-height: 40px;
            }
          `}
        `,
  
        h2:`
          font-family: 'Satoshi-Regular';
          font-size: 80px;
  
          ${css`
            @media ${media.tablet} {
              font-size: 48px;
            }
          `}
  
          ${css`
            @media ${media.mobile} {
              font-size: 48px;
            }
          `}
        `,
  
        h3: `
        font-family: 'Satoshi-Regular';
        font-size: 30px;
  
        ${css`
          @media ${media.tablet} {
            font-size: 24px;
          }
        `}
  
        ${css`
          @media ${media.mobile} {
            font-size: 24px;
          }
        `}
        `,
  
        p: `
          font-family: "Fira Code", monospace;
          font-optical-sizing: auto;
          font-style: normal;
          font-size: 18px;
        ${css`
          @media ${media.tablet} {
            font-size: 16px;
          }
        `}
  
        ${css`
          @media ${media.mobile} {
            font-size: 16px;
          }
        `}
        `,

        ul: `
          font-family: "Fira Code", monospace;
          font-optical-sizing: auto;
          font-style: normal;
          font-size: 18px;
          
        ${css`
            @media ${media.tablet} {
                font-size: 16px;
        }
      `}

      ${css`
        @media ${media.mobile} {
          font-size: 16px;
        }
      `}
      `,
    }
}