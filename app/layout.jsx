import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "רון גבאי - מורה פרטי לגיטרה",
  description:
    "רון גבאי, מורה לגיטרה מבאר שבע, מצטיין בניסיון של שנים בהוראה למתחילים ולמתקדמים, כולל גיטרה חשמלית, אקוסטית וקלאסית. מלמד במגוון סגנונות מרוק ובלוז ועד ג'אז ומזרחית. שיעורים אישיים וקבוצתיים, היכנסו.",
  icons: {
    icon: {
      url: "/icon.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" className={inter.className}>
      <body style={{ margin: "0" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
