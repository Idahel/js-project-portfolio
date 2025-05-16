import { styled, css } from "styled-components"
import { media } from "../breakpoints.js"
import GithubIcon from "/icons/Ic-Github.svg"
import LinkedInIcon from "/icons/linked-in.svg"

export const FooterSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textSecondary};
`

export const FooterDiv = styled.div`
  padding: 64px 128px;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: 100%;

  ${css`
    @media ${media.tablet} {
      padding: 64px 24px;
    }

    @media ${media.mobile} {
      padding: 64px 16px;
    }
    
    @media ${media.maxWidth} {
        margin-left: auto;
        margin-right: auto;
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
`
export const IconLink = styled.a`
    transition: transform 0.3s ease-in-out;

    img {
    height: 21px;
    width: 21px;
    &:hover {
    height: 31px;
    width: 31px;
  }
  }

`

const Footer = () => {
    const GithubUrl = "https://github.com/Idahel"
    const LinkedinUrl = "https://www.linkedin.com/in/ida-hellgren-67866912b/"
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
        <IconLink href={GithubUrl} target="_blank" rel="noopener noreferrer">
        <img src={GithubIcon} alt="Github icon" />
        </IconLink>
        <IconLink href={LinkedinUrl} target="_blank" rel="noopener noreferrer">
        <img src={LinkedInIcon} alt="LinkedIn icon" />
        </IconLink>
        </FooterIcons>
        </FooterDiv>
        </FooterSection>
    )
}

export default Footer