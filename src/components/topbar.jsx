import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar =()=>{
    const navigate = useNavigate();
    return(
        <div className="grid grid-cols-4  h-10 w-screen bg-black-400">
            
            <button className="text-white hover:text-green-300"  onClick={() => navigate('/Home')} >
                Home
            </button>
            <button className="text-white hover:text-yellow-300 " onClick={() => navigate('/About')}>
                About 
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