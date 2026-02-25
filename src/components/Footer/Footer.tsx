import Link from "next/link";
import styles from "./Footer.module.css";

const footerNav = [
  {
    heading: "Shop",
    links: [
      { label: "All Items", href: "/shop" },
      { label: "Clothing", href: "/shop/clothing" },
      { label: "Home Goods", href: "/shop/home-goods" },
      { label: "New Arrivals", href: "/shop?sort=newest" },
    ],
  },
  {
    heading: "Collections",
    links: [
      { label: "Spring Edit", href: "/collections/spring" },
      { label: "Workwear", href: "/collections/workwear" },
      { label: "Denim", href: "/collections/denim" },
      { label: "Natural Fibres", href: "/collections/natural-fibres" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Sustainability", href: "/about/sustainability" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Sizing Guide", href: "/sizing" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* Top row */}
        <div className={styles.top}>
          <Link href="/" className={styles.brand} aria-label="Reclaimed Treasures — Home">
            Reclaimed Treasures
          </Link>

          <nav className={styles.nav} aria-label="Footer navigation">
            {footerNav.map((col) => (
              <div key={col.heading} className={styles.navCol}>
                <p className={styles.navHeading}>{col.heading}</p>
                <ul className={styles.navList} role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.navLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Reclaimed Treasures. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
            <Link href="/accessibility" className={styles.legalLink}>Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
