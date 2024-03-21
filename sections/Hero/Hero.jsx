import styles from "./style.module.scss"

const Hero = () => (
    <section className="relative z-10">
        <div className="bg-[#F3F3F3]"
        >
            <div className={styles.headLine}>
                <div className={styles.header}>
                    <h1 className={styles.header1}>Join and Discover</h1>
                    <h1 className={styles.header2}>Art You Love</h1>
                </div>
                <div className={styles.subTitle}>
                    <p className={styles.heroSubheader}>
                        Are you an artist looking to showcase your talent to the right audience 
                        or perhaps you’re a buyer searching for that perfect piece of art? Scroll 
                        down to learn more
                    </p>
                </div>
            </div>

        </div>
    </section>


);

export default Hero;