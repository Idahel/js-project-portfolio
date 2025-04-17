const ProjectCard = ({title,description}) => {
  return (
    <article className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    </article>
  )
  }
  
  export default ProjectCard