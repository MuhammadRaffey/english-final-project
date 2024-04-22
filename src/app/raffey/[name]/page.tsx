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
          href="/raffey"
          className="duration-75 delay-75 text-white hover:underline hover:text-[#35fb91] shadow-glow flex items-center"
        >
          <svg
            height="512px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6" // Adjust the margin and size as needed
          >
            <polygon
              points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256"
              fill="#ffffff"
            ></polygon>
          </svg>
          Back
        </Link>
        <Link
          href="/"
          className="duration-75 delay-75 text-white hover:underline hover:text-[#35fb91] shadow-glow flex items-center"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
            className="mr-2"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="#fcfcfc"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M15 18H9"
                stroke="#fcfcfc"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
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
