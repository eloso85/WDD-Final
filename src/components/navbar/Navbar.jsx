"use client"

import React,{ useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import {sanityClient} from '../../../sanity/sanity-utils'


const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavigation = async () => {
      const query = '*[_type == "navigation"]';
      try {
        const data = await sanityClient.fetch(query);
        setNavItems(data);
        console.log("Data fetched and state updated:", data);
      } catch (error) {
        console.error('Error fetching navigation data:', error);
      }
    };

    fetchNavigation();
  }, []);

  
  
  return (

    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      
      <div className={`container-fluid px-4 ${styles.container}`}>
        <Link href="/" className={`navbar-brand d-flex align-items-center ${styles.brand}`}>
          <Image
            className={`d-inline-block me-2 ${styles.logo}`}
            src="/logo-removebg.png"
            width={50}
            height={40}
            alt="duck-logo"
          />
          <span className={styles.brandText}>WebDevDucks</span>
        </Link>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${styles.collapse}`}
          id="navbarNavDropdown"
        >
          <ul className={`navbar-nav  ${styles.navList}`}>
            
            <li className={`nav-item px-4 ${styles.navItem}`}>
              <Link href="/" className={`nav-link ${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li className={`nav-item px-4 ${styles.navItem}`}>
              <Link href="/blog" className={`nav-link ${styles.navLink}`}>
                Blog
              </Link>
            </li>
            <li className={`nav-item px-4 ${styles.navItem}`}>
              <Link href="/portfolio" className={`nav-link ${styles.navLink}`}>
                Portfolio
              </Link>
            </li>
            <li className={`nav-item px-4 ${styles.navItem}`}>
              <Link href="/about-us" className={`nav-link ${styles.navLink}`}>
                About Us
              </Link>
            </li>
            <li className={`nav-item px-4 ${styles.navItem}`}>
              <Link href="/contact-us" className={`nav-link ${styles.navLink}`}>
                Contact
              </Link>
            </li>
          </ul>
          <ul className={`navbar-nav ${styles.navRight}`}>
            <li className={`nav-item ms-lg-auto ${styles.navItem}`}>
              <Link href="/admin" className={`btn btn-primary btn-lg ${styles.navButton}`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
