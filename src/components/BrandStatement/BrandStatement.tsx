import styles from "./BrandStatement.module.css";

export default function BrandStatement() {
  return (
    <section className={styles.section} aria-label="About Reclaimed Treasures">
      <div className={styles.inner}>
        <div className={styles.labelCol}>
          <p className={styles.label}>About Us</p>
        </div>
        <div className={styles.textCol}>
          <p className={styles.statement}>
            Things made to last.
            <br />
            <em>Objects that go with you.</em>
          </p>
          <p className={styles.body}>
            Every piece we carry is chosen for its construction, provenance, and
            potential for another decade of use. We stock vintage garments and
            home goods that were built before things were made to be replaced.
          </p>
        </div>
      </div>
      <div className={styles.divider} aria-hidden="true" />
    </section>
  );
}
