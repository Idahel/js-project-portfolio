import { Button } from "../Button.jsx"
import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"
import GithubIcon from '/icons/Ic-Github.svg'
import WebIcon from '/icons/Ic-Web.svg'

export const ProjectCardWrapper = styled.article `
  display: flex;
  flex-direction: row;
  gap: 64px;
  width: 100%;
  justify-content: space-between;

  ${css`
    @media ${media.tablet} {
    display: flex;
    flex-direction: column;
    gap: 64px;
    }

    @media ${media.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    }
  `}
`

export const ProjectImageWrapper = styled.div `
  max-width: 540px;
  ${css`
    @media ${media.tablet} {
    max-width: 100%;
    }

    @media ${media.mobile} {
    max-width: 100%;
    }
  `}
`

export const ProjectImage = styled.img`
  max-width: 100%;
`

export const ProjectContentWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const ButtonContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ProjectTagsList = styled.ul `
  list-style: none;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`
export const TagItem = styled.li `
  border: solid 1px black;
  padding: 2px 8px;
  border-radius: 4px;
`

const ProjectCard = ({title, description, image, netlify, github, tags}) => {
  return (

    <ProjectCardWrapper>
    <ProjectImageWrapper>
    <ProjectImage src={image} alt={title} />
    </ProjectImageWrapper>
    <ProjectContentWrapper>
    {tags && tags.length > 0 && (
          <ProjectTagsList>
            {tags.map((tag, index) => (
              <TagItem key={index}>{tag}</TagItem>
            ))}
          </ProjectTagsList>
        )}
    <h3>{title}</h3>
    <p>{description}</p>
    <ButtonContainer>
      <Button
        primaryBtn
        iconSrc={GithubIcon}
        altText="Github repository"
        buttonText="Github"
        link={github}
      />
      <Button
        primaryBtn
        iconSrc={WebIcon}
        altText="Live demo"
        buttonText="Live Demo"
        link={netlify}
      />
    </ButtonContainer>
    </ProjectContentWrapper>
    </ProjectCardWrapper>
  )
  }
  
  export default ProjectCard