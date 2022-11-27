import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import ProjectDetails from './components/ProjectDetails/ProjectDetails'
import { projects } from './data/projects'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main projects={projects}/>}/>
        <Route path="projects/:projectDetails" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App;
