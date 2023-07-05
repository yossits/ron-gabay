import React from "react";
import AboutUsIntro from "@/components/AboutUsIntro";
import AboutUsMainContent from "@/components/AboutUsMainContent";

export const metadata = {
  title: "About Me",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",
};

const About = () => {
  return (
    <main>
      <AboutUsIntro />
      <AboutUsMainContent />
    </main>
  );
};

export default About;
