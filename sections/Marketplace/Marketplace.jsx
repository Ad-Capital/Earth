import React from 'react';
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import styles from "./style.module.scss"

const Marketplace = () => {
  return (
    <div id="market" className='marketplaceGradient'>
      <div className={styles.marketPlace}>
        <div className={styles.marketplacediv}>
          <h2 className={styles.headline}>Buy and sell authentic art works</h2>
          <p className={styles.content}>We are building a place where your art can thrive while cashing out on your talent and artistic skills. A place where buyers can find art they desire and can trust.</p>

          <div className='flex gap-2'>
            <Link href='/' passHref>
              <p className={styles.link}>
                Join the waiting list
              </p>
            </Link>
            <LuArrowUpRight className='text-[#1E0734]' />
          </div>
        </div>

        <div className='md:mt-12  ml-[20%] lg:ml-0 md:ml-0 justify-items-end w-fit'>
          <img src="/phones.svg" alt="phones" className='' />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
