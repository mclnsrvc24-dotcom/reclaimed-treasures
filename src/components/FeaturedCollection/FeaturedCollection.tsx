import Link from "next/link";
import { featuredProduct, gridProducts } from "@/lib/data";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./FeaturedCollection.module.css";

export default function FeaturedCollection() {
  return (
    <section className={styles.section} aria-label="Featured collection">
      <div className={styles.inner}>

        {/* Header row */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Shop</h2>
          <Link href="/shop" className={styles.viewAll}>
            View all
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Grid */}
        <ul className={styles.grid} role="list">
          {/* Featured card — spans 2 columns on desktop */}
          <li className={styles.featuredItem}>
            <ProductCard product={featuredProduct} isLarge />
          </li>

          {/* Standard cards */}
          {gridProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
