import React from "react";
import { raffey } from "../../../data/Raffey Group/page-data";
import Link from "next/link";
const page = () => {
  let pageData = raffey;
  return (
    <div className="flex gap-3 flex-col p-5">
      <div className="navig">
        <Link href={"raffey/talha"}> Talha</Link>
        <Link href={"raffey/zain"}> Zain</Link>
        <Link href={"raffey/atif"}> Atif</Link>
      </div>
      <h1 className="font-bold">Title: {pageData.title}</h1>
      <p>{pageData.data}</p>
      <footer className="watermark">{pageData.presentedBy}</footer>
      <div className="navig">
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default page;
