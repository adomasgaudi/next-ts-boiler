import React from "react";
import Header from "../layout/Header";
import Image from "next/image";
import Footer from "../layout/Footer";
import cube from "../static/img/random3.webp";
// import Head from "../share/bones/components/Head";
// import { ContainX } from "../share/bones/components/Contain";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 103c043 (feat: -u clean up more)
// Load external fonts



<<<<<<< HEAD
=======
>>>>>>> 3b96933 (feat: -u working page)
=======
>>>>>>> 103c043 (feat: -u clean up more)

const Comp = (pass) => {
  const variants = { a: 'i', b: 'j'}
  pass(variants)
  return (

  <>
    <div>hi</div>
  </>
  )
}

{/* <Contain.H800p3 ></Contain.H800p3> */}

export default function Home() {
  return (
    <>
      {/* <Head title="Overanalysed" /> */}
      <Header />
      {/* <ContainX.H800p3>
        <Comp variant={ () => {console.log('hiii')}} />
        <h1 className="hero">Your title</h1>
      </ContainX.H800p3> */}
      <Footer />
    </>
  );
}
