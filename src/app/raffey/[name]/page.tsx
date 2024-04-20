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

  return (
    <div className="flex gap-3 flex-col p-5">
      <div className="navig">
        <Link href={"/raffey"}>Back to Raffey</Link>
        <Link href={"/"}>Back to Home</Link>
      </div>
      <h1 className="font-bold text-center">Title: {pageData.title}</h1>
      <p className="text-center text-[20px] sm:text-2xls text-[#a8a8a8] delay-150 duration-150 hover:text-[#fff] p-2 sm:p-8">
        {pageData.data}
      </p>
      <footer className="watermark">{pageData.presentedBy}</footer>
    </div>
  );
}
