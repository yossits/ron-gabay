import React from "react";
import Header from "@/components/Header";
import AboutUsMainContent from "@/components/AboutUsMainContent";

import AboutImage from "@/public/images/about.jpeg";

export const metadata = {
  title: "About Me",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

const About = () => {
  return (
    <main>
      <Header image={AboutImage} alt={"About us"} title={"אודותיי"} />
      <AboutUsMainContent />
    </main>
  );
};

export default About;
