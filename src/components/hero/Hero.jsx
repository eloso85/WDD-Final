import React from 'react';
import Image from 'next/image';
import styles from './hero.module.css'



const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Image src='/hero2-blk.png' alt="Hero Image" layout="fill" objectFit="cover" quality={100} />
      <div className={styles.imageOverlay}></div> {/* Overlay for better text visibility */}
      <div className={styles.overlayContent}>
        <h1 className={styles.title}>Welcome to Our Website!</h1>
        <p className={styles.description}>Join us to explore more.</p>
        <button className={`btn ${styles.customBtn}`}>Learn More</button>
      </div>
    </div>
  )
}

export default Hero