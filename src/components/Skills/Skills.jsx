const Skills = ({skills}) => {
    return (
        <>
        <section className="skills-section">
        <h2>Skills</h2>
        {skills.map((skill) => {
            return (
                <div className="skill-block" key={skill.name}>
                <ul>
                <p>{skill.name}</p>
                <li>{skill.list}</li>
                </ul>
                </div>
            )
        })}
        </section>
        </>
    )
}

export default Skills