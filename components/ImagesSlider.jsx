"use client";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";
import styles from "@/styles/globals.module.css";

import image_1 from "@/public/images_slider/img-slider-1.jpg";
import image_2 from "@/public/images_slider/img-slider-2.jpg";
import image_3 from "@/public/images_slider/img-slider-3.jpg";
import image_4 from "@/public/images_slider/img-slider-4.jpg";
import image_5 from "@/public/images_slider/img-slider-5.jpg";
import image_6 from "@/public/images_slider/img-slider-6.jpg";
import image_7 from "@/public/images_slider/img-slider-7.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "כחלק מהופעותי עם אמנים יצא לי לעבוד גם עם עדן בן זקן המוכשרת",
    imgPath: image_1,
  },
  {
    label: "בצילומי פרסומת לחברת GTC שמפתחת גאדג׳טים בתחום החשמליות",
    imgPath: image_2,
  },
  {
    label: "עם ארז לב ארי…",
    imgPath: image_3,
  },
  {
    label: "אירוע פרטי עם מושיק עפיה",
    imgPath: image_4,
  },
  {
    label: "סשן עם ברי סחרוף",
    imgPath: image_5,
  },
  {
    label: "רדיו דרום מארח",
    imgPath: image_6,
  },
  {
    label: "מופע מוזיקלי שהפקתי ובו ניגנתי עם תלמידיי לקיבוץ ״חצרים״",
    imgPath: image_7,
  },
];

const ImagesSlider = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      className={styles.ImagesSlider_box}
      sx={{
        flexGrow: 1,
        margin: "auto",
        paddingTop: "50px",
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          borderRadius: "10px 10px 0 0",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
        }}
      >
        <Typography sx={{ color: "white", paddingRight: "10px" }}>
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div className={styles.ImagesSlider_div} key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image
                className={styles.ImagesSlider_image}
                sx={{
                  display: "block",
                  overflow: "hidden",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          borderRadius: "0px 0px 10px 10px",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            הבא
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
            הקודם
          </Button>
        }
      />
    </Box>
  );
};

export default ImagesSlider;
