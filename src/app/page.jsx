import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Slogan from "@/components/Slogan";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slogan/>
      <Join/>
      <Features/>
      <Footer/>
    </>
  );
}
