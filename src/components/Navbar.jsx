import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { ologo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex 
      item-center py-5 fixed top-0 z-20 h-20
       bg-black `}
    >
      <div className="w-full flex justify-between
      items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={ologo} alt="logo" className="
          h-7 object-contain" />
          {/* <p className="text-white text-[19px]
          font-bold cursor-pointer flex">
            Gerard&nbsp;
            <span className="sm:block hidden">Di 
            Mattia</span>
          </p> */}
        </Link>
        <ul className="list-none hidden sm:flex 
        flex-row gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-secondary"
                : "text-white"
              } hover:text-white text-[18px] pt-8 font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <img src={link.img}
              onClick={() => window.open (link.source_link, "_blank")}
              className="object-contain h-7 " />
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1
        justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />
          <div className={`${!toggle ? 'hidden'
          
          // bg-cyan-500 for mobile menu drop.
          :'flex' } p-6 bg-black absolute
          top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}>
             <ul className="list-none flex 
             justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                ? "text-secondary"
                : "text-white"
              }font-poppins font-extrabold 
              cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <img src={link.img}
              onClick={() => window.open (link.source_link, "_blank")}
              className="object-contain h-7" />
            </li>
          ))}
        </ul>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar