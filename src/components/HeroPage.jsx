import React from "react";
import Questionss from "./Questions";
import Contact from "./Contact";
import Prizing from "./Prizing";
import Payroll from "./Payroll";
import Working from "./Working";
import Salary from "./Salary";
import Download from "./Download";
import Intro from "./Intro";
import Features from "./Features";
import Sponsors from "./Sponsors";
import Dashboard from "./Dashboard";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
function HeroPage() {
  return (
    <>
      <Hero />
      <Dashboard />
      <Testimonials />
      <Sponsors />
      <Features />
      <Intro />
      <Download />
      <Salary />
      <Working />
      <Payroll />
      <Prizing />
      <Contact />
      <Questionss />
    </>
  );
}

export default HeroPage;
