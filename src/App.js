
import './App.css';


import About from './components/about';
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Profile from "./components/profile";


function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Profile/>}/>
      <Route path='/' element={<Profile/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='About' element={<About/>}/>
        
      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
