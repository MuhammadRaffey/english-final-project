import React from "react";
import { raffey } from "../../../data/Raffey Group/page-data";
import Link from "next/link";

const page = () => {
  let pageData = raffey;

  // Splitting the data into paragraphs
  const paragraphs = pageData.data.split("\n");

  return (
    <div className="flex gap-3 flex-col p-5">
      <div className="navig">
        <Link href={"raffey/talha"}> Talha</Link>
        <Link href={"raffey/zain"}> Zain</Link>
        <Link href={"raffey/atif"}> Atif</Link>
      </div>
      <h1 className="font-bold text-center">Title: {pageData.title}</h1>
      {/* Mapping over paragraphs to render them */}
      <div className="text-center">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[20px] sm:text-2xls text-[#a8a8a8] delay-150 duration-150 hover:text-[#fff] p-2 sm:p-8"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <footer className="watermark">{pageData.presentedBy}</footer>
      <div className="navig">
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default page;
