import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div className="p-5 font-[Urbanist]">
      <nav className="navig ">
        <Link href={"/annas"} className="absolute pl-20">
          {" "}
          Annas
        </Link>
        <Link href={"/raffey"} className="absolute pr-20">
          {" "}
          Raffey
        </Link>
      </nav>
      <h1 className="p-5 text-center  ">Artificial Intelligence</h1>
      <p className="text-center text-2xl tracking-wide leading-10 p-2">
        Artificial Intelligence (AI) refers to the simulation of human
        intelligence in machines that are programmed to mimic human cognitive
        functions such as learning, problem-solving, perception, reasoning, and
        decision-making. AI technologies enable computers and systems to perform
        tasks that typically require human intelligence. These tasks can range
        from simple ones like recognizing patterns in data to complex activities
        like driving autonomous vehicles or playing strategic games. AI
        encompasses various subfields, including machine learning, natural
        language processing, computer vision, robotics, expert systems, and
        more. Machine learning, in particular, has seen significant advancements
        in recent years and is a subset of AI that focuses on the development of
        algorithms and statistical models that allow computers to perform tasks
        without explicit instructions but instead rely on patterns and
        inference. Overall, AI aims to create systems that can analyze and
        interpret complex data, adapt and learn from experiences, and make
        decisions with little or no human intervention. Its applications span
        across numerous industries, including healthcare, finance,
        transportation, education, entertainment, and beyond.
      </p>
      <footer>
        <h2 className="text-green p-5">Conclusion</h2>
        Currently, in my view, AI resembles a small child in the process of
        learning. One of the primary risks associated with AI decision-making
        lies in its dependency solely on the data provided through machine
        learning algorithms. These algorithms can both possess biases and lack
        them, as they are reliant on the data they are trained on. Consequently,
        if the data utilized to train an AI system contains biases, the
        decisions made by the system will inevitably reflect those biases.
      </footer>
    </div>
  );
};

export default Home;
