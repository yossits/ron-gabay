"use client";
import React from "react";
import { Grid, Container } from "@mui/material";
import Card from "@/components/Card";

import image1 from "@/public/images/ron-1.jpeg";
import image2 from "@/public/images/ron-2.jpeg";
import image3 from "@/public/images/ron-3.jpeg";

const MultiCards = () => {
  const cardsData = [
    {
      cardTitle: "BEGINNER LESSONS",
      cardContent: "ccc",
      cardImage: image1,
      id: "card-1",
    },
    {
      cardTitle: "EXPERIENCED LESSONS",
      cardContent: "rrr",
      cardImage: image2,
      id: "card-2",
    },
    {
      cardTitle: "SONG LIBRARY",
      cardContent: "fff",
      cardImage: image3,
      id: "card-3",
    },
  ];
  return (
    <Container maxWidth="md" sx={{ padding: "80px 10px" }}>
      <Grid container spacing={3}>
        {cardsData.map((data) => (
          <Grid
            item
            xs={12}
            md={4}
            key={data.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Card
              key={data.id}
              cardTitle={data.cardTitle}
              cardContent={data.cardContent}
              cardImage={data.cardImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MultiCards;
