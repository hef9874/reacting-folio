import React from "react";
import Navigation from "../components/Navigation";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div name="home" className="w-full h-screen Pastel bg-gradient-to-bl bg-gradient-to-trbg-gradient-to-bl from-blue-400 to-emerald-400">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <h2 className="text-white "> Hi, I'm </h2>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#f9fbfb]"> Hannah Ferrell </h1>
                <h2 className="text-white text-3xl sm:text-6xl font-bold">I'm a Full Stack Developer</h2>
                <p className="text-white py-4 max-width-[700px]">I am from Durham, NC, and am learning how to develop full stack applications.</p>
                <div>
                    <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400">
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                        <span className="group- hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Home
