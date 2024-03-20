import React from 'react';
import Link from 'next/link';
import { Footer } from '@/components';
import Rounded from "@/constants/RoundedButtons"
import styles from "./style.module.scss"
import Copyright from '@/components/Copyright';


const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactdiv}>
        <div className="contactCurve">
          <svg data-name="Layer 1" xmlns="http4px://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
          </svg>
        </div>
        <div className='pt-24 sm:w-[640px]'>
          <h1 className={styles.headline}>Did Someone say fun mail?</h1>
          <p className={styles.subheader}>Sign up now to receive exclusive updates, artist features, <br/>exciting events, and special offers straight to your inbox.</p>
          <div className={styles.flexStart}>
            <div className={styles.inputsdiv}>
              <input type='text' required placeholder='First name' className={styles.inputs} />
            </div>
            <div className={styles.inputsdiv}>
              <input type='email' required placeholder='Email' className={styles.inputs} />
            </div>
            <div>
              <Link href="">
                <Rounded>
                  <p className="font-bold text-white">Submit</p>
                </Rounded>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <Copyright />

    </section>
  );
};

export default Contact;
