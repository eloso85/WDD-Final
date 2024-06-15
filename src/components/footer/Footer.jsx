import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={`text-center ${styles.footer}`}>
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`} id="wave1"></div>
        <div className={`${styles.wave} ${styles.wave2}`} id="wave2"></div>
        <div className={`${styles.wave} ${styles.wave3}`} id="wave3"></div>
        <div className={`${styles.wave} ${styles.wave4}`} id="wave4"></div>
      </div>
      <ul className={`list-inline ${styles.socialIcon}`}>
        <li className="list-inline-item">
          <Link href="#" passHref>
            <span className={styles.socialIconLink}>
            <FaFacebook />
            </span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#" passHref>
            <span className={styles.socialIconLink}>
            <FaTwitter />
              
            </span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#" passHref>
            <span className={styles.socialIconLink}>
            <FaLinkedin />
            </span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#" passHref>
            <span className={styles.socialIconLink}>
            <FaInstagram />
            </span>
          </Link>
        </li>
      </ul>
      <ul className={`list-inline ${styles.menu}`}>
        <li className="list-inline-item">
          <Link href="/" passHref>
            <span className={styles.menuLink}>Home</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/blog" passHref>
            <span className={styles.menuLink}>Blog</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/portfolio" passHref>
            <span className={styles.menuLink}>Portfolio</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/about-us" passHref>
            <span className={styles.menuLink}>About Us</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/contact-us" passHref>
            <span className={styles.menuLink}>Contact</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/admin" passHref>
            <span className={styles.menuLink}>Login</span>
          </Link>
        </li>
      </ul>

      <Link href="/" className="navbar-brand">
        <Image
          className="d-inline-block"
          src="/logo-removebg.png"
          width={50}
          height={40}
          alt="duck-logo"
        />
        &copy;WebDevDucks | All Rights Reserved
      </Link>
    </footer>
  );
};

export default Footer;
