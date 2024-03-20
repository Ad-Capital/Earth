import React from 'react'
import Layout from '@/components/ValueParallax/Layout';
import styles from "./style.module.scss"
import { MobileCarousel } from '@/components';


const ScrollParallax = () => {
  return (
    <section className={styles.Values}>
      <div className={styles.valuesLayout}>
        <Layout />
        <div className={styles.valuesdiv}>
          <div className={styles.valuesText}>
            <h4 className={styles.weValue}>We value</h4>
          </div>
        </div>
        <MobileCarousel />
      </div>

    </section>

  )
}

export default ScrollParallax