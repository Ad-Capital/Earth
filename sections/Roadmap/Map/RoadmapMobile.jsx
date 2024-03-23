'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from "@/utils/motion"
import styles from "./style.module.scss"
import Link from 'next/link';

const smoothScroll = (href) => (e) => {
    e.preventDefault();
    const destination = document.querySelector(href);
    if (destination) {
        window.scrollTo({
            top: destination.offsetTop,
            behavior: 'smooth',
        });
    }
};

const Roadmap = () => {
    return (
        <section className={styles.Roadmap}>
            <motion.div
                variants={staggerContainer}
                className={styles.roadmapLayout}
            >
                <div
                    className={styles.Mobile}
                >
                    <div className={styles.mobilediv}>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.image}>
                            <img src="pic1.svg" alt="" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.5, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.phasediv}>
                            <h2 className={styles.phase}>Phase 01 - We’re here!</h2>
                            <div>
                                <h1 className={styles.title}>Ideation</h1>
                                <h2 className={styles.subtitle}>Creativity Takes Flight</h2>
                            </div>
                            <span className={styles.content}>
                                <p>We've set out on a quest to
                                    transform the art experience in
                                    this initial phase. </p><br />
                                <p>Our team has considered the
                                    approaches and frameworks
                                    necessary to realize our vision
                                    of a platform where creativity
                                    knows no limitations.</p>
                            </span>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.imageContainer}>
                            <img src="pic2.svg" alt="" className="" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.5, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.phasediv}>
                            <h2 className={styles.phase}>Phase 02</h2>
                            <div>
                                <h1 className={styles.title}>Community Building</h1>
                                <h2 className={styles.subtitle}>Connecting Art Lovers Worldwide</h2>
                            </div>
                            <span className={styles.content}>
                                <p>A thriving and encouraging
                                    community is necessary for art to
                                    flourish.</p><br />
                                <p>We concentrate on fostering
                                    connections throughout this stage.</p><br />
                                <p>In order to create a diverse and
                                    welcoming environment where ideas
                                    can freely flow, we reached out to
                                    artists, collectors, and enthusiasts
                                    from all over the world.</p><br />
                                <p>We're creating a community that
                                    values art in all of its forms together.</p>
                            </span>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.imageContainer}>
                            <img src="pic3.svg" alt="" className="" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.5, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.phasediv}>
                            <h2 className={styles.phase}>Phase 03</h2>
                            <div>
                                <h1 className={styles.title}>App Launch</h1>
                                <h2 className={styles.subtitle}>Unveiling the Canvas of Possibilities</h2>
                            </div>
                            <span className={styles.content}>
                                <p>The moment we've all been
                                    waiting for!</p><br />
                                <p>After dedicating extensive time
                                    and effort into its development,
                                    we are proud to present a
                                    platform that revolutionizes the
                                    art experience.</p><br />
                                <p>Through meticulous attention to
                                    detail, we have created a tool
                                    that empowers artists,
                                    captivates art enthusiasts, and
                                    pushes the boundaries of
                                    creativity.</p>
                            </span>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.imageContainer}>
                            <img src="pic4.svg" alt="" className="" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.5, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.phasediv}>
                            <h2 className={styles.phase}>Phase 04</h2>
                            <div>
                                <h1 className={styles.title}>User Adoption and <br /> Marketing</h1>
                                <h2 className={styles.subtitle}>Spreading the colors of Innovation <br />and creativity</h2>
                            </div>
                            <span className={styles.content}>
                                <p>Following the launch, we won't be
                                    stopping.</p><br />
                                <p>We'll focus on generating interest and
                                    expanding our user base throughout
                                    this phase.</p><br />
                                <p>We want to connect with art lovers all
                                    across the world through creative
                                    marketing tactics, alliances, and
                                    compelling campaigns.</p>
                            </span>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.3, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.imageContainer}>
                            <img src="pic5.svg" alt="" className="" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 'tween', 0.5, 1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                            className={styles.phasediv}>
                            <h2 className={styles.phase}>Phase 05</h2>
                            <div>
                                <h1 className={styles.title}>Scale</h1>
                                <h2 className={styles.subtitle}>Elevating Art to New Heights</h2>
                            </div>
                            <span className={styles.content}>
                                <p>As we enter this concluding stage
                                    of our roadmap, our vision
                                    expands.</p><br />
                                <p>We remain dedicated to
                                    continuous enhancement by
                                    actively seeking and
                                    incorporating your valuable
                                    feedback while striving towards
                                    reaching new heights through the
                                    expansion of our platform.</p><br />
                                <p>Our ultimate objective is to
                                    establish ourselves as a global
                                    hub for artists, collectors, and art
                                    enthusiasts alike.</p>
                            </span>
                        </motion.div>
                    </div>
                    <Link href="#Roadmap" onClick={smoothScroll('#Roadmap')} className={styles.blackbuttonMobile}>
                        <img src="blackButton.svg" alt="" className={styles.button} />
                    </Link>
                </div>
            </motion.div>


        </section>

    )

};

export default Roadmap;