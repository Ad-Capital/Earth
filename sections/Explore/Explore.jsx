import Link from "next/link";
import Rounded from "@/constants/RoundedButtons"
import styles from "./style.module.scss"

const About = () => (
  <section className={styles.explore}>
    <div className={styles.exploreLayout}>
      <div className={styles.question}>
        <div className={styles.title}>
          <h1>
            Why become
          </h1>
          <h1 className={styles.title2}>
            an Earthling?
          </h1>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardsdiv}>
          <div className={styles.cardsrow1}>
            <div className={styles.imageContainer}><img src="Card1.svg" alt="" className={styles.image}/></div>
            <div className={styles.imageContainer}><img src="Card2.svg" alt="" className={styles.image}/></div> 
          </div>
          <div className={styles.cardsrow2}>
            <div className={styles.imageContainer}><img src="Card3.svg" alt="" className={styles.image}/></div>
            <div className={styles.imageContainer}><img src="Card4.svg" alt="" className={styles.image}/></div>
          </div>
        </div>
      </div>
      <Link href="" className={styles.link}>
        <Rounded>
          <p className="font-bold text-white">Join community</p>
        </Rounded>
      </Link>
    </div>

  </section>
);

export default About;