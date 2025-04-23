import ProjectCard from "./ProjectCard";
import styled from "styled-components";

export const ProjectSectionWrapper = styled.section `
margin: 0px 128px;
`


const ProjectSection = ({projects}) => {
    return (
        <ProjectSectionWrapper>
        <h2>Featured Projects</h2>
        {projects.map((project) => {
            return (
                <ProjectCard 
                key={project.name}
                title={project.name}
                description={project.description}
                image={project.image}
                />
            )
        })}
        </ProjectSectionWrapper>
    )
}

export default ProjectSection