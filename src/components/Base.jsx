import { motion } from 'framer-motion';

import { styles } from '../styles';
import { gor } from '../assets';


const Base = () => {
  return (
    <section className="relative w-full h-screen
    mx-auto">
      <div className={`${styles.paddingX} absolute mt-20 inset-0 top-[120px] 
      max-w-7x1 mx-auto flex flex-row items-start `}>
        <div className="p-6 bg-black opacity-30 animate-pulse-slow hover:animate-none
        hover:opacity-100 hover:bg-none my-1 min-w-[140px]
          z-10 rounded-xl cursor-pointer">
        <div className="flex flex-col justify-center 
        items-center mt-5">
        </div>
        <div>
          <h1 className={`${styles.BaseHeadText}
          text-white`}> I'm <span className="text-secondary">Gerard
          </span> </h1>
          <p className={`${styles.BaseSubText} mt-2
           text-white-100`}>
            A Software Engineer with a focus<br/> on 
            Frontend Development.
           </p>
        </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Base