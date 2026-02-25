import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  isLarge?: boolean;
}

export default function ProductCard({ product, isLarge = false }: ProductCardProps) {
  const { name, variant, price, originalPrice, tag, slug, image } = product;
  const href = `/products/${slug}`;

  return (
    <article className={`${styles.card} ${isLarge ? styles.cardLarge : ""}`}>
      {/* Image */}
      <Link href={href} className={styles.imageLink} tabIndex={-1} aria-hidden="true">
        <div className={`${styles.image} ${isLarge ? styles.imageLarge : ""}`}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Tag */}
        {tag && (
          <span
            className={`${styles.tag} ${
              tag === "Sale"
                ? styles.tagSale
                : tag === "Sold"
                ? styles.tagSold
                : styles.tagDefault
            }`}
            aria-label={tag}
          >
            {tag}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className={styles.info}>
        <Link href={href} className={styles.name}>
          {name}
        </Link>
        <p className={styles.variant}>{variant}</p>
        <div className={styles.priceRow}>
          {originalPrice ? (
            <>
              <span className={`${styles.price} ${styles.priceSale}`}>
                ${price}
              </span>
              <span className={`${styles.price} ${styles.priceOriginal}`}>
                ${originalPrice}
              </span>
            </>
          ) : (
            <span className={styles.price}>${price}</span>
          )}
        </div>
      </div>
    </article>
  );
}
