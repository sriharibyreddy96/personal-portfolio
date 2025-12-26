import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import HireMe from './Pages/HireMe';
import HompPage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import ProjectsPage from './components/Projects/ProjectsPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<HompPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<ProjectPage />} />
        <Route path="/project-details/:id" element={<ProjectsPage />} />
        <Route exact path='/hire-me' element={<HireMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
