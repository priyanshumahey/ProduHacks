import React from "react";
import bus from "../assets/Bus.svg"
import walking from "../assets/walking.svg"
import Base from "../assets/Base.png"

function WaitTimes(): JSX.Element {
    return(
      <>
        <div className="p-8">
            <h1 className="text-3xl font-bold" >Wait Times</h1>
            <h2 className="text-xl pt-3 pb-3">Recommended</h2>
            
            <div className="flex flex-col m-auto p-auto ">
            <div className="flex overflow-x-scroll pb-1 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/1.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            </div>
            <div className="pt-2"></div>
            <div className="text-3xl border-blue-300 w-64 text-center border-4 border-black rounded-2xl">1:30</div>
            <div className="flex flex-col m-auto p-auto">
              <div className="flex flex-nowrap">
                <div className="inline-block">
                  <img className="h-6 w-6 m-2 inline-block" src={walking} alt=""></img>
                  <div className="inline-block text-xl">15 min &nbsp; &nbsp;</div>
                  <img className="h-6 w-6 m-2 inline-block" src={bus} alt=""></img>
                  <div className="inline-block text-xl">10 min</div>
            </div>
            </div>
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/2.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
            <div className="pt-2"></div>
            <div className="text-3xl border-blue-300 w-64 text-center border-4 border-black rounded-2xl">3:51</div>
            <div className="flex flex-col m-auto p-auto">
              <div className="flex flex-nowrap">
                <div className="inline-block">
                  <img className="h-6 w-6 m-2 inline-block" src={walking} alt=""></img>
                  <div className="inline-block text-xl">30 min &nbsp; &nbsp;</div>
                  <img className="h-6 w-6 m-2 inline-block" src={bus} alt=""></img>
                  <div className="inline-block text-xl">15 min</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-no-repeat bg-cover bg-fill bg-[url('./assets/3.png')] hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          <div className="pt-2"></div>
          <div className="text-3xl border-blue-300 w-64 text-center border-4 border-black rounded-2xl">4:07</div>
              <div className="flex flex-col m-auto p-auto">
                <div className="flex flex-nowrap">
                  <div className="inline-block">
                    <img className="h-6 w-6 m-2 inline-block" src={walking} alt=""></img>
                    <div className="inline-block text-xl">59 min &nbsp; &nbsp;</div>
                    <img className="h-6 w-6 m-2 inline-block" src={bus} alt=""></img>
                    <div className="inline-block text-xl">30 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl pt-1 font-bold">Options</h2>
        <div className="overflow-auto h-48 hide-scroll-bar">
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">General Physician</div>
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">Walk-in Clinic</div>
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">Dentist</div>
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">ER</div>
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">Dermatologist</div>
          <div className="text-xl border-blue-300 border-4 border-black rounded-2xl mb-2 p-1">Pediatrician</div>
        </div>
        </div>
      </div>
      <img className="inline-block pt-8" src={Base} alt=""></img>
    </>
    )
}

export default WaitTimes;