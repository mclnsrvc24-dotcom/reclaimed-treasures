import Image from "next/image";
import { heroImage } from "@/lib/data";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left — content */}
        <div className={styles.content}>
          <div className={styles.trigger} aria-hidden="true">
            <span className={styles.triggerIcon} />
            <span>Menu</span>
          </div>

          <p className={styles.tagline}>
            Vintage clothing &amp; home goods upcycled with simplicity,
            durability, and unwavering reliability to take you exactly
            where you need to be.
          </p>

          <h1 className={styles.brand} aria-label="Reclaimed Treasures">
            Reclaimed<br />Treasures
          </h1>
        </div>

        {/* Right — image */}
        <div className={styles.imageWrapper}>
          <Image
            src={heroImage}
            alt="Vintage clothing and home goods collection by Reclaimed Treasures"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      <div className={styles.bottomBorder} aria-hidden="true" />
    </section>
  );
}
