import React from "react";
import TopBar from "./topbar";
import prof from "../asset/profile.png"

const About =()=>{
    return(
        <div className="w-full bg-black  h-full   bg-scroll">
            <TopBar/>
            <div className="grid place-items-center h-screen">
                <div className="">
                    <div className=" w-60 h-40 rounded-full">
                        <img className="rounded-3xl" src={prof} alt="image"/>
                        
                    </div>
                    <div  className="text-white mt-10">
                        <h1 className="inline-flex">
                            Hello i'm 
                        </h1>
                        <h1 className="text-blue-400 ml-1">Ronex Ondimu </h1>
                        <h4>
                        , skilled and experienced in blockchain development and frontend development<br/>
                         with a strong background in creating innovative solutions using these technologies.<br/>
                          I have a deep understanding of the principles of blockchain and i'm able to apply this<br/>
                           knowledge to develop secure, decentralized applications that can be used in a variety of settings.
                            
                            
 
                        </h4>

                    </div>
                    
                </div>


            </div>

        </div>

    )
}
export default About;