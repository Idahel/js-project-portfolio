import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const FooterSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textSecondary};
`

export const FooterDiv = styled.div`
  padding: 64px 128px;
  display: flex;
  flex-direction: column;

  ${css`
    @media ${media.tablet} {
      padding: 64px 24px;
    }

    @media ${media.mobile} {
      padding: 64px 16px;
    }
  `}
`

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterHeading = styled.h2`
    margin-bottom: 32px;
      ${css`
    @media ${media.mobile} {
      text-align: center;
    }
  `}
`

export const FooterIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
    margin-top: 64px;

    img{
        height: 21px;
        width: 21px;
    }    
`



const Footer = () => {
    return (
        <FooterSection>
        <FooterDiv>
        <FooterContent>
        <FooterHeading>Let's Talk</FooterHeading>
        <p>Ida Hellgren</p>
        <p>+46(0)702 28 27 37</p>
        <p>idakatrinhellgren@gmail.com</p>
        </FooterContent>
        <FooterIcons>
            <img src="./icons/Ic-Github.svg" alt="Github icon" />
            <img src="./icons/linked-in.svg" alt="LinkedIn icon" />
        </FooterIcons>
        </FooterDiv>
        </FooterSection>
    )
}

export default Footer