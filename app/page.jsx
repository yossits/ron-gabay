import Intro from "@/components/Intro";
import MultiCards from "@/components/MultiCards";
import Accordions from "@/components/Accordions";
import Form from "@/components/Form";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";

export default function Page() {
  return (
    <>
      <Intro />
      <MultiCards />
      <Accordions />
      <ReadyToGetStarted/>
      <Form/>
    </>
  );
}
