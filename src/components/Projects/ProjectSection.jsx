import { styled, css } from "styled-components"
import { media } from "../breakpoints.js"
import ProjectCard from "./ProjectCard"

export const ProjectSectionWrapper = styled.section`
background-color: ${props => props.theme.colors.primary};
width: 100%;
`
export const ProjectSectionDiv = styled.div`
    padding: 64px 128px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 1600px;
    width: 100%;


    ${css`
    @media ${media.tablet} {
    padding: 64px 24px;
    }

    @media ${media.mobile} {
    padding: 64px 16px;
    align-items: center;
    }

    @media ${media.maxWidth} {
        margin-left: auto;
        
    }
  `}
`


const ProjectSection = ({projects}) => {
    return (
        <ProjectSectionWrapper>
            <ProjectSectionDiv>
        <h2>Featured Projects</h2>
        {projects.map((project, index) => {
            return (
                <ProjectCard 
                key={project.name}
                title={project.name}
                description={project.description}
                image={project.image}
                imagePhone={project.imagePhone}
                netlify={project.netlify}
                github={project.github}
                tags={project.tags}
                index={index}
                />
            )
        })}
        </ProjectSectionDiv>
        </ProjectSectionWrapper>
    )
}

export default ProjectSection