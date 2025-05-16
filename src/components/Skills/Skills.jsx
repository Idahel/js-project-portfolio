import { css, styled } from "styled-components"
import { media } from "../breakpoints.js"

export const SkillsSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textSecondary};
`

export const SkillsContainer = styled.div`
  padding: 64px 128px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  max-width: 1600px;
  width: 100%;

  ${css`
    @media ${media.tablet} {
      padding: 64px 24px;
      align-items: center;
    }

    @media ${media.mobile} {
      padding: 64px 16px;
      align-items: flex-start;
    }

    @media ${media.maxWidth} {
        margin-left: auto;
        margin-right: auto;
    }
  `}
`

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  ${css`
    @media ${media.tablet} {
    flex-direction: column;
    text-align: center;
    }

    @media ${media.mobile} {
      align-items: flex-start;
      text-align: left;
    }
  `}
`

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SkillsListItem = styled.li`

`

export const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 177px;
  gap: 16px;

  &.last-column ${SkillsList} ${SkillsListItem} {
    font-family: 'Mynerve', sans-serif;
  }
`

export const SkillName = styled.p`
  border: solid 1px white;
  border-radius: 4px;
  padding: 2px 6px;
`

const Skills = ({ skills }) => {
  const lastIndex = skills.length - 1
  return (
    <SkillsSection>
      <SkillsContainer>
        <h2>Skills</h2>
        <SkillsDiv>
          {skills.map((skill, index) => (
            <SkillColumn
              key={skill.name}
              className={index === lastIndex ? 'last-column' : ''}
            >
              <SkillName>{skill.name}</SkillName>
              <SkillsList>
                {skill.list.map((item, i) => (
                  <SkillsListItem key={i}>{item}</SkillsListItem>
                ))}
              </SkillsList>
            </SkillColumn>
          ))}
        </SkillsDiv>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills