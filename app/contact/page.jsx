import Form from "@/components/Form";
import Header from "@/components/Header";

import ContactImage from "@/public/images/contact.jpeg";

export const metadata = {
  title: "Contact",
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
