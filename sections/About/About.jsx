import Link from "next/link";
import Rounded from "@/constants/RoundedButtons"
import styles from "./style.module.scss"
import MobileAbout from "@/components/MobileAbout"


const About = () => (
    <section className={styles.About} id="about">
        <div className={styles.aboutLayout}>
            <img src="aboutHeading.svg" alt="" className={styles.aboutHeading} />
                <div className={styles.aboutText}>
                    <p>EARTH is the World of Art that Loves, Shares and Expresses Art
                        in its Authenticity. You probably got that much from the
                        heading, but let’s paint a picture together shall we? </p><br />
                    <p>Imagine a world where art can be expressed and experienced
                        without limitations, where everyone is given the opportunity to
                        enjoy everything art has to offer and more and an ecosystem
                        where creatives and art lovers can peacefully coexist. Yes!
                        That world. That world is EARTH. </p><br />
                    <p>We believe the Art World is a place for EVERYONE. That’s why
                        we use technology to create a safe and stress-free
                        environment for the artist to sell his work commission free and
                        for buyers to find art pieces that would bring smiles to their
                        faces, warmth to their hearts and stories to their children. </p><br />
                    <p>And artists who feel like they aren’t seen? We help them find
                        their place in the limelight, making sure that they find the
                        right audience…or the right audience finds them, putting them
                        in a space where their art can speak freely and be heard. Any
                        artist can become seen by the world because we put the
                        spotlight on you. </p><br />
                    <p>So take this giant leap for Art kind by clicking the button
                        below to join our discord community and find your place on
                        EARTH.</p>
                </div>
            <MobileAbout />
            <Link href="" className={styles.button}>
                <Rounded>
                    <p className="font-bold text-white">Join our discord community</p>
                </Rounded>
            </Link>
        </div>

    </section>
);

export default About;