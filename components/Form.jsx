"use client";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AlertMessage from "./AlertMessage";

let theme = createTheme({
  palette: {
    black: {
      main: "#000000",
    },
    navy: {
      main: "#262A56",
    },
    orange: {
      main: "#B8621B",
    },
    beige: {
      main: "#E3CCAE",
    },
  },
});

const Form = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [severity, setSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const JSONdata = JSON.stringify(formData);
    const endPoint = "/api/contact";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endPoint, options);
      const dataResponse = await response.json();
      console.log(dataResponse);
      if (dataResponse.message === "Post created successfully") {
        setShowAlert(true);
        setSeverity("success");
        setAlertMessage("Post created successfully");
      }
    } catch (error) {
      console.error("Error sending message:", error.message);
      setShowAlert(true);
      setSeverity("error");
      setAlertMessage("An error occurred while processing your request");
      throw error;
    } finally {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {showAlert && <AlertMessage message={alertMessage} severity={severity} />}
      <Card
        sx={{
          maxWidth: 450,
          margin: "30px auto",
          padding: "20px 5px",
          backgroundColor: "#e3ccae21",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            טופס צור קשר
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            מלא את הטופס והצוות שלנו יחזור אליך תוך 24 שעות.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  value={formData.fullName}
                  onChange={handleInput}
                  fullWidth
                  required
                  name="fullName"
                  id="fullName"
                  label="Full Name"
                  placeholder="Enter Full Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  value={formData.email}
                  onChange={handleInput}
                  fullWidth
                  name="email"
                  type="email"
                  id="email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  value={formData.phone}
                  onChange={handleInput}
                  name="phone"
                  type="number"
                  fullWidth
                  required
                  id="phone"
                  label="Phone"
                  placeholder="Enter Phone Number"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  value={formData.message}
                  onChange={handleInput}
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                  id="message"
                  label="Message"
                  placeholder="Enter Your Message"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <Button type="submit" fullWidth variant="contained" color="orange" sx={{color: "#E3CCAE", fontSize: "1.2rem", fontWeight: "bold"}}>
                  שלח טופס
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default Form;
