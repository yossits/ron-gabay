import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutUs.module.css";

const Header = ({ image, alt, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image className={styles.image} src={image} alt={alt} />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
