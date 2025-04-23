import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const TechSection = styled.section `
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textSecondary};
    display: flex;
    flex-direction: column;
    `
export const TechDiv = styled.div `
    margin: 64px 128px;

    ${css`
    @media ${media.tablet} {
    margin: 64px 24px;
    }

    @media ${media.mobile} {
    margin: 64px 16px;
    }
  `}
`

const Tech = () => {
    return (
        <TechSection>
            <TechDiv>
            <h2>Tech</h2>
            <p>HTML5, CSS, JavaScript(ES6), TypeScript, React, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.</p>
            </TechDiv>
        </TechSection>
    )
}

export default Tech