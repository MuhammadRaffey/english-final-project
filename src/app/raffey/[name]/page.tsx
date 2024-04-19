import React from "react";
import Link from "next/link";
import {
  raffey,
  talha,
  zain,
  atif,
} from "../../../../data/Raffey Group/page-data";

type PageDetailType = {
  params: { name: string };
};

export default function Page({ params }: PageDetailType) {
  let pageData;

  switch (params.name) {
    case "atif":
      pageData = raffey;
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
      <h1 className="font-bold">Title: {pageData.title}</h1>
      <p>{pageData.data}</p>
      <footer>{pageData.presentedBy}</footer>
      <div className="flex flex-col p-5 gap-2 text-blue underline">
        <Link href={"/raffey"}>Back to Raffey</Link>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
