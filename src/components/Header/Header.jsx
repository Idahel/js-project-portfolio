import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const HeaderSection = styled.section `
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: row;
    gap: 64px;

    ${css`
    @media ${media.tablet} {
      flex-direction: column;
      gap: 32px;
    }

    @media ${media.mobile} {
      flex-direction: column;
      gap: 16px;
    }
  `}
`
export const NameAndTitle = styled.div`
    margin-top: 81px;
    margin-left: 128px;
    margin-bottom: 64px;

    .my-name{
        margin-bottom: 16px;
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
    }
  `}
    `
export const IntroAndImage = styled.div`
    margin-top: 81px;
    margin-right: 128px;

    img {
        width: 374px;
        height: 333px;
        object-fit: cover;
    }

    p {
        margin-top: 16px;
        margin-bottom: 64px;
    }

    ${css`
    @media ${media.tablet} {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 0;
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 64px;
    gap: 10px;
    }

    @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    margin: 24px 16px;

    img {
        align-self: flex-end;
    }
    }
  `}
`

const Header = () => {
    return (
        <HeaderSection>
            <NameAndTitle>
            <p className="my-name">Ida Hellgren</p>
            <h1>web dev + project management</h1>
            </NameAndTitle>
            <IntroAndImage>
            <img src="/images/ida.webp" alt="" />
            <p>A web developer with a background in communications. I’m good at figure out what people need and make things happen. Now, I'm excited to use my growing JavaScript skills to build engaging and user-friendly digital products that just work well for people.</p>
            </IntroAndImage>
        </HeaderSection>
    )
}

export default Header