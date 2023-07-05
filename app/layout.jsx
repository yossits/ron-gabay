import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "home page",
  icons: {
    icon: {
      url: "/icon.png",
      type: "image/png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
