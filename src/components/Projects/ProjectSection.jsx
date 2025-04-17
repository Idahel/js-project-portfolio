import ProjectCard from "./ProjectCard";

const ProjectSection = ({projects}) => {
    return (
        <>
        <h2>Featured Projects</h2>
        {projects.map((project) => {
            return (
                <ProjectCard 
                key={project.name}
                title={project.name}
                description={project.description}
                />
            )
        })}
        </>
    )
}

export default ProjectSection