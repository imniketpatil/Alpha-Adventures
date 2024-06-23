import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ.jsx";
import TempSpace from "../components/TempSpace.jsx";

function FAQs() {
  return (
    <>
      <TempSpace />
      <Header type="list" />
      <FAQ />
      <Footer />
    </>
  );
}

export default FAQs;
