import React from "react";
import Image from "next/image";
import styles from "@/styles/globals.module.css";

const Header = ({ image, alt, title }) => {
  return (
    <div className={styles.Header_container}>
      <div className={styles.Header_header}>
        <Image className={styles.Header_image} src={image} alt={alt} />
        <p className={styles.Header_title}>{title}</p>
      </div>
    </div>
  );
};

export default Header;
