import React from "react";
import { akash, huzaifa, rehan } from "../../../../data/Annas Group/page-data";
import Link from "next/link";

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

  return (
    <div className="flex gap-3 flex-col p-5">
      <h1 className="font-bold">Title: {pageData.title}</h1>
      <p>{pageData.data}</p>
      <footer className="watermark">{pageData.presentedBy}</footer>
      <div className="navig">
        <Link href={"/annas"}>Back to Annas</Link>
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
