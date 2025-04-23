import { Button } from "../Button.jsx"
import styled from "styled-components"
import { css } from "styled-components"
import { media } from "../breakpoints.js"

export const ProjectCardWrapper = styled.article `
  display: flex;
  flex-direction: row;
  width: 1184px;
  height: 479px;
  padding-top: 128px;

  .content-wrapper{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  img {
    width: 100%;
  }
`


const ProjectCard = ({title, description, image}) => {
  return (

    <ProjectCardWrapper>
    <div className="image-wrapper">
    <img src={image} alt={title} />
    </div>
    <div className="content-wrapper">
    <h3>{title}</h3>
    <p>{description}</p>
    <Button/>
    </div>
    </ProjectCardWrapper>
  )
  }
  
  export default ProjectCard