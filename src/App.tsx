import './App.css'
import AboutMe from './AboutMe.tsx'
import Blog from './Blog.tsx'
import Home from './Home.tsx'
import Projects from './Projects.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
