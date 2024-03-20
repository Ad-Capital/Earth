import { Map, Navbar, RoadmapContact, RoadmapHero } from "@/sections";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export default function roadmap() {
    return(
        <main className={`${poppins.className}flex min-h-screen flex-col image-background`}>
            <div className="roadmapGradient">
                <Navbar />
                <RoadmapHero />
            </div>
            <Map />
            <RoadmapContact />
            
        </main>
        
    )
}