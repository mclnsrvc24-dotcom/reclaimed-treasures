"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.inner}>

          {/* Left — menu trigger */}
          <button
            className={styles.menuTrigger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
            <span>Menu</span>
          </button>

          {/* Center — brand */}
          <Link href="/" className={styles.brand} aria-label="Reclaimed Treasures — Home">
            Reclaimed Treasures
          </Link>

          {/* Right — desktop links + actions */}
          <div className={styles.right}>
            <ul className={styles.desktopLinks} role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Link href="/search" className={styles.iconBtn} aria-label="Search">
                <SearchIcon />
              </Link>
              <Link href="/cart" className={styles.iconBtn} aria-label="Bag — 0 items">
                <BagIcon />
              </Link>
            </div>
          </div>

        </div>
        <div className={styles.border} aria-hidden="true" />
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className={styles.drawerClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span>Close</span>
        </button>

        <nav aria-label="Mobile navigation">
          <ul className={styles.drawerLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <Link href="/cart" className={styles.drawerAction} onClick={() => setMenuOpen(false)}>
            Bag
          </Link>
          <Link href="/search" className={styles.drawerAction} onClick={() => setMenuOpen(false)}>
            Search
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.25" />
      <line x1="11" y1="11" x2="15.5" y2="15.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <rect x="1.5" y="5.5" width="14" height="10" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.5 5.5V4a3 3 0 016 0v1.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
