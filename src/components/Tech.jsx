import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from '../hoc';



const Tech = () => {
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img src={technology.icon} className=" bg-tertiary size-[1px] rounded-full p-5 hover:bg-bglow"/>
          <h1 className="text-center text-xs">{technology.name}</h1>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "");