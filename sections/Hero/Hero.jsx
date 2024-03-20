import styles from "./style.module.scss"

const Hero = () => (
    <section className="relative z-10">
        <div className="bg-[#F3F3F3]"
        >
            <div className={styles.headLine}>
                <img src="headline.svg" alt="headline" />
                <div className={styles.subTitle}>
                    <img src="subTitle.svg" alt="" />
                </div>
            </div>
            
        </div>
    </section>


);

export default Hero;