import React from 'react'
import Link from 'next/link';
import { LuArrowUpRight } from 'react-icons/lu';
import styles from "./style.module.scss"


const YoutubeVideo = () => {
  return (
    <div className={styles.YoutubeBackground}>
      <div className={styles.container}>
        <iframe className={styles.embedVideo} src="https://www.youtube.com/embed/T6DEe8XUzbc?si=qVAZdpoQqzAau9Ls" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className={styles.youtubeText}>
        <p className={styles.subTitle}>All New Seasons</p>
        <h2 className={styles.title}>Meet the mind</h2>
        <p className={styles.content}>Experience our captivating video series, 'Meet the Mind', which delves into the world of art through the lens of various visual artists. </p>

        <div className='flex gap-2'>
          <Link href='/' passHref>
            <p className={styles.link}>
              Watch all new seasons!
            </p>
          </Link>
          <LuArrowUpRight className='text-[#1E0734]' />
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideo;