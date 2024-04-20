import React from "react";
import Link from "next/link";
import { annas } from "../../../data/Annas Group/page-data";

const page = () => {
  let pageData = annas;

  // Splitting the data into paragraphs
  const paragraphs = pageData.data.split("\n");

  return (
    <div className="flex gap-3 flex-col p-5">
      <div className="navig">
        <Link href={"annas/huzaifa"}> Huzaifa</Link>
        <Link href={"annas/akash"}> Akash</Link>
        <Link href={"annas/rehan"}> Rehan</Link>
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
