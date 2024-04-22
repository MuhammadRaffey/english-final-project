import React from "react";
import Link from "next/link";
import { talha, zain, atif } from "../../../../data/Raffey Group/page-data";

type PageDetailType = {
  params: { name: string };
};

export default function Page({ params }: PageDetailType) {
  let pageData;

  switch (params.name) {
    case "atif":
      pageData = atif;
      break;
    case "talha":
      pageData = talha;
      break;
    case "zain":
      pageData = zain;
      break;
    default:
      pageData = null;
      break;
  }

  if (!pageData) {
    return <div>Page not found</div>;
  }

  const paragraphs = pageData.data.split("\n");

  return (
    <div className="flex gap-3 flex-col p-5">
      <nav className="navig">
        <Link
          className="duration-75 delay-75 text-white  hover:underline hover:text-[#35fb91]  shadow-glow"
          href={"/raffey"}
        >
          Back
        </Link>
        <Link
          className="duration-75 delay-75 text-white  hover:underline hover:text-[#35fb91]  shadow-glow"
          href={"/"}
        >
          Home
        </Link>
      </nav>
      <h1 className="font-bold text-center">Title: {pageData.title}</h1>
      {/* Mapping over paragraphs to render them */}
      <div className="text-center">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[20px] sm:text-2xls text-white sm:text-[#a8a8a8] delay-150 duration-150 sm:hover:text-[#fff] p-2 sm:p-2"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <footer className="watermark">{pageData.presentedBy}</footer>
    </div>
  );
}
