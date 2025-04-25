import { createGlobalStyle } from "styled-components"
import SatoshiRegularWoff2 from '/fonts/Satoshi-Regular.woff2'
import SatoshiRegularWoff from '/fonts/Satoshi-Regular.woff'
import SatoshiRegularTtf from '/fonts/Satoshi-Regular.ttf'



const GlobalStyles = createGlobalStyle `

    * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    }

    @font-face {
        font-family: 'Satoshi-Regular';
        src: url(${SatoshiRegularWoff2}) format('woff2'),
             url(${SatoshiRegularWoff}) format('woff'),
             url(${SatoshiRegularTtf}) format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
      }

    h1 {
    ${props => props.theme.typography.h1}
  }
    h2 {
    ${props => props.theme.typography.h2}
  }
    h3 {
    ${props => props.theme.typography.h3}
  }
    p {
    ${props => props.theme.typography.p}
  }
    li {
    ${props => props.theme.typography.li}
  }
    ul {
    ${props => props.theme.typography.ul}
    }
`

export default GlobalStyles