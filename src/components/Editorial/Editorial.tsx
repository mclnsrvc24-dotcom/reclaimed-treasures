import Link from "next/link";
import styles from "./Editorial.module.css";

export default function Editorial() {
  return (
    <section className={styles.section} aria-label="Editorial">
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowIcon} aria-hidden="true" />
          Our Ethos
        </p>

        <blockquote className={styles.quote}>
          "Wear it. Live in it. Pass it on."
        </blockquote>

        <p className={styles.body}>
          Every piece has a history. We believe the best things are the ones
          that outlast trends, seasons, and the people who first owned them.
        </p>

        <Link href="/about" className={styles.cta}>
          Read our story
          <span aria-hidden="true"> →</span>
        </Link>
      </div>

      <div className={styles.bottomBorder} aria-hidden="true" />
    </section>
  );
}
