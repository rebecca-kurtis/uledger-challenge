"use client"
import Test from "./testfile";

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function Home() {
  return (

    <div>
       <Navbar/>
       <main>
      <h1>Hello</h1>
      <Test />
    </main>
    <Footer/>
    </div>
   
  );
}
