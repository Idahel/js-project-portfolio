import ProjectCard from "./ProjectCard"
import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const ProjectSectionWrapper = styled.section `
background-color: ${props => props.theme.colors.primary};
`
export const ProjectSectionDiv = styled.div `
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
    align-items: center;
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