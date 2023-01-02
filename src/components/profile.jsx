import coffee from "../asset/download.jpeg"
import world from "../asset/world.jpeg"
import email from "../asset/email.jpeg"
import logo from "../asset/logo.jpeg"
const people = [
       
     
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
]
  
  const  Example=(props)=> {
    return (
        

            



        
      // <ul className=" rounded-2xl m-10 bg-blue-200    divide-y divide-yellow-200 ">
        
      //   {people.map((person) => (
      //     <li key={person.email} className="py-4 flex">
      //       <img className=" scale-75 hover:scale-150 h-10 w-10 rounded-full " src={person.image} alt="" />
      //       <div className="ml-3">
      //         <p className=" hover:text-blue-500 text-sm font-medium text-gray-900">{person.name}</p>
      //         <p className="text-sm text-gray-500">{person.email}</p>
      //         <p className="text-sm text-gray-500">{props.head}</p>
      //       </div>
      //     </li>
      //   ))}
      // </ul>
      <div className=" grid grid-cols-2 gap-40  bg-[url('../public/asset/prof.jpg')] bg-no-repeat bg-cover h-2/4 w-auto">
      <div>
 <img className=" shadow-lg rounded max-w-full h-auto align-middle border-none" src={logo}/>
 
      </div>
      <div className="text-white  w-auto">
        <h1 className="text-white inline-flex">
          Hi, I'm  <h1 className="text-blue-400 ml-2">Ronex</h1> 
        </h1>
        <h1 className="hover:text-green-400">
           I'm a BlockChain Developer (web3)
           
        </h1>
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
      
    )
  }
  export default Example;