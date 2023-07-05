"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

export default function ActionAreaCard({ cardTitle, cardContent, cardImage }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <Image src={cardImage} alt={cardTitle} width={250} height={250} />
        <CardContent>
          <Typography
            sx={{
              textAlign: "left",
              position: "absolute",
              top: "60%",
              left: "5%",
              color: "white",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
