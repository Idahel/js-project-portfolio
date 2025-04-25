import styled, { css, keyframes } from "styled-components"
import { media } from "../breakpoints.js"

const shakeAnimation = keyframes`
  0% { transform: translateX(0) rotate(0deg); }
  10% { transform: translateX(-10px) rotate(-3deg); }
  20% { transform: translateX(10px) rotate(3deg); }
  30% { transform: translateX(-10px) rotate(-3deg); }
  40% { transform: translateX(10px) rotate(3deg); }
  50% { transform: translateX(-10px) rotate(-3deg); }
  100% { transform: translateX(10px) rotate(3deg); }
`

export const HeaderSection = styled.section `
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textPrimary};
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    max-width: 1600px;
    width: 100%;

    ${css`
    @media ${media.tablet} {
      flex-direction: column;
      gap: 24px;
    }

    @media ${media.mobile} {
        flex-direction: column;
        gap: 16px;
    }
    @media ${media.maxWidth} {
        margin-left: auto;
        margin-right: auto;
    }
  `}
`
export const NameAndTitle = styled.div`
    margin-top: 81px;
    margin-left: 128px;
    margin-bottom: 64px;

    .my-name{
        margin-bottom: 18px;
    }

    ${css`
    @media ${media.tablet} {
    margin-top: 64px;
    margin-left: 24px;
    margin-bottom: 24px;
    }

    @media ${media.mobile} {
    margin-top: 24px;
    margin-left: 16px;

    .my-name{
        text-align: center;
    }
    }
  `}
    `
export const IntroAndImage = styled.div`
    margin-top: 81px;
    margin-right: 128px;
    align-items: flex-end;
    align-content: flex-end;
    margin-bottom: 64px;

    img {
        max-width: 335px;
        max-height: 335px;
        object-fit: cover;
        transition: transform 0.8s ease-in-out;

    &:hover {
        animation: ${shakeAnimation} 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }
    }
    

    p {
        margin-top: 16px;
        max-width: 335px;
    }

    ${css`
    @media ${media.tablet} {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 0;
    margin-left: 24px;
    margin-right: 24px;
    gap: 10px;
    
    p {
        max-width: none;
        justify-content: flex-start;
        align-items: flex-end;
        align-content: flex-end;
        margin-bottom: 0;
    }

    }

    @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-right: 16px;

    img {
        align-self: flex-end;
        max-width: 220px;
        max-height: 220px;
        }
    }
  `}
`

const Header = () => {
    return (
        <HeaderSection>
            <HeaderWrapper>
            <NameAndTitle>
            <p className="my-name">Ida Hellgren</p>
            <h1>web dev<br />+<br />project management</h1>
            </NameAndTitle>
            <IntroAndImage>
            <img src="/images/ida.webp" alt="" />
            <p>A web developer with a background in communications. I’m good at figure out what people need and make things happen. Now, I'm excited to use my growing JavaScript skills to build engaging and user-friendly digital products that just work well for people.</p>
            </IntroAndImage>
            </HeaderWrapper>
        </HeaderSection>
    )
}

export default Header