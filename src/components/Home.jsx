import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Bgsvg from "../assets/new/hero.svg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0d1224]">
      <img className="bgsvg z-0" src={Bgsvg} alt="" />

      {/* container */}
      <div className="max-w-[900px] relative mx-auto sm:px-8 px-4 flex flex-col justify-center h-full z-[1]">
        <p className="text-pink-600 font-semibold">Hi my name is</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#16f2b3]">
          Muhammed Adnaj
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-white">
          Full stack Developer.
        </h2>
        <p className="text-[#e5e7eb] sm:text-[1rem] text-[12px]  py-4 max-w-[700px]">
          Results-driven Full Stack Developer with 5 years of experience architecting, developing, and delivering scalable web applications, enterprise platforms, and customer-focused digital solutions. Specialized in building modern frontend ecosystems with React.js, Next.js, and JavaScript, complemented by robust backend development using Node.js, Python, Django, and RESTful APIs.

          Experienced in designing high-performance applications, developing secure and maintainable backend architectures, optimizing database solutions with MySQL and PostgreSQL, and deploying cloud-based systems using AWS and modern DevOps practices. Strong expertise in API integrations, CMS development, WordPress customization, performance optimization, and creating seamless user experiences across web platforms.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>

          {/* Social icons */}
          <div className="flex lg:hidden  mt-5 top-[35%] ">
            <ul className="flex space-x-4">
              <li className="w-[60px] h-[60px] flex justify-between items-center  bg-[#333333]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Adnaj"
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="w-[140px] h-[60px] flex justify-between items-center  bg-[#565f69]">
                <a
                  className="flex justify-between items-center w-full text-gray-300"
                  href="/"
                  download={true}
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
