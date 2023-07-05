"use client";
import React from "react";
import { Container, Box } from "@mui/material";
import Image from "next/image";
import bgImg from "../public/images/untitled-91.JPG";
import styles from "@/styles/mainPage.module.css";

const Intro = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Container maxWidth={false} disableGutters>
        <Image className={styles.image} src={bgImg} alt="Your alt text" />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={styles.mainTitle}><h1>The best guitar teacher</h1></div>
          <div className={styles.secondTitle}><h1>GET STARTED FOR TODAY!</h1></div>
        </Box>

        <div className={styles.frame}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/vLD24dAheyk"
            title="Video Title"
          />
        </div>
      </Container>
      <div className={styles.space}></div>
    </div>
  );
};

export default Intro;
