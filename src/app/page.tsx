"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { mainPage } from "../../data/main";
import Image from "next/image";
const Home = () => {
  const { main, foot } = mainPage;
  const [words, setWords] = useState([]);

  useEffect(() => {
    const text: string = "Artificial Intelligence";
    const wordsArray: any = text.split(" ");
    setWords(wordsArray);
  }, []);

  return (
    <div className="p-6  font-[Urbanist] overflow-hidden">
      <nav className="navig">
        <Link
          href="/annas"
          className="duration-75 delay-75 text-white hover:text-[#3966ae]  hover:underline shadow-glow"
        >
          <svg
            width="20px"
            height="20px"
            fill="#ffffff"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className="inline-block h-5 w-5 mr-2"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
          </svg>
          Annas
        </Link>
        <Link
          href="/raffey"
          className="duration-75 delay-75 text-white hover:text-[#3966ae]  hover:underline shadow-glow"
        >
          <svg
            fill="#ffffff"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className="inline-block h-5 w-5 mr-2"
          >
            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
          </svg>
          Raffey
        </Link>
      </nav>
      <div className="w-full  h-[25rem] flex  flex-col text-center items-center justify-center  ">
        <h1 className="text-left sm:text-center leading-snug tracking-wider sm:px-20 text-[55px] sm:text-[100px] h-[20rem] mb-14 font-bold mt-[6rem] delay-50 duration-100 cursor-help text-[#3966ae] hover:text-[#5f9dff]">
          {words.map((word, index) => (
            <span
              key={index}
              className="word-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-[25px] sm:text-[25px] pb-8  ">
          A Project Lead by Muhammad Raffey, Annas Mustafa and our Amazing Team.
        </p>
      </div>
      <div className="flex items-center mb-[7rem] mt-14 justify-center">
        <Link href="#skip-to-main-content">
          <svg
            className="w-10 animate-bounce p-1 rounded-full ring-[3px] ring-[#3966ae] delay-75 duration-75 hover:ring-offset-4 h-10 text-[#fff]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-around sm:p-10 w-100">
        <Image
          src={"/p1.jpg"}
          width={1000}
          height={1000}
          alt="Artificial Intellegence "
          className="p-5"
        ></Image>
        <Image
          src={"/p2.jpg"}
          width={1000}
          height={1000}
          alt="Artificial Intellegence "
          className="p-5"
        ></Image>
      </div>
      <div
        id="skip-to-main-content"
        className="flex items-center justify-center mb-10"
      >
        <h1 className=" text-left sm:text-center tracking-wider text-blue sm:text-[#3966ae] sm:hover:text-[#5f9dff] duration-75 cursor-help delay-75  font-semibold text-[35pt] sm:text-[50pt] ">
          What is Artificial Intelligence?
        </h1>
      </div>
      <div>
        <p className="sm:text-center text-[20px] sm:text-2xls text-white sm:text-[#a8a8a8] delay-150 duration-150 sm:hover:text-[#fff]">
          {main}
        </p>
      </div>
      <footer>
        <h2 className="text-left sm:text-center  leading-snug tracking-wider text-[50px] sm:text-[100px]   font-bold  cursor-pointer text-[#3966ae] mt-5">
          Conclusion
        </h2>
        <p className="sm:text-center text-[20px] sm:text-2xls text-white sm:text-[#a8a8a8] delay-150 duration-150 sm:hover:text-[#fff]">
          {foot}
        </p>
      </footer>
    </div>
  );
};

export default Home;
