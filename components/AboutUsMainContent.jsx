"use client";
import React from "react";
import { Grid, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ronAboutImage from "@/public/images/ron-5.jpeg";
import styles from "@/styles/globals.module.css";


const AboutUsMainContent = () => {
  const router = useRouter();

  const navigateToContactRoute = () => {
    router.push("/contact");
  };
  return (
    <Container disableGutters>
      <Grid container sx={{ padding: "60px" }}>
        <Grid item xs={12} md={6} sx={{ paddingLeft: "50px", marginBottom: "30px" }}>
          <Typography
            sx={{ textAlign: "right" }}
            gutterBottom
            variant="h3"
            component="div"
          >
            רון גבאי
          </Typography>
          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
          >
            <Typography component="p" variant="body2" color="text.secondary">
              שמי רון גבאי &sbquo; גיטריסט ומוזיקאי מקצועי &sbquo; מורה לגיטרה
              מבאר שבע. ניסיוני העשיר מכיל שיתוף פעולה עם מגוון רחב של אמנים
              בתעשייה &sbquo; כולל ארז לב ארי &sbquo; דנה ברגר &sbquo; אורלי פרל
              &sbquo; טל ירימי &sbquo; עדן בן זקן &sbquo; עדן חסון והרכבי טראנס
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              במסגרת העשייה שלי כמורה לגיטרה בבאר שבע &sbquo; אני מספק שיעורים
              לקבוצות וליחידים &sbquo; למתחילים ולמתקדמים &sbquo; בכל הגילאים.
              השיעורים מתקיימים באולפן הפרטי שלי &sbquo; שמאובזר בציוד מתקדם
              ביותר וממוקם בלב באר שבע
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              יש לי ניסיון של שנים בהוראת שלושת סוגי הגיטרות: חשמלית &sbquo;
              אקוסטית וקלאסית. כמו כן &sbquo; אני מלמד במגוון סגנונות &sbquo;
              כולל רוק &sbquo; בלוז &sbquo; ג&apos;אז &sbquo; ומזרחית. הניסיון
              שלי כמורה כולל גם עבודה בבתי ספר למוזיקה מוכרים &sbquo; כמו חלילית
              &sbquo; מיזיקול &sbquo; וגיטר-סטודיו ת&lsquo;א
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מעביר גם הרצאות במוסדות חינוכיים שונים &sbquo; כמו אשל הנשיא
              וחצרים &sbquo; ואני שותף בפרוייקטים משותפים עם משרד החינוך ועיריית
              באר שבע. השיעורים שלי מתאימים לכל תלמיד באופן אישי &sbquo; והם
              מבוססים על קצב התקדמותו האינדיבידואלי
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מאמין שכל תלמיד תחת הליווי שלי שרוצה ומשקיע בשיעורי הבית שלו
              יכול להשיג תוצאות מצוינות במהירות. החומר שאני מלמד מותאם לכל תלמיד
              באופן אישי &sbquo; והוא מועבר בצורה מסודרת וממוקדת. אני כותב את
              החומר בעצמי &sbquo; כלומר &sbquo; אני לא משתמש בחומרים מודפסים
              מהאינטרנט או מספרים שכבר אינם רלוונטיים
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מעניק ליווי ותמיכה כבר מהשיחה הראשונה ועד לייעוץ בקניית גיטרה
              &sbquo; תחזוקה שוטפת וכל שאר הנושאים. תלמידים שלי נהנים מהטבות
              בחנויות כלי נגינה. ניתן לבדוק את המלצות התלמידים הבוגרים שלי
              &sbquo; ההורים והמוסדות בהם אני מרצה
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              .עבור פרטים נוספים &sbquo; אנא צרו איתי קשר{"   "}
              <Button onClick={navigateToContactRoute} variant="contained">
                צור קשר
              </Button>
            </Typography>
          </Typography>
        </Grid>
        <Grid
          sx={{ textAlign: "center", marginBottom: "30px" }}
          item
          xs={12}
          md={6}
        >
          <Image
            className={styles.AboutUsMainContent_imageMainContent}
            src={ronAboutImage}
            alt="image for about us page"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsMainContent;
