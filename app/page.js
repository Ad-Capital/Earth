import { Cards, Navbar } from "@/components";
import { Hero, YoutubeVideo, About, Explore, Values, Marketplace, FAQ } from "@/sections";
import Contact from "@/sections/Contact/Contact";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function Home() {
  return (
    <main className={`${poppins.className}flex min-h-screen flex-col body`}>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <YoutubeVideo />
      <div className="Gradient">
        <Explore />
        <Values />
      </div>
      <Marketplace />
      <FAQ />
      <Contact />
    </main>
  );
}
