'use client';

import Link from 'next/link';
import Rounded from "@/constants/RoundedButtons"
import styles from "./style.module.scss"


const Navbar = () => (
  <nav
    className={styles.nav}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <div className="w-[180px] h-[50px]">
        <Link href={"/"}>
          <img
            src="/roadMapLogo.svg"
            alt="logo"
            className="w-[60px] h-[60px] object-contain"
          /></Link>
      </div>
      <div className="lg:flex justify-between hidden gap-[30px] py-3 text-white">
        <span className={styles.link}>
          <Link href="/#about">
              <p>About</p>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/roadMap">
              <p>Roadmap</p>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/#FAQ">
              <p>FAQs</p>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/#market">
              <p>Marketplace</p>
          </Link>
        </span>
        <span className={styles.link}>
          <Link href="/About">
              <p>Store</p>
          </Link>
        </span>
      </div>
      <Link href="" className="lg:flex hidden">
        <Rounded>
          <p className="font-bold text-white">Join Community</p>
        </Rounded>
      </Link>

    </div>
  </nav>
);

export default Navbar;