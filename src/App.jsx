import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import { projects } from './data/projects'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main projects={projects}/>}/>
      </Routes>
    </>
  )
}

export default App;
