import React from "react";
import bus from "../assets/Bus.svg"
import walking from "../assets/walking.svg"

function WaitTimes(): JSX.Element {
    return(
        <div className="p-8">
            <h1 className="text-3xl font-bold" >Wait Times</h1>
            <h2 className="text-xl pt-3 pb-3">Recommended</h2>
            
            <div className="flex flex-col m-auto p-auto">
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/1.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            </div>
            <div className="p-2"></div>
            <div className="text-3xl border-blue-300 w-64 text-center border-4 p-2 border-black rounded-2xl">1:30</div>
            <div className="flex flex-col m-auto p-auto">
              <img className="h-6 w-6 m-2 " src={walking} alt=""></img>
            <img className="h-6 w-6 m-2" src={bus} alt=""></img>
            </div>
          </div>
          <div className="inline-block px-3 ">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/2.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
          <div className="inline-block px-3">
            <div className="p-2"></div>
            <div className="text-3xl border-blue-300 w-64 text-center border-4 p-2 border-black rounded-2xl">2:31</div>
          </div></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/3.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
            <div className="p-2"></div>
            <div className="text-3xl border-blue-300 w-64 text-center border-4 p-2 border-black rounded-2xl">3:17</div>
          </div>
        </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default WaitTimes;