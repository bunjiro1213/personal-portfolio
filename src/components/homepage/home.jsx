// Home represents the main sections of the landing page.
import { Homepage } from './homepage'
import Projects from './projects'
import Skills from './skills'

const Home = () => {

	return (
    <div style={{ margin: 0, padding: 0 }}>
      <Homepage/>
      <Skills/>
      <Projects/>
    </div>
	)
}

export default Home