import React from "react";

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
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-black hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
            </div>
            </div>
            
            
        </div>
    )
}

export default WaitTimes;