"use client";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
          p: 6,
        }}
      >
        <Container maxWidth="lg" sx={{ color: "white" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Link href="/about" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white" gutterBottom>
                  About Us
                </Typography>
              </Link>
              <Typography variant="body2" color="white">
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href="/contact" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white" gutterBottom>
                  Contact Us
                </Typography>
              </Link>
              <Typography variant="body2" color="white">
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant="body2" color="white">
                Email: info@example.com
              </Typography>
              <Typography variant="body2" color="white">
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                Follow Us
              </Typography>
              <Link href="https://www.facebook.com/ron.gabay.50" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://instagram.com/rongabay?igshid=OGQ5ZDc2ODk2ZA=="
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
