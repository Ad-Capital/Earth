'use client';


import styles from "./style.module.scss"


const Hero = () => (
  <section className={styles.hero}>
    <div className="text-white"
    >
      <div>
        <div>
          <div className={styles.herodiv}>
            <h1 className={styles.roadmapHeader}>Roadmap</h1>
            <p className={styles.heroSubheader}>
              At Earth, our journey towards redefining the art world is built on a solid 
              roadmap that guides our every step. We're excited to share our vision and 
              progress with you. Here's a glimpse of what lies ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Hero;