import Header from "@/components/Header";
import Form from "@/components/Form";
import ContactImage from "@/public/images/contact.jpeg";

export const metadata = {
  title: "צור קשר - רון גבאי מורה פרטי לגיטרה",
  description:
    "רון גבאי, מורה לגיטרה מבאר שבע, מצטיין בניסיון של שנים בהוראה למתחילים ולמתקדמים, כולל גיטרה חשמלית, אקוסטית וקלאסית. מלמד במגוון סגנונות מרוק ובלוז ועד ג'אז ומזרחית. שיעורים אישיים וקבוצתיים, היכנסו.",
};

const Page = () => {
  return (
    <main>
      <Header image={ContactImage} alt={"Contact"} title={"צור קשר"} />
      <Form />
    </main>
  );
};

export default Page;
