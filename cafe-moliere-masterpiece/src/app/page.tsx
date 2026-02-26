import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheStory from "@/components/TheStory";
import Menu from "@/components/Menu";
import TheProcess from "@/components/TheProcess";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";

export default function Home() {
  return (
    <main className="relative bg-onyx">
      <Navbar />
      <Hero />
      <TheStory />
      <Menu />
      <TheProcess />
      <Reservation />
      <Footer />
    </main>
  );
}
