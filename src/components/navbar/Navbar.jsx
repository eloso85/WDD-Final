"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

import { sanityClient, urlFor } from "../../../sanity/sanity-utils";

const Navbar = () => {
  const [navItems, setNavItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNavigation = async () => {
      const query = '*[_type == "navigation"][0]';
      try {
        const data = await sanityClient.fetch(query);
        setNavItems(data);
        // console.log("Data fetched and state updated:", data);
      } catch (error) {
        // console.error("Error fetching navigation data:", error);
      }
    };

    fetchNavigation();
  }, []);
  // if (loading) return <div>Loading...</div>; // Display loading indicator
  if (error) return <div>Error loading navigation data</div>; // Display error message
  if (!navItems) return null; // Render nothing if navItems is null

  // Extract the necessary properties
  const { companyName, logo, navLinks, socialMedia, logoLink,cta } = navItems;
  const logoUrl = logo && logo.asset ? urlFor(logo.asset._ref).width(100).url() : null;
  

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className={`container-fluid px-4 ${styles.container}`}>
        <Link
          href={logoLink}
          className={`navbar-brand d-flex align-items-center ${styles.brand}`}
        >
          <Image
            className={`d-inline-block me-2 ${styles.logo}`}
            src={logoUrl}
            
            
            width={50}
            height={40}
            alt="duck-logo"
          />
          <span className={styles.brandText}>{companyName}</span>
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
        <ul className={`navbar-nav ${styles.navList}`}>
  {navLinks && navLinks.map((link) => (
    <li className={`nav-item px-4 ${styles.navItem} ${link.dropdown ? 'dropdown' : ''}`} key={link._key}>
      {link.dropdown ? (
        <>
          <a className={`nav-link dropdown-toggle ${styles.navLink}`} href="#" id={`navbarDropdown${link._key}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {link.text}
          </a>
          <ul className={`dropdown-menu ${styles.dropdownMenu}`} aria-labelledby={`navbarDropdown${link._key}`}>
            {link.dropdown.map((sublink) => (
              <li key={sublink._key}>
                <Link className={`dropdown-item ${styles.dropdownItem}`} href={sublink.url}>
                  {sublink.text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link className={`nav-link ${styles.navLink}`} href={link.url}>
          {link.text}
        </Link>
      )}
    </li>
  ))}
</ul>
          <ul className={`navbar-nav ${styles.navRight}`}>
            <li className={`nav-item ms-lg-auto ${styles.navItem}`}>
              <Link
                href={cta.link}
                className={`btn btn-primary btn-lg ${styles.navButton}`}
              >
                {cta.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
