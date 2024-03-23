import React from 'react';
import { ReadMore } from '.';
import styles from '../sections/About/style.module.scss';
import Link from 'next/link';
import Rounded from "@/constants/RoundedButtons"


const About = () => {
    const aboutText = `
    Here at Earth, we believe in the power of art to move, to
    inspire, and to connect. We're on a mission to break down
    barriers and make art more accessible to all. Whether you're a
    seasoned collector or a budding artist, you'll find a place to
    belong in our diverse and dynamic community.
    
    \n\n\n 

    Our curated collections showcase the best and brightest
    talents from around the globe, spanning every style, medium,
    and genre imaginable. From bold brushstrokes to intricate
    sculptures, there's something here to capture every heart and
    imagination.

    \n\n 

    But Earth is more than just a platform—it's a movement. It's a 
    rallying cry for all those who believe in the transformative 
    power of art. It's a celebration of creativity, diversity, and 
    the human spirit. And it's a promise to support and uplift artists at 
    every stage of their journey.

    \n\n 

    So join us on Earth and be part of something extraordinary. 
    Whether you're here to discover, to create, or simply to be 
    inspired, you'll find a warm welcome and a world of possibility 
    waiting for you.
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
