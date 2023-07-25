import { motion } from 'framer-motion';

import { styles } from '../styles';


const Base = () => {
  return (
    <section className="relative w-full h-screen
    mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/gerar2d'>
        <div className="p-6 bg-black opacity-0 animate-pulse-slow hover:animate-none
        hover:opacity-100 hover:bg-none top-20 right-10  my-1 min-w-[140px]
          z-10 rounded-xl cursor-pointer">
        <div className="flex flex-col justify-center 
        items-center mt-5">
        </div>
        <div>
          <h1 className={`${styles.BaseHeadText}
          text-white`}>Hi, I'm <span className="text-secondary">Gerard
          </span> </h1>
          <p className={`${styles.BaseSubText} mt-2
           text-white-100`}>
            I'm a Software Engineer with a focus on <br/>Frontend Development <br />
            I develop web applications,<br/> user interfaces and games.
           </p>
        </div>
        </div>
        </a>
      </div>
    </section>
  )
}

export default Base