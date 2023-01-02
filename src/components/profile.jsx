import coffee from "../asset/download.jpeg"
import world from "../asset/world.jpeg"
import email from "../asset/email.jpeg"
import logo from "../asset/logo.jpeg"
import TopBar from "./topbar"
const people = [
       
     
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
]
  
  const  Example=(props)=> {
    return (
        

            


 <div className="w-full bg-black  h-full   bg-scroll padding-80  ">
      <TopBar/>
      <div className=' grid  h-screen  place-items-center'>
      
      <div className=" grid grid-cols-2 gap-40  bg-[url('../public/asset/prof.jpg')] bg-no-repeat bg-cover h-2/4 w-1/2">
      {/* <div>
 <img className=" shadow-lg rounded max-w-full h-auto align-middle border-none" src={logo}/>
 
      </div> */}
      <div className="text-white  w-auto">
        
        <div className="">
        <img   className="w-5 h-5 rounded-full" src={coffee} alt="image"/> <h6 className="font-size-xs">fueled By coffee</h6>
        </div>
        <div className="">
        <img   className="w-5 h-5 rounded-full" src={world} alt="image"/> <h6 className="font-size-xs">Based in kenya</h6>
        </div>
        <div className="">
        <img   className="w-5 h-5 rounded-full" src={email} alt="image"/> <h6 className="font-size-xs">ronexondimu@gmail.com</h6>
        </div>
        
        
       
        
       
        
        
        

 
 
      </div>
     

      </div>
     
      </div>
      
      
      
      
    </div>

      
      
    )
  }
  export default Example;