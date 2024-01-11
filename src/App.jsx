
import AnimatedCursor from 'react-animated-cursor'
import styles from './App.module.css'
import About from './Components/About/About'
import { Contact } from './Components/Contact/Contact'
import { ContactUs } from './Components/Contact/ContactUs'
import { Experience} from './Components/Experience/Experience'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import { Projects } from './Components/Projects/Project'
import Cursor from './Components/AnimatedCursor'
import NewProjects from './Components/Projects/ProjectCard2'





function App() {
 

  return (
    <div className={styles.App}>
    <Cursor/>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/> 
    
    </div>
    
  )
}

export default App

