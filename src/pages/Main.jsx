import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Resume from '../components/Resume/Resume';
import NavBar from '../components/NavBar/NavBar';

const Main = (props) => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Home />
      </div>
      <div >
        <About />
      </div>
      <div>
        <Resume />
      </div>
      <div>
        <Projects projects={props.projects}/>
      </div>
      <div>
        <Contact/>
      </div>
    </>
  )
}

export default Main