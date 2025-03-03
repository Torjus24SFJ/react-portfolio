import style from "./Navbar.module.css";
import { FaGithub } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <div className="relative">
        <nav className={`${style.layout_container} w-12 bg-[#101013] fixed`}>
          <ul className="flex flex-row justify-center mt-80 transform rotate-90 gap-20 cursor-pointer font-inter">
            <li className="text-white transform rotate-270">
              <a target="_blank" href="https://github.com/Torjus24SFJ?tab=repositories"><FaGithub size={24} className="hover:text-[#c9c9c9]"/></a>
            </li>
            <li className="text-white hover:opacity-75"><a href="#about">About</a></li>
            <li className="text-white hover:opacity-75"><a href="#projects">Projects</a></li>
            <li className="text-white hover:opacity-75"><a href="#experience">Experience</a></li>
            <li className="text-white hover:opacity-75"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
