"use client";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
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
      yosi.tsaarfati@gmail.com{" "}
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
        <Container maxWidth="lg" sx={{ color: "white", textAlign: "right" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Link href="/about" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white" gutterBottom>
                  אודות
                </Typography>

                <Typography variant="body2" color="white">
                  רון גבאי, מורה לגיטרה מבאר שבע, מצטיין בניסיון של שנים בהוראה
                  למתחילים ולמתקדמים, כולל גיטרה חשמלית, אקוסטית וקלאסית. מלמד
                  במגוון סגנונות מרוק ובלוז ועד ג'אז ומזרחית. שיעורים אישיים
                  וקבוצתיים, היכנסו.
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href="/contact" sx={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white" gutterBottom>
                  צור קשר
                </Typography>

                <Typography variant="body2" color="white">
                  ממוקם בלב העיר באר שבע
                </Typography>
                <Typography variant="body2" color="white">
                  rongabay1@gmail.com :דואר אלקטרוני
                </Typography>
                <Typography variant="body2" color="white">
                  טלפון: 052-483-2283
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="white" gutterBottom>
                עקבו אחריי
              </Typography>
              <Link
                href="https://www.facebook.com/ron.gabay.50"
                color="inherit"
              >
                <Facebook fontSize="large" />
              </Link>
              <Link
                href="https://instagram.com/rongabay?igshid=OGQ5ZDc2ODk2ZA=="
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram fontSize="large" />
              </Link>
              <Link href="https://www.youtube.com/@RonGabay" color="inherit">
                <YouTube fontSize="large"/>
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
