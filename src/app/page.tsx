import React from "react";
import Link from "next/link";

const Home = () => {
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
        <h1 className="text-center leading-snug tracking-wider px-20 text-[60px] sm:text-[100px] h-[20rem] mb-14 font-bold   mt-[6rem] delay-50 duration-100 cursor-help text-[#3966ae] hover:text-[#5f9dff] ">
          Artificial Intelligence
        </h1>
        <p className="text-[25px] sm:text-[25px] pb-8  ">
          A Project Lead by Muhammad Raffey, Annas Mustafa and our Amazing Team.
        </p>
      </div>
      <div className="flex items-center mb-[7rem] mt-14 justify-center">
        <a href="#skip-to-main-content">
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
        </a>
      </div>
      <div
        id="skip-to-main-content"
        className="flex items-center justify-center mb-10"
      >
        <h1 className=" tracking-wider text-[#3966ae] hover:text-[#5f9dff] duration-75 cursor-help delay-75  font-semibold text-[35pt] sm:text-[50pt] text-center">
          What is Artificial Intelligence?
        </h1>
      </div>
      <div>
        <p className="sm:text-center text-[20px] sm:text-2xls text-[#a8a8a8] delay-150 duration-150 hover:text-[#fff]">
          Artificial Intelligence (AI) refers to the simulation of human
          intelligence in machines that are programmed to mimic human cognitive
          functions such as learning, problem-solving, perception, reasoning,
          and decision-making. AI technologies enable computers and systems to
          perform tasks that typically require human intelligence. These tasks
          can range from simple ones like recognizing patterns in data to
          complex activities like driving autonomous vehicles or playing
          strategic games. AI encompasses various subfields, including machine
          learning, natural language processing, computer vision, robotics,
          expert systems, and more. Machine learning, in particular, has seen
          significant advancements in recent years and is a subset of AI that
          focuses on the development of algorithms and statistical models that
          allow computers to perform tasks without explicit instructions but
          instead rely on patterns and inference. Overall, AI aims to create
          systems that can analyze and interpret complex data, adapt and learn
          from experiences, and make decisions with little or no human
          intervention. Its applications span across numerous industries,
          including healthcare, finance, transportation, education,
          entertainment, and beyond.
        </p>
      </div>
      <footer>
        <h2 className="text-center leading-snug tracking-wider text-[50px] sm:text-[100px]   font-bold  cursor-pointer text-[#3966ae] mt-5">
          Conclusion
        </h2>
        <p className="sm:text-center text-[20px] sm:text-2xls text-[#a8a8a8] delay-150 duration-150 hover:text-[#fff]">
          Currently, in my view, AI resembles a small child in the process of
          learning. One of the primary risks associated with AI decision-making
          lies in its dependency solely on the data provided through machine
          learning algorithms. These algorithms can both possess biases and lack
          them, as they are reliant on the data they are trained on.
          Consequently, if the data utilized to train an AI system contains
          biases, the decisions made by the system will inevitably reflect those
          biases.
        </p>
      </footer>
    </div>
  );
};

export default Home;
