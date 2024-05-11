import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import ProjectDesc from './components/projects/ProjectDesc';
import MainComp from './components/MainComp';

function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainComp/>}></Route>
        <Route exact path='/description' element={<ProjectDesc/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
    
  );
}

export default App;
