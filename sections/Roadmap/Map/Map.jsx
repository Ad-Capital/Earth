'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { RoadmapMobile } from '@/sections'
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
    <section id="Roadmap" className={styles.Map}>
      <motion.div
        variants={staggerContainer}
        className={styles.mapLayout}
      >
        <div className={styles.mapdiv}>
          <div className={styles.mapsubdiv}>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapImage}>
              <img src="pic1.svg" alt="" className="" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapCard}>
              <h2 className={styles.mapPhase2}>Phase 02</h2>
              <div>
                <h1 className={styles.mapTitle}>Community Building</h1>
                <h2 className={styles.mapSubtitle}>Connecting Art Lovers Worldwide</h2>
              </div>
              <div className={styles.mapContent2}>
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
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapImage3}>
              <img src="pic3.svg" alt="" className="" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapCard}>
              <h2 className={styles.mapPhase4}>Phase 04</h2>
              <div>
                <h1 className={styles.mapTitle}>User Adoption and <br /> Marketing</h1>
                <h2 className={styles.mapSubtitle}>Spreading the colors of Innovation <br />and creativity</h2>
              </div>
              <div className={styles.mapContent}>
                <p>Following the launch, we won't be
                  stopping.</p><br />
                <p>We'll focus on generating interest and
                  expanding our user base throughout
                  this phase.</p><br />
                <p>We want to connect with art lovers all
                  across the world through creative
                  marketing tactics, alliances, and
                  compelling campaigns.</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapImage5}>
              <img src="pic5.svg" alt="" className="" />
            </motion.div>
          </div>
          <img src="line.svg" alt="" className={styles.line} />
          <div className={styles.mapsubdiv2}>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapCard}>
              <h2 className={styles.mapPhase}>Phase 01 - We’re here!</h2>
              <div>
                <h1 className={styles.mapTitle}>Ideation</h1>
                <h2 className={styles.mapSubtitle}>Creativity Takes Flight</h2>
              </div>
              <div className={styles.mapContent}>
                <p>We've set out on a quest to
                  transform the art experience in
                  this initial phase. </p><br />
                <p>Our team has considered the
                  approaches and frameworks
                  necessary to realize our vision
                  of a platform where creativity
                  knows no limitations.</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapImage2}>
              <img src="pic2.svg" alt="" className="" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapCard}>
              <h2 className={styles.mapPhase3}>Phase 03</h2>
              <div>
                <h1 className={styles.mapTitle}>App Launch</h1>
                <h2 className={styles.mapSubtitle}>Unveiling the Canvas of Possibilities</h2>
              </div>
              <div className={styles.mapContent}>
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
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.3, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapImage4}>
              <img src="pic4.svg" alt="" className="" />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 'tween', 0.5, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={styles.mapCard}>
              <h2 className={styles.mapPhase5}>Phase 05</h2>
              <div>
                <h1 className={styles.mapTitle}>Scale</h1>
                <h2 className={styles.mapSubtitle}>Elevating Art to New Heights</h2>
              </div>
              <div className={styles.mapContent}>
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
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Link href="#Roadmap" onClick={smoothScroll('#Roadmap')} className={styles.blackbutton}>
        <img src="blackButton.svg" alt="" className={styles.button} />
      </Link>
      <RoadmapMobile />

    </section>

  )

};

export default Roadmap;