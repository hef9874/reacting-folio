import React from 'react';
import techBlog from '../assets/tech-blog.png';
import eventlyApp from '../assets/evently-app.png';
import catsOff from '../assets/cats-off-to-ya.png';
import "../index.css";

const AllProjects = () => {
    return (
        <div name="projects" className="w-full md:h-screen text-white Pastel bg-gradient-to-bl gradient-to-bl from-blue-400 to-emerald-400">
            <div className="pb-8 px-4">
                <p className="text-4xl font-bold inline border-b-4 text-white border-white">Projects</p>
                <p className="py-6">This is my recent work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {/* Card Container */}
                <div style={{ backgroundImage: `url(${catsOff})` }}
                className="shadow-lg shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text white tracking-wider">
                            MVC Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/heyitsthatgirl/HoN-Pet-Edition">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">The Code</button>
                            </a>
                            <a href="https://hot-or-not-pets-edition.herokuapp.com/homepage">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">Try It Out</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${eventlyApp})` }}
                className="shadow-lg shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text white tracking-wider">
                            MERN App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/tmcash/cool-events-app">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">The Code</button>
                            </a>
                            <a href="https://evently-app.herokuapp.com/">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">Try It Out</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${techBlog})` }}
                className="shadow-lg shadow-zinc-800 group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text white tracking-wider">
                            Tech Blog
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/hef9874/super-techy-blog">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">The Code</button>
                            </a>
                            <a href="https://super-techy-blog.herokuapp.com/">
                                <button className="text-center px-4 py-2 m-2 bg-blue-400 text-white text-lg">Try It Out</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default AllProjects