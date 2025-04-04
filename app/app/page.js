'use client'

import React from "react";
import Image from "next/image";

import Header from "@/components/Header.jsx";
import Navbar from "@/components/Navbar.jsx";
import Features from "@/components/Features.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header header={"Showcase Your Developer Skills"} description={"Connect with companies and other developers. Build your professional brand with a stunning portfolio."}/>
      <Features/>
      <Footer/>
    </>
  );
}
