"use client";
import React from "react";
import { Grid, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ronAboutImage from "@/public/images/ron-5a.jpeg";
import styles from "@/styles/aboutUs.module.css";

const AboutUsMainContent = () => {
  const router = useRouter();

  const navigateToContactRoute = () => {
    router.push("/contact");
  };
  return (
    <Container disableGutters>
      <Grid container sx={{ padding: "60px" }}>
        <Grid
          sx={{ textAlign: "center", marginBottom: "30px" }}
          item
          xs={12}
          md={6}
        >
          <Image
            sx={{ width: "100%" }}
            src={ronAboutImage}
            width={430}
            height={650}
            alt="Descriptive alt text"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ paddingLeft: "50px" }}>
          <Typography
            sx={{ textAlign: "right" }}
            gutterBottom
            variant="h3"
            component="div"
          >
            רון גבאי
          </Typography>
          <Typography
            className={styles.ronText}
            component="div"
            variant="body2"
            color="text.secondary"
          >
            <Typography component="p" variant="body2" color="text.secondary">
              שמי רון גבאי, גיטריסט ומוזיקאי מקצועי, מורה לגיטרה מבאר שבע.
              ניסיוני העשיר מכיל שיתוף פעולה עם מגוון רחב של אמנים בתעשייה, כולל
              ארז לב ארי, דנה ברגר, אורלי פרל, טל ירימי, עדן בן זקן, עדן חסון
              והרכבי טראנס
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              במסגרת העשייה שלי כמורה לגיטרה בבאר שבע, אני מספק שיעורים לקבוצות
              וליחידים, למתחילים ולמתקדמים, בכל הגילאים. השיעורים מתקיימים
              באולפן הפרטי שלי, שמאובזר בציוד מתקדם ביותר וממוקם בלב באר שבע
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              יש לי ניסיון של שנים בהוראת שלושת סוגי הגיטרות: חשמלית, אקוסטית
              וקלאסית. כמו כן, אני מלמד במגוון סגנונות, כולל רוק, בלוז, ג&apos;אז,
              ומזרחית. הניסיון שלי כמורה כולל גם עבודה בבתי ספר למוזיקה מוכרים,
              כמו חלילית, מיזיקול, וגיטר-סטודיו ת&lsquo;א
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מעביר גם הרצאות במוסדות חינוכיים שונים, כמו אשל הנשיא וחצרים,
              ואני שותף בפרוייקטים משותפים עם משרד החינוך ועיריית באר שבע.
              השיעורים שלי מתאימים לכל תלמיד באופן אישי, והם מבוססים על קצב
              התקדמותו האינדיבידואלי
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מאמין שכל תלמיד תחת הליווי שלי שרוצה ומשקיע בשיעורי הבית שלו
              יכול להשיג תוצאות מצוינות במהירות. החומר שאני מלמד מותאם לכל תלמיד
              באופן אישי, והוא מועבר בצורה מסודרת וממוקדת. אני כותב את החומר
              בעצמי, כלומר, אני לא משתמש בחומרים מודפסים מהאינטרנט או מספרים
              שכבר אינם רלוונטיים
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              אני מעניק ליווי ותמיכה כבר מהשיחה הראשונה ועד לייעוץ בקניית גיטרה,
              תחזוקה שוטפת, וכל שאר הנושאים. תלמידים שלי נהנים מהטבות בחנויות
              כלי נגינה. ניתן לבדוק את המלצות התלמידים הבוגרים שלי, ההורים,
              והמוסדות בהם אני מרצה
            </Typography>
            <br />
            <Typography component="p" variant="body2" color="text.secondary">
              
              <Button onClick={navigateToContactRoute} variant="contained">
                צור קשר
              </Button>
              {"   "}.עבור פרטים נוספים, אנא צרו איתי קשר
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUsMainContent;
