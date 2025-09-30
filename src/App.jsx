import Experiences from "./components/homepage/experiences"
import Homepage from "./components/homepage/homepage"
import Projects from "./components/homepage/projects"
import Skills from "./components/homepage/skills"
const App = () => {

	return (
    <div style={{ margin: 0, padding: 0 }}>
      <Homepage/>
      <Experiences/>
      <Skills/>
      <Projects/>
    </div>
	)
}

export default App