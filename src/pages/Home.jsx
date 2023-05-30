import React from "react";
import NavBar from "../Components/Navbar";

import Profile from "../assets/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div
        name="home"
        className="w-full h-screen bg-gradient-to-b py-8 px-2 from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a FullStack Developer.{" "}
            </h2>
            <p className="text-gray-500 py-2 max-w-[700px]">
              I’m focused on building responsive front-end web applications, I
              love working on web application using technologies like React,
              Tailwind, Css, Nodejs.
            </p>
            <div>
              <Link
                to="/portfolio"
                className="group text-white border-2 w-fit px-6 py-3 my-2 flex items-center rounded-md hover:bg-pink-600 hover:border-pink-500 cursor-pointer"
              >
                View Portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>

          <div className="px-6 py-3 my-2">
            <img
              src={Profile}
              alt="my profile"
              className="rounded-2xl mx-auto px-4 w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
