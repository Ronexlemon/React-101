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
      <div className=" grid grid-cols-2 grid-4 grid bg-black h-1/4 w-1/2">
      <div>
 <img className=" rounded-full" src={people[0]}/>
 
      </div>
      <div className=" text-white">
        <h1>
          Hi, I'm Ronex 
        </h1>

 
 
      </div>
     

      </div>
      
    )
  }
  export default Example;