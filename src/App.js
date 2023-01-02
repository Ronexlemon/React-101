
import './App.css';

import TopBar from './components/topbar';
import About from './components/about';


function App() {
  return ( 
    <div className="w-full bg-black  h-full   bg-scroll padding-80  ">
      <TopBar/>
      <div className=' grid  h-screen  place-items-center'>
      
     {/* <Profile head={"ronex"}/>
      */}
     <About/>
      </div>
      
      
      
      
    </div>
  );
}

export default App;
