import React from "react";
import Link from "next/link";
import { akash, huzaifa, rehan } from "../../../../data/Annas Group/page-data";

type PageDetailType = {
  params: { name: string };
};

export default function Page({ params }: PageDetailType) {
  let pageData;

  switch (params.name) {
    case "akash":
      pageData = akash;
      break;
    case "rehan":
      pageData = rehan;
      break;
    case "huzaifa":
      pageData = huzaifa;
      break;
    default:
      pageData = null;
      break;
  }

  if (!pageData) {
    return <div>Page not found</div>;
  }

  // Splitting the data into paragraphs
  const paragraphs = pageData.data.split("\n");

  return (
    <div className="flex gap-3 flex-col p-5">
      <div className="navig">
        <Link href={"/annas"}>Back to Annas</Link>
        <Link href={"/"}>Back to Home</Link>
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
    </div>
  );
}
