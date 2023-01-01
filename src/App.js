
import './App.css';
import Profile from './components/profile';
import TopBar from './components/topbar';


function App() {
  return ( 
    <div className="w-full bg-black  h-full  bg-scroll padding-80 ">
      <TopBar/>
      <div className=' grid  h-screen  place-items-center'>
      
     <Profile head={"ronex"}/>
     
     
      </div>
      
      
      
      
    </div>
  );
}

export default App;
