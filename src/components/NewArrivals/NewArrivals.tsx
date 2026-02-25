import Link from "next/link";
import { newArrivalsProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./NewArrivals.module.css";

export default function NewArrivals() {
  return (
    <section className={styles.section} aria-label="New arrivals">
      <div className={styles.topDivider} aria-hidden="true" />

      <div className={styles.header}>
        <div className={styles.headerInner}>
          <h2 className={styles.heading}>New Arrivals</h2>
          <Link href="/shop?sort=newest" className={styles.viewAll}>
            View all
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>

      {/* Scrollable strip */}
      <div className={styles.scrollOuter}>
        <ul className={styles.track} role="list" aria-label="New arrival products">
          {newArrivalsProducts.map((product) => (
            <li key={product.id} className={styles.item}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottomDivider} aria-hidden="true" />
    </section>
  );
}
