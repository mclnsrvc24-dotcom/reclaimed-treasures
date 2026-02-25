# Reise — Component Specifications

**Version:** 1.0.0
**Design System:** Reise v1
**Format:** Atomic Design (Atoms → Molecules → Organisms → Templates)

All components consume tokens from `tokens.css`. Token references use the CSS custom property name.

---

## Table of Contents

- [Atoms](#atoms)
  - [Typography](#typography-atoms)
  - [Buttons](#buttons)
  - [Inputs & Form Elements](#inputs--form-elements)
  - [Divider](#divider)
  - [Tag / Badge](#tag--badge)
  - [Image](#image)
- [Molecules](#molecules)
  - [Navigation Bar](#navigation-bar)
  - [Product Card](#product-card)
  - [Price Display](#price-display)
  - [Form Group](#form-group)
  - [Breadcrumb](#breadcrumb)
  - [Quantity Selector](#quantity-selector)
  - [Size Selector](#size-selector)
- [Organisms](#organisms)
  - [Site Header](#site-header)
  - [Hero — Editorial Split](#hero--editorial-split)
  - [Product Grid](#product-grid)
  - [Product Detail](#product-detail)
  - [Cart Drawer](#cart-drawer)
  - [Newsletter Banner](#newsletter-banner)
  - [Site Footer](#site-footer)
- [Templates](#templates)
  - [Home Page](#home-page)
  - [Collection / Shop Page](#collection--shop-page)
  - [Product Detail Page (PDP)](#product-detail-page-pdp)
  - [Cart & Checkout](#cart--checkout)

---

## Atoms

### Typography Atoms

#### Brand Mark

The "Reise" wordmark. Shown large at the bottom-left of the hero and as a compact logotype in the site header.

```html
<span class="brand-mark">Reise</span>
```

```css
.brand-mark {
  font-family: var(--font-display);
  font-weight: var(--weight-light);
  letter-spacing: var(--tracking-tightest);
  line-height: var(--leading-none);
  color: var(--color-text-primary);
}

/* Hero size — fluid */
.brand-mark--hero {
  font-size: clamp(4rem, 12vw, 9rem);
}

/* Compact logotype in nav */
.brand-mark--nav {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
}
```

**Variants:** `--hero` (full-bleed display), `--nav` (compact header), `--footer` (inverted)
**States:** Default only. No hover state on the brand mark itself.
**Accessibility:** Wrap in `<a href="/">` with `aria-label="Reise — Home"`.

---

#### Heading System

| Element | Class | Font | Size Token | Weight | Tracking |
|---------|-------|------|------------|--------|----------|
| `<h1>` | `.heading-1` | Display | `--text-3xl` | 400 | `--tracking-tight` |
| `<h2>` | `.heading-2` | Display | `--text-2xl` | 400 | 0 |
| `<h3>` | `.heading-3` | Display | `--text-xl` | 400 | 0 |
| `<h4>` | `.heading-4` | Display | `--text-lg` | 400 | 0 |
| `<h5>` | `.heading-5` | Body | `--text-xs` (caps) | 500 | `--tracking-widest` |

H5 is reserved for all-caps UI labels inside component headers (e.g., "FILTER BY", "DETAILS").

```css
.heading-1 {
  font-family: var(--font-display);
  font-size: clamp(var(--text-2xl), 5vw, var(--text-3xl));
  font-weight: var(--weight-regular);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-text-primary);
}

.heading-5, .label-ui {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-secondary);
}
```

---

#### Body Text

```css
.body-lead {
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--weight-light);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  max-width: 60ch;
}

.body-copy {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-light);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  max-width: 65ch;
}

.body-sm {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-text-tertiary);
}
```

---

### Buttons

#### Primary Button — `btn-primary`

Dark fill, light text. Used for primary actions: "Add to Bag," "Checkout," "Subscribe."

```html
<button class="btn btn-primary">Add to Bag</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  border-radius: var(--radius-none);
  border: 1px solid transparent;
  cursor: pointer;
  transition: var(--btn-transition);
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

.btn-primary {
  background-color: var(--primitive-ink-900);
  color: var(--primitive-cream-0);
  border-color: var(--primitive-ink-900);
}

.btn-primary:hover {
  background-color: var(--primitive-ink-700);
  border-color: var(--primitive-ink-700);
}

.btn-primary:active {
  background-color: var(--primitive-ink-600);
  transform: scale(0.99);
}

.btn-primary:disabled {
  background-color: var(--color-action-disabled);
  border-color: var(--color-action-disabled);
  cursor: not-allowed;
  pointer-events: none;
}
```

---

#### Ghost Button — `btn-ghost`

Transparent with ink border. Used for secondary actions: "View All," "Learn More."

```html
<button class="btn btn-ghost">View Collection</button>
```

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-text-primary);
  border-color: var(--color-border-strong);
}

.btn-ghost:hover {
  background-color: var(--color-bg-muted);
}
```

---

#### Text Link Button — `btn-text`

No border, no background. Underline on hover. For inline tertiary actions.

```html
<button class="btn btn-text">Read more</button>
```

```css
.btn-text {
  background: none;
  border: none;
  padding: var(--space-1) 0;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--weight-regular);
  letter-spacing: var(--tracking-normal);
  text-transform: none;
  color: var(--color-text-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-border-subtle);
  transition: text-decoration-color var(--duration-normal) var(--ease-editorial);
}

.btn-text:hover {
  text-decoration-color: var(--color-text-primary);
}
```

---

#### Button Sizes

| Size | Class | Padding | Font Size |
|------|-------|---------|-----------|
| Small | `.btn--sm` | 10px 24px | `--text-2xs` |
| Default | (none) | 12px 32px | `--text-xs` |
| Large | `.btn--lg` | 16px 48px | `--text-xs` |
| Full-width | `.btn--full` | (default) | `--text-xs` |

```css
.btn--sm  { padding: var(--space-2-5) var(--space-6); font-size: var(--text-2xs); }
.btn--lg  { padding: var(--space-4) var(--space-12); }
.btn--full { width: 100%; }
```

---

### Inputs & Form Elements

#### Text Input

```html
<div class="form-field">
  <label class="form-label" for="email">Email address</label>
  <input class="input" type="email" id="email" placeholder="your@email.com">
</div>
```

```css
.input {
  width: 100%;
  background-color: var(--input-bg);
  border: var(--input-border);
  border-radius: var(--input-radius);
  padding: var(--input-padding-y) var(--input-padding-x);
  font-family: var(--input-font);
  font-size: var(--input-font-size);
  font-weight: var(--weight-light);
  color: var(--input-text);
  line-height: var(--leading-normal);
  transition: border-color var(--duration-normal) var(--ease-editorial);
  -webkit-appearance: none;
  appearance: none;
}

.input::placeholder {
  color: var(--input-placeholder);
  font-weight: var(--weight-light);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-focus);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### Form Label

```css
.form-label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2);
}
```

#### Select

```html
<select class="input input-select">
  <option>All sizes</option>
</select>
```

```css
.input-select {
  padding-right: var(--space-10);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231C1814' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  cursor: pointer;
}
```

---

### Divider

The dotted line — Reise's primary decorative motif.

```html
<!-- Standard section divider -->
<hr class="divider">

<!-- Strong dotted divider -->
<hr class="divider divider--strong">
```

```css
.divider {
  border: none;
  border-top: var(--border-dotted-subtle);
  margin: 0;
}

.divider--strong {
  border-top: var(--border-dotted);
}

.divider--muted {
  border-top: var(--border-dotted-muted);
}
```

---

### Tag / Badge

```html
<span class="tag">Vintage</span>
<span class="tag tag--inverted">New Arrival</span>
<span class="tag tag--sale">Sale</span>
```

```css
.tag {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-2xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-none);
  color: var(--color-text-secondary);
  background: transparent;
}

.tag--inverted {
  background-color: var(--color-bg-inverted);
  color: var(--color-text-inverted);
  border-color: var(--color-bg-inverted);
}

.tag--sale {
  background-color: var(--primitive-error);
  color: var(--primitive-cream-0);
  border-color: var(--primitive-error);
}
```

---

### Image

```html
<!-- Standard product image -->
<figure class="product-image">
  <img src="..." alt="..." width="800" height="1067" loading="lazy">
</figure>

<!-- Featured editorial image with offset shadow -->
<figure class="product-image product-image--featured">
  <img src="..." alt="..." width="800" height="1067">
</figure>
```

```css
.product-image {
  overflow: hidden;
  aspect-ratio: var(--card-image-aspect); /* 3:4 */
  background-color: var(--color-bg-subtle);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform var(--duration-slower) var(--ease-editorial);
}

.product-image:hover img {
  transform: scale(1.03);
}

.product-image--featured {
  box-shadow: var(--shadow-image);
}
```

---

## Molecules

### Navigation Bar

The top bar. Minimal: brand mark left, navigation right, icons right. A dotted line runs beneath it.

```html
<nav class="nav" aria-label="Main navigation">
  <div class="nav__inner">

    <!-- Mobile menu trigger -->
    <button class="nav__trigger" aria-expanded="false" aria-controls="mobile-menu">
      <span class="nav__trigger-icon" aria-hidden="true"></span>
      <span class="nav__label">Menu</span>
    </button>

    <!-- Brand mark -->
    <a class="nav__brand brand-mark brand-mark--nav" href="/" aria-label="Reise — Home">
      Reise
    </a>

    <!-- Desktop links -->
    <ul class="nav__links" role="list">
      <li><a class="nav__link" href="/shop">Shop</a></li>
      <li><a class="nav__link" href="/collections">Collections</a></li>
      <li><a class="nav__link" href="/about">About</a></li>
      <li><a class="nav__link" href="/journal">Journal</a></li>
    </ul>

    <!-- Utility actions -->
    <div class="nav__actions">
      <a class="nav__action-btn" href="/search" aria-label="Search">
        <!-- Search icon SVG -->
      </a>
      <a class="nav__action-btn" href="/cart" aria-label="Cart (0 items)">
        <!-- Bag icon SVG -->
        <span class="nav__cart-count" aria-hidden="true">0</span>
      </a>
    </div>

  </div>
  <hr class="divider">
</nav>
```

```css
.nav {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background-color: var(--nav-bg);
}

.nav__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: var(--nav-height);
  padding: 0 var(--layout-gutter);
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.nav__brand {
  grid-column: 2;
  text-align: center;
}

.nav__links {
  display: none; /* Mobile: hidden */
  list-style: none;
  gap: var(--space-8);
}

.nav__link {
  font-family: var(--nav-font);
  font-size: var(--nav-font-size);
  font-weight: var(--nav-weight);
  letter-spacing: var(--nav-tracking);
  text-transform: uppercase;
  color: var(--nav-text);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-editorial);
}

.nav__link:hover,
.nav__link[aria-current="page"] {
  color: var(--color-text-tertiary);
}

.nav__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-4);
}

.nav__trigger {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--nav-font);
  font-size: var(--nav-font-size);
  font-weight: var(--nav-weight);
  letter-spacing: var(--nav-tracking);
  text-transform: uppercase;
}

.nav__trigger-icon {
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid currentColor;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .nav__inner {
    grid-template-columns: 1fr auto 1fr;
    padding: 0 var(--layout-gutter-lg);
  }

  .nav__trigger { display: none; }
  .nav__links   { display: flex; }
  .nav__brand   { grid-column: 2; }
  .nav__links   { grid-column: 1; grid-row: 1; }
  .nav__actions { grid-column: 3; }
}
```

**Tokens used:** `--nav-bg`, `--nav-height`, `--nav-font`, `--nav-font-size`, `--nav-tracking`, `--nav-weight`, `--z-sticky`

**States:**
- Default: full opacity
- Scrolled: add `backdrop-filter: blur(8px)` + slight `background-color` opacity reduction
- Mobile menu open: `aria-expanded="true"` triggers slide-in panel

**Accessibility:** `role="navigation"`, `aria-label`, `aria-expanded` on trigger, skip link before nav.

---

### Product Card

The core repeating unit of the shop. Portrait orientation (3:4 image), product name, price beneath.

```html
<article class="product-card">
  <a class="product-card__image-link" href="/products/linen-vest" tabindex="-1" aria-hidden="true">
    <figure class="product-image">
      <img
        src="/images/linen-vest-01.webp"
        alt="Cream linen vest, front view"
        width="600" height="800"
        loading="lazy"
      >
    </figure>
    <!-- Optional: hover image swap -->
    <figure class="product-image product-image--hover" aria-hidden="true">
      <img src="/images/linen-vest-02.webp" alt="" width="600" height="800" loading="lazy">
    </figure>
  </a>

  <!-- Optional tag -->
  <div class="product-card__tags">
    <span class="tag">Vintage</span>
  </div>

  <footer class="product-card__info">
    <a class="product-card__name" href="/products/linen-vest">
      Linen Knit Vest — Oat
    </a>
    <div class="product-card__price">
      <span class="price">$68</span>
    </div>
  </footer>
</article>
```

```css
.product-card {
  display: flex;
  flex-direction: column;
  gap: var(--card-gap);
  position: relative;
}

.product-card__image-link {
  display: block;
  position: relative;
  overflow: hidden;
}

.product-image--hover {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-editorial);
}

.product-card__image-link:hover .product-image--hover {
  opacity: 1;
}

.product-card__tags {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  display: flex;
  gap: var(--space-2);
}

.product-card__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-top: var(--space-1);
}

.product-card__name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-regular);
  line-height: var(--leading-snug);
  color: var(--color-text-primary);
  text-decoration: none;
}

.product-card__name:hover {
  color: var(--color-text-secondary);
}
```

**Variants:**
- `product-card--large` — 2-column wide, used for featured items in a grid
- `product-card--horizontal` — image left, content right, used in search results
- `product-card--minimal` — image only, no text overlay, used in lookbook grids

**States:** Default, Hover (image reveal + name color change), Sold Out (overlay with "Sold" tag)

---

### Price Display

```html
<!-- Standard price -->
<div class="price-display">
  <span class="price">$68</span>
</div>

<!-- Sale price -->
<div class="price-display">
  <span class="price price--sale">$42</span>
  <span class="price price--original">$68</span>
</div>
```

```css
.price {
  font-family: var(--price-font);   /* Cormorant Garamond */
  font-size: var(--text-lg);
  font-weight: var(--weight-regular);
  color: var(--price-color);
  letter-spacing: var(--tracking-tight);
}

.price--sale {
  color: var(--price-sale-color);
}

.price--original {
  color: var(--price-strike-color);
  text-decoration: line-through;
  font-size: var(--text-base);
  margin-left: var(--space-2);
}
```

---

### Form Group

Wrapper that pairs a label with an input and optional helper/error text.

```html
<div class="form-group">
  <label class="form-label" for="size">Size</label>
  <select class="input input-select" id="size">
    <option value="">Select size</option>
    <option value="xs">XS</option>
    <option value="s">S</option>
    <option value="m">M — sold out</option>
    <option value="l">L</option>
  </select>
  <p class="form-hint">Runs slightly large. See size guide.</p>
</div>

<!-- With error -->
<div class="form-group form-group--error">
  <label class="form-label" for="email">Email</label>
  <input class="input" type="email" id="email" aria-describedby="email-error">
  <p class="form-error" id="email-error" role="alert">Please enter a valid email address.</p>
</div>
```

```css
.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-hint {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-light);
  color: var(--color-text-tertiary);
  letter-spacing: var(--tracking-wide);
}

.form-error {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-regular);
  color: var(--color-text-error);
  letter-spacing: var(--tracking-wide);
}

.form-group--error .input {
  border-color: var(--primitive-error);
}
```

---

### Breadcrumb

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb" role="list">
    <li class="breadcrumb__item"><a class="breadcrumb__link" href="/">Home</a></li>
    <li class="breadcrumb__item"><a class="breadcrumb__link" href="/shop">Shop</a></li>
    <li class="breadcrumb__item" aria-current="page">Linen Knit Vest</li>
  </ol>
</nav>
```

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  list-style: none;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-regular);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-text-tertiary);
}

.breadcrumb__item + .breadcrumb__item::before {
  content: '/';
  color: var(--color-border-default);
}

.breadcrumb__link {
  color: var(--color-text-tertiary);
  text-decoration: none;
}

.breadcrumb__link:hover {
  color: var(--color-text-secondary);
}
```

---

### Size Selector

```html
<fieldset class="size-selector">
  <legend class="form-label">Size</legend>
  <div class="size-selector__options">
    <label class="size-option">
      <input type="radio" name="size" value="xs">
      <span class="size-option__label">XS</span>
    </label>
    <label class="size-option">
      <input type="radio" name="size" value="s">
      <span class="size-option__label">S</span>
    </label>
    <label class="size-option size-option--soldout">
      <input type="radio" name="size" value="m" disabled>
      <span class="size-option__label">M</span>
    </label>
    <label class="size-option">
      <input type="radio" name="size" value="l">
      <span class="size-option__label">L</span>
    </label>
  </div>
</fieldset>
```

```css
.size-selector__options {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.size-option { cursor: pointer; }
.size-option input { position: absolute; opacity: 0; pointer-events: none; }

.size-option__label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-border-default);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-primary);
  transition: border-color var(--duration-fast) var(--ease-editorial),
              background-color var(--duration-fast) var(--ease-editorial);
}

.size-option input:checked + .size-option__label {
  background-color: var(--color-bg-inverted);
  color: var(--color-text-inverted);
  border-color: var(--color-bg-inverted);
}

.size-option:hover .size-option__label {
  border-color: var(--color-border-strong);
}

.size-option--soldout .size-option__label {
  color: var(--color-text-disabled);
  border-color: var(--color-border-muted);
  text-decoration: line-through;
  cursor: not-allowed;
}
```

---

## Organisms

### Site Header

The complete navigation structure. Includes the sticky nav bar and the mobile drawer.

**Structure:**
```
<header>
  <nav class="nav">           — sticky nav bar (see nav molecule)
    <div class="nav__inner">
      [menu trigger] [brand] [nav links] [actions]
    </div>
    <hr class="divider">
  </nav>

  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <nav>...</nav>
  </div>

  <div class="mobile-overlay" aria-hidden="true"></div>
</header>
```

**Mobile Menu Drawer:**
- Slides in from left (`transform: translateX(-100%)` → `translateX(0)`)
- Full-height, `--color-bg-page` background
- Links are larger (H3 size), lowercase, serif font
- Animation: `--duration-slower` with `--ease-editorial`
- Closes on: overlay click, Escape key, nav link click

---

### Hero — Editorial Split

Mirrors the reference image exactly. Two-column at desktop (content left, image right), stacked at mobile.

```html
<section class="hero" aria-label="Hero">
  <hr class="divider divider--strong">

  <div class="hero__inner">
    <div class="hero__content">
      <button class="nav__trigger hero__menu-trigger">
        <span class="nav__trigger-icon" aria-hidden="true"></span>
        <span>Menu</span>
      </button>

      <p class="hero__tagline body-copy">
        Vintage clothing & home goods upcycled with simplicity,
        durability, and unwavering reliability to take you exactly
        where you need to be.
      </p>

      <h1 class="hero__brand brand-mark brand-mark--hero">
        Reise
      </h1>
    </div>

    <div class="hero__image-wrapper">
      <figure class="hero__image">
        <img
          src="/images/hero-vest.webp"
          alt="Model wearing cream linen knit vest with indigo denim"
          width="1200" height="1600"
          fetchpriority="high"
        >
      </figure>
    </div>
  </div>

  <hr class="divider divider--strong">
</section>
```

```css
.hero {
  padding: var(--space-0);
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  min-height: 75vh;
}

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-8) var(--layout-gutter);
}

.hero__tagline {
  max-width: 36ch;
  margin-top: auto;
  padding-top: var(--space-12);
}

.hero__brand {
  margin-top: var(--space-4);
  /* Optically bleeds past the left margin */
  margin-left: -0.04em;
}

.hero__image {
  height: 100%;
  min-height: 60vw;
}

.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

@media (min-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr 1fr;
    min-height: 90vh;
  }

  .hero__content {
    padding: var(--space-10) var(--layout-gutter-md);
  }

  .hero__image {
    min-height: unset;
  }
}

@media (min-width: 1024px) {
  .hero__content {
    padding: var(--space-14) var(--layout-gutter-lg);
  }
}
```

---

### Product Grid

The shop listing. Responsive masonry-like grid using CSS Grid.

```html
<section class="product-grid" aria-label="Products">
  <div class="product-grid__header">
    <h2 class="heading-2">Shop</h2>
    <div class="product-grid__controls">
      <select class="input input-select product-grid__sort">
        <option>Sort: Newest</option>
        <option>Sort: Price ↑</option>
        <option>Sort: Price ↓</option>
      </select>
    </div>
  </div>

  <hr class="divider">

  <ul class="product-grid__list" role="list">
    <li><article class="product-card">...</article></li>
    <li><article class="product-card product-card--large">...</article></li>
    <!-- ... -->
  </ul>
</section>
```

```css
.product-grid {
  padding: var(--layout-section-gap) var(--layout-gutter);
  max-width: var(--layout-max-width);
  margin: 0 auto;
}

.product-grid__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: var(--space-6);
}

.product-grid__list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6) var(--space-4);
  padding-top: var(--space-8);
}

@media (min-width: 768px) {
  .product-grid {
    padding: var(--layout-section-gap) var(--layout-gutter-md);
  }

  .product-grid__list {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-10) var(--space-6);
  }
}

@media (min-width: 1024px) {
  .product-grid {
    padding: var(--layout-section-gap-lg) var(--layout-gutter-lg);
  }

  .product-grid__list {
    grid-template-columns: repeat(4, 1fr);
  }

  /* Featured large card spans 2 columns */
  .product-card--large {
    grid-column: span 2;
  }
}
```

---

### Product Detail

The PDP layout: image(s) left, product information right.

```html
<main class="pdp">
  <div class="pdp__inner">

    <!-- Image column -->
    <div class="pdp__images">
      <figure class="pdp__image-main product-image product-image--featured">
        <img src="..." alt="..." width="1200" height="1600" fetchpriority="high">
      </figure>
      <div class="pdp__image-thumbs">
        <!-- Thumbnail strip -->
      </div>
    </div>

    <!-- Info column -->
    <aside class="pdp__info">
      <nav aria-label="Breadcrumb"><ol class="breadcrumb">...</ol></nav>

      <h1 class="pdp__name heading-1">Linen Knit Vest</h1>
      <p class="pdp__variant body-sm">Oat / One size</p>

      <div class="pdp__price price-display">
        <span class="price">$68</span>
      </div>

      <hr class="divider">

      <form class="pdp__form">
        <div class="form-group">
          <fieldset class="size-selector">...</fieldset>
        </div>
        <button type="submit" class="btn btn-primary btn--full btn--lg">
          Add to Bag
        </button>
      </form>

      <hr class="divider">

      <details class="pdp__accordion">
        <summary class="pdp__accordion-trigger label-ui">Details</summary>
        <div class="pdp__accordion-body body-copy">...</div>
      </details>

      <details class="pdp__accordion">
        <summary class="pdp__accordion-trigger label-ui">Care</summary>
        <div class="pdp__accordion-body body-copy">...</div>
      </details>

      <details class="pdp__accordion">
        <summary class="pdp__accordion-trigger label-ui">Provenance</summary>
        <div class="pdp__accordion-body body-copy">...</div>
      </details>
    </aside>
  </div>
</main>
```

---

### Cart Drawer

Slides in from the right. Dark background (`--color-bg-inverted`).

```html
<aside class="cart-drawer" id="cart" role="dialog" aria-label="Your bag" aria-modal="true">
  <div class="cart-drawer__header">
    <h2 class="cart-drawer__title label-ui">Your Bag</h2>
    <button class="cart-drawer__close btn btn-text" aria-label="Close bag">
      Close
    </button>
  </div>

  <hr class="divider divider--inverted">

  <ul class="cart-drawer__items" role="list">
    <!-- Cart line items -->
  </ul>

  <div class="cart-drawer__footer">
    <div class="cart-drawer__subtotal">
      <span class="label-ui">Subtotal</span>
      <span class="price" style="color: var(--color-text-inverted)">$68</span>
    </div>
    <p class="body-sm" style="color: var(--color-text-inverted); opacity: 0.6">
      Shipping & taxes calculated at checkout.
    </p>
    <a class="btn btn-ghost btn--full" href="/checkout"
       style="color: var(--color-text-inverted); border-color: var(--color-text-inverted)">
      Checkout
    </a>
  </div>
</aside>
```

```css
.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(100vw, 28rem);
  background-color: var(--color-bg-inverted);
  color: var(--color-text-inverted);
  z-index: var(--z-drawer);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform var(--duration-slower) var(--ease-editorial);
}

.cart-drawer[aria-hidden="false"],
.cart-drawer.is-open {
  transform: translateX(0);
}
```

---

### Newsletter Banner

Full-width section with dark background. Appears between content sections.

```html
<section class="newsletter" aria-label="Newsletter sign-up">
  <div class="newsletter__inner">
    <div class="newsletter__content">
      <p class="newsletter__eyebrow label-ui">Stay in the loop</p>
      <h2 class="newsletter__heading heading-2">
        New arrivals, essays, stories from the road.
      </h2>
    </div>
    <form class="newsletter__form" novalidate>
      <div class="newsletter__field">
        <label class="sr-only" for="newsletter-email">Email address</label>
        <input
          class="input newsletter__input"
          type="email"
          id="newsletter-email"
          placeholder="your@email.com"
          required
        >
        <button type="submit" class="btn btn-ghost newsletter__submit">
          Subscribe
        </button>
      </div>
      <p class="newsletter__disclaimer body-sm">
        No spam. Unsubscribe any time.
      </p>
    </form>
  </div>
</section>
```

---

### Site Footer

Full-width dark footer with dotted top border.

**Structure:**
- Top row: Brand mark (large, display) / Links grid
- Bottom row: Copyright / Legal links

```css
.footer {
  background-color: var(--color-bg-inverted);
  color: var(--color-text-inverted);
  padding: var(--space-20) var(--layout-gutter) var(--space-10);
  border-top: var(--border-dotted-subtle);
}
```

---

## Templates

### Home Page

**Scroll sequence:**
1. `<header>` — Site header (sticky)
2. `<section class="hero">` — Editorial split hero
3. `<section class="intro">` — 2-col: brand statement (left, large serif) / lead paragraph (right)
4. `<section class="featured-collection">` — "Shop" 4-up product grid with featured card
5. `<hr class="divider">` — Full-width dotted divider
6. `<section class="editorial">` — Full-bleed photo + editorial copy overlay
7. `<hr class="divider">` — Full-width dotted divider
8. `<section class="recent-arrivals">` — Horizontal scroll strip of product cards
9. `<section class="newsletter">` — Dark newsletter banner
10. `<footer>` — Site footer

---

### Collection / Shop Page

**Layout:**
1. Page header: collection name (H1, display, left-aligned) + collection description
2. Controls bar: filter/sort (sticky on scroll, appears below nav)
3. Product grid: 2-col mobile → 3-col tablet → 4-col desktop
4. Load more button (ghost, centered) or infinite scroll
5. Footer

---

### Product Detail Page (PDP)

**Layout (Desktop: 2-column):**
```
[  Image gallery (60%)  ]  [  Product info (40%)  ]
```

**Layout (Mobile: stacked):**
```
[  Image (full-width)  ]
[  Product info        ]
```

**Info column order (mobile-first):**
1. Breadcrumb
2. Product name (H1)
3. Color / variant name
4. Price
5. Divider
6. Size selector
7. Add to bag button
8. Divider
9. Description accordion
10. Care accordion
11. Provenance accordion
12. Shipping & returns (text link)

**Below-fold:**
- "You might also like" — 4-up product grid
- Recently viewed strip

---

### Cart & Checkout

Cart is a **drawer** (side panel), not a dedicated page. It opens over the current page.

Checkout is a **dedicated full-page** layout with the same nav, no footer, and a simplified linear form:
1. Contact (email)
2. Shipping address
3. Delivery method
4. Payment

Each step uses the `form-group` molecule and `btn-primary` for "Continue."

Order summary is a sticky sidebar on desktop (right column), collapses to an accordion on mobile (top of page).

**Accessibility requirements for cart drawer:**
- `role="dialog"`, `aria-modal="true"`, `aria-label="Your bag"`
- Focus trap while open (first focusable element receives focus on open)
- Return focus to trigger button on close
- `Escape` key closes the drawer
