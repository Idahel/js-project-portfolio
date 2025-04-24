import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const ArticleSection = styled.section`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textPrimary};
`

export const ArticleContainer = styled.div`
  padding: 64px 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  ${css`
    @media ${media.tablet} {
      padding: 64px 24px;
    }

    @media ${media.mobile} {
      padding: 64px 16px;
    }
  `}
`
export const ArticleImage = styled.img`
  max-width: 450px;
  height: auto;
  object-fit: contain;
`

export const ArticleCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 64px;
    justify-content: space-evenly;
  
    ${css`
    @media ${media.tablet} {
      gap: 32px;
    }
    @media ${media.mobile} {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const ArticleContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    max-width: 580px;

    ${css`
    @media ${media.mobile} {
      max-width: 100%;
    }
  `}
`

export const ArticleDate = styled.p`
  border: solid 1px black;
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
`


const Articles = () => {
    return (
        <ArticleSection>
        <ArticleContainer>
        <h2>My Words</h2>
        <ArticleCard>
        <ArticleImage src="/images/my-words.png" alt="" />
        <ArticleContentContainer>
        <ArticleDate>24 April 2025</ArticleDate>
        <h3>JavaScript bootcamp - Why?</h3>
        <p>I’ve worked as a project manager for the past four years, and the reason I started this journey into tech is because I was involved in many projects in web development and AI. I have a strong desire to understand the client – on the one hand – but on the other hand – I want to understand the implementers/developers. So when I was working a lot with film, I learned how to edit in Premiere Pro and I worked closely with the film team to try to understand how they work, just to make it easier for them, for me, and for my clients.
While leading these projects in web development and AI, a strong feeling grew within me – I wanted to understand more. Being able to speak the same language as the developers and understand the logic behind the scenes felt like a key to leading projects even better and building even stronger relationships.
Having the chance to learn the basics of programming, build my own projects, and understand the logic that drives the digital world we live in – that's a challenge I'm really looking forward to taking on. I believe that this journey will not only make me a better project manager but also open up completely new doors and opportunities within tech.</p>
        </ArticleContentContainer>
        </ArticleCard>
        </ArticleContainer>
        </ArticleSection>
    )
}

export default Articles