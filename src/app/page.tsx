import AboutMe from "@/components/AboutMe/page";
import Footer from "@/components/Footer";
import Home from "@/components/Home/page";
import Location from "@/components/Location/page";
import Portfolio from "@/components/Portfolio/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Richaa Benny",
  description: "richaa benny portfolio website home page"
};


export default function Main(): JSX.Element {

  return (
    <div className="h-screen w-screen">
      <Home />
      <AboutMe />
      <Portfolio />
      <Location />
      <Footer />
    </div>
  )
}
