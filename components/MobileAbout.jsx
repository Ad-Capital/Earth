import React from 'react';
import { ReadMore } from '.';
import styles from '../sections/About/style.module.scss';
import Link from 'next/link';
import Rounded from "@/constants/RoundedButtons"


const About = () => {
    const aboutText = `
    EARTH is the World of Art that Loves, Shares and Expresses Art
    in its Authenticity. You probably got that much from the
    heading, but let’s paint a picture together shall we? 
    
    \n\n\n 

    Imagine a world where art can be expressed and experienced
    without limitations, where everyone is given the opportunity to
    enjoy everything art has to offer and more and an ecosystem
    where creatives and art lovers can peacefully coexist. Yes!
    That world. That world is EARTH.

    \n\n 

    We believe the Art World is a place for EVERYONE. That’s why
    we use technology to create a safe and stress-free
    environment for the artist to sell his work commission free and
    for buyers to find art pieces that would bring smiles to their
    faces, warmth to their hearts and stories to their children.

    \n\n 

    And artists who feel like they aren’t seen? We help them find
    their place in the limelight, making sure that they find the
    right audience…or the right audience finds them, putting them
    in a space where their art can speak freely and be heard. Any
    artist can become seen by the world because we put the
    spotlight on you.

    \n\n 

    So take this giant leap for Art kind by clicking the button
    below to join our discord community and find your place on
    EARTH.
  `;

    return (
        <section className={styles.About} id='about'>
            <div>
                <div className={styles.MobileAbout}>
                    <ReadMore text={aboutText} maxLength={490} />
                </div>
                
            </div>
        </section>

    );
};

export default About;
