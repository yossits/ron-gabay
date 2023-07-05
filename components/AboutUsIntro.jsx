import React from "react";
import Image from "next/image";
import AboutImage from "@/public/images/about.jpeg";
import styles from "@/styles/aboutUs.module.css";

const AboutUsIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.image} src={AboutImage} alt="About us" />
        <h1 className={styles.title}>ABOUT US</h1>
      </div>
    </div>
  );
};

export default AboutUsIntro;
