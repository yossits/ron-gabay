import React from "react";
import Header from "@/components/Header";
import AboutUsMainContent from "@/components/AboutUsMainContent";

import AboutImage from "@/public/images/about.jpeg";

export const metadata = {
  title: "אודות - רון גבאי מורה פרטי לגיטרה",
  description:
    "רון גבאי, מורה לגיטרה מבאר שבע, מצטיין בניסיון של שנים בהוראה למתחילים ולמתקדמים, כולל גיטרה חשמלית, אקוסטית וקלאסית. מלמד במגוון סגנונות מרוק ובלוז ועד ג'אז ומזרחית. שיעורים אישיים וקבוצתיים, היכנסו.",
};

const About = () => {
  return (
    <main>
      <Header image={AboutImage} alt={"About us"} title={"אודות"} />
      <AboutUsMainContent />
    </main>
  );
};

export default About;
