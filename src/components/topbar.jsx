import React from "react";

const TopBar =()=>{
    return(
        <div className="grid grid-cols-4  h-10 w-screen bg-black-400">
            
            <button className="text-white hover:text-green-300">
                Home
            </button>
            <button className="text-white hover:text-yellow-300 ">
                About me
            </button>
            <button className="text-white  hover:text-blue-300">
                Js
            </button>


            <button className="text-white  hover:text-blue-300">
                Portfolio
            </button>
          
        </div>
    )
}
export default TopBar