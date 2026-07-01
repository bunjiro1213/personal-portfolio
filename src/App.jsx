import Experiences from "./components/homepage/experiences"
import Homepage from "./components/homepage/homepage"
import Projects from "./components/homepage/projects"
import Skills from "./components/homepage/skills"
import "./App.css"

const App = () => {

	return (
    <div className="appShell">
      <Homepage/>
      <Experiences/>
      <Skills/>
      <Projects/>
    </div>
	)
}

export default App
