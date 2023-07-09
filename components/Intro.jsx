"use client";
import React from "react";
import { Container, Box } from "@mui/material";

import Image from "next/image";
import bgImg from "../public/images/untitled-91.JPG";

import styles from "@/styles/globals.module.css";

const Intro = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Image
        className={styles.Intro_image}
        src={bgImg}
        alt="backgroung image - ron gabay playing"
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <div className={styles.Intro_mainTitle}>רון גבאי - מורה פרטי לגיטרה</div>
        <div className={styles.Intro_secondTitle}>התחילו עוד <span>היום!</span></div>
      </Box>

      <div className={styles.Intro_frame}>
        <iframe
          className={styles.Intro_video}
          src="https://www.youtube.com/embed/koIuco4v7wc"
          title="Video Title"
        />
      </div>
    </Container>
  );
};

export default Intro;