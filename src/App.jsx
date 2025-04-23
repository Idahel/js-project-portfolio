import GlobalStyles from "./components/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import { theme } from './components/theme'

import projects from "./data/projects.json"
import skills from "./data/skills.json"


import Header from "./components/Header/Header"
import Tech from "./components/Tech/Tech"
import ProjectSection from "./components/Projects/ProjectSection"
import Skills from "./components/Skills/Skills"
import Articles from "./components/Articles/Articles"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Tech />
    <ProjectSection 
    projects={projects.projects}/>
    <Skills
    skills={skills.skills}/>
    <Articles />
    <Footer />
    </ThemeProvider>
  )
}

export default App