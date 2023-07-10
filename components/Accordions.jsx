"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Typography, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      sx={{
        padding: "40px 40px 80px",
        borderRadius: "10px",
        marginBottom: "30px",
        width: "100%",
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginBottom: "20px" }}
        variant="h4"
        component="div"
      >
        שאלות נפוצות
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            האם השיעורים מועברים באופן פרטי?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            השיעורים מועברים באופן פרטי אלא אם יש כן התעניינות לפתוח קבוצה (עד 3
            משתתפים).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            כמה שיעורים מספיקים בחודש?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            שיעור של שעה פעם בשבוע, 4 פעמים בחודש זה אפקטיבי ומספיק לחלוטין
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            איפה השיעורים מתקיימים?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            באולפני הפרטי המצויד בציוד קצה ברמה הגבוהה ביותר לטובת התלמיד/ה.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            מתאים לכל הגילאים?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>מגיל 8 ומעלה.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            האם אתה מעביר שיעורים אונליין?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            כמובן. בתקופת הקורונה הבאתי את הלמידה מרחוק למקום אפקטיבי מאוד.
            החומר נסרק ונשלח בו במקום לתלמיד למייל/זום
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
