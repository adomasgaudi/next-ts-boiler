"use client";
/** @jsxImportSource @emotion/react */
import { _ } from "chainedcss";
import Link from "next/link";

const CompApp = () => {
  return (
    <div>
      <Link href="/about">helo link hey</Link>
      <h1 {..._.bgRed300()}>sdfsdfsdfsdf</h1>
    </div>
  );
};

export default CompApp;
