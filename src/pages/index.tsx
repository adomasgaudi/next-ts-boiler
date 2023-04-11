import React from "react";
import Header from "../app/bones/layout/Header";
import Image from "next/image";
import Footer from "../app/bones/layout/Footer";
import cube from "../static/img/random3.webp";
import Head from "../share/bones/components/Head";
import { ContainX } from "../share/bones/components/Contain";

export default function Home() {
  return (
    <>
      <Head title="Overanalysed" />
      <Header />
      <ContainX.H800p3>
        <h1 className="hero">Your title</h1>
      </ContainX.H800p3>
      <Footer />
    </>
  );
}
