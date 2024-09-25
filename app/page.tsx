import Coins from "@/components/Coins";
import Features from "@/components/Features";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import SmartTrading from "@/components/SmartTrading";
import ConvenienceMeetsCryptoTrading from "@/components/ConvenienceMeetsCryptoTrading";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SmartTrading />
      <Coins />
      <Features />
      <FAQs />
      <ConvenienceMeetsCryptoTrading />
      <SignupForm />
      <Footer />
    </>
  );
}
