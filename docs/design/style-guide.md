# Reise — Design Style Guide

**Version:** 1.0.0
**Last Updated:** 2026-02
**Maintained by:** Design & Product

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Decorative Elements](#decorative-elements)
7. [Imagery & Photography](#imagery--photography)
8. [Motion & Animation](#motion--animation)
9. [Voice & Tone](#voice--tone)
10. [Tech Stack](#tech-stack)
11. [Do's & Don'ts](#dos--donts)

---

## Brand Overview

**Reise** (German: *journey*) is a curated marketplace for vintage clothing and upcycled home goods. Every piece is selected or created for its simplicity, durability, and quiet reliability — things built to accompany you, not to demand attention.

**Tagline:**
> Vintage clothing & home goods upcycled with simplicity, durability, and unwavering reliability to take you exactly where you need to be.

**Audience:** Conscious consumers, 25–45, who value provenance, craft, and longevity over trend cycles. They read print magazines. They own things they've had for 15 years.

**Brand Personality:**
- Unhurried — never rushes the customer
- Considered — every choice has a reason
- Honest — shows the real object, unadorned
- Rooted — references craft tradition without nostalgia

---

## Design Principles

### 1. Restraint is a statement
Every element must earn its place. If something can be removed without loss, remove it. Whitespace communicates value and respect for the viewer's attention.

### 2. Typography does the heavy lifting
No illustrations, icons, or decorative graphics beyond dotted lines. Typography — its scale, weight, and placement — creates all hierarchy and drama.

### 3. The photograph is the product
Images are treated as windows, not decorations. They bleed, they fill, they anchor. Never distort, filter, or frame photography artificially.

### 4. No roundness, no softening
Sharp corners. Flat surfaces. No drop shadows except subtle offsets on positioned images. The aesthetic is editorial, not approachable-tech.

### 5. Slow and deliberate interactions
Transitions use the `--ease-editorial` curve: slow to accelerate, slow to stop. Nothing snaps, bounces, or over-shoots. The UI moves like a person who knows where they're going.

---

## Color System

Reise's palette is near-monochromatic. The brand deliberately avoids bright accent colors, instead drawing color from the products themselves — the worn indigo of denim, the cream of natural fibers, the warmth of aged wood.

### Cream Scale — Primary palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primitive-cream-0` | `#FDFAF5` | Surface white, nav backgrounds |
| `--primitive-cream-50` | `#F8F3EB` | **Page background** (default body) |
| `--primitive-cream-100` | `#F2EBE0` | Section alternates |
| `--primitive-cream-200` | `#E8DDD0` | Card backgrounds |
| `--primitive-cream-300` | `#D9CEBC` | Subtle borders, dividers |
| `--primitive-cream-400` | `#C8B9A5` | Strong borders |
| `--primitive-cream-500` | `#B0A08C` | Disabled states |

### Ink Scale — Text & UI

| Token | Hex | Usage |
|-------|-----|-------|
| `--primitive-ink-950` | `#130F0B` | Rarely needed, deepest |
| `--primitive-ink-900` | `#1C1814` | **Primary text**, CTA buttons |
| `--primitive-ink-800` | `#2C2620` | Secondary headings |
| `--primitive-ink-700` | `#3D3630` | Hover states |
| `--primitive-ink-600` | `#52473F` | Body emphasis |
| `--primitive-ink-500` | `#6A5E55` | Muted copy |
| `--primitive-ink-400` | `#87796F` | Placeholders |
| `--primitive-ink-300` | `#A39790` | Disabled text |

### Denim Scale — Editorial accent

Drawn from the indigo of denim in photography. Used sparingly as an accent — never as a primary action color.

| Token | Hex | Usage |
|-------|-----|-------|
| `--primitive-denim-600` | `#4C6D8C` | Text accents, rare UI accents |
| `--primitive-denim-400` | `#7A9DB8` | Focus rings (accessibility) |
| `--primitive-denim-200` | `#C0D4E0` | Selection highlight |
| `--primitive-denim-100` | `#E0EAF0` | Very subtle tints |

### Semantic color usage

```
Page background:    --color-bg-page       (#F8F3EB)
Primary text:       --color-text-primary  (#1C1814)
Secondary text:     --color-text-secondary (#52473F)
Default border:     --color-border-default (#C8B9A5)
Subtle border:      --color-border-subtle  (#D9CEBC)
Focus indicator:    --shadow-focus         (denim-200 ring)
```

### Inverted surfaces

The inverted surface (`--color-bg-inverted`, `#1C1814`) is used for:
- Full-bleed editorial sections
- Cart/checkout drawers
- Email capture banners
- Footer background

Text on inverted surfaces uses `--color-text-inverted` (`#FDFAF5`).

---

## Typography

Typography is the primary expressive tool in the Reise design language. Scale is used dramatically — display sizes are genuinely large.

### Font Families

**Display: Cormorant Garamond**
Used for all brand moments, product names, editorial headings. A high-contrast classical serif with extreme thick-thin stroke variation. Available at weights 300–600, with italics.

```
font-family: var(--font-display);
/* 'Cormorant Garamond', Georgia, 'Times New Roman', serif */
```

Load from Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">
```

**Body: Jost**
A clean geometric sans-serif for all functional UI text, body copy, and labels. Used at light (300) and regular (400) weights primarily.

```
font-family: var(--font-body);
/* 'Jost', 'Helvetica Neue', Arial, sans-serif */
```

Load from Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Token | Size | Font | Weight | Leading | Tracking |
|------|-------|------|------|--------|---------|----------|
| **Brand mark** | `--text-8xl` | 16rem / 256px | Display | 300 | 1 | −0.05em |
| **Mega display** | `--text-7xl` | ~11rem / 181px | Display | 300–400 | 1.05 | −0.04em |
| **Editorial display** | `--text-5xl` | ~5.6rem / 90px | Display | 400 | 1.05 | −0.03em |
| **Hero heading** | `--text-4xl` | 4rem / 64px | Display | 400–500 | 1.1 | −0.02em |
| **Brand statement** | `--text-6xl` | 8rem / 128px | Display | 300 | 1 | −0.04em |
| **Page heading H1** | `--text-3xl` | ~2.8rem / 45px | Display | 400 | 1.15 | −0.01em |
| **Section heading H2** | `--text-2xl` | 2rem / 32px | Display | 400 | 1.25 | 0 |
| **Sub-heading H3** | `--text-xl` | 1.5rem / 24px | Display | 400 | 1.3 | 0 |
| **Card title H4** | `--text-lg` | 1.25rem / 20px | Display | 400 | 1.35 | 0 |
| **Lead paragraph** | `--text-md` | 1.125rem / 18px | Body | 300 | 1.65 | 0 |
| **Body copy** | `--text-base` | 1rem / 16px | Body | 300–400 | 1.65 | 0 |
| **Secondary body** | `--text-sm` | 0.875rem / 14px | Body | 300 | 1.65 | 0 |
| **UI labels** | `--text-xs` | 0.75rem / 12px | Body | 400–500 | 1 | 0.2em (caps) |
| **Fine print** | `--text-2xs` | ~0.56rem / 9px | Body | 400 | 1.5 | 0.05em |

### Typography Rules

1. **Display font is always Cormorant Garamond.** Never use Jost for headings or brand copy.
2. **Large display sizes use light (300) weight.** The high contrast of Cormorant at light weight is more refined than bold.
3. **Labels use uppercase + wide tracking.** Any UI label (`ADD TO CART`, `MENU`, `FILTER`) is set in `font-family: var(--font-body); font-size: var(--text-xs); font-weight: var(--weight-medium); text-transform: uppercase; letter-spacing: var(--tracking-widest)`.
4. **Body copy is light weight.** Jost 300 for paragraphs. Jost 400 only when emphasis is needed in UI.
5. **Italic Cormorant Garamond is used for pull quotes and editorial moments**, not for emphasis in body copy. Body emphasis uses Jost 400 or small caps.
6. **Never center-align body paragraphs.** Center alignment is only for short labels, logos, and isolated editorial statements.
7. **Optical alignment on display type.** At large sizes, manually adjust negative margin to optically align text to the grid, ignoring the browser's default bounding box.

### Typography Specimens

**Brand Mark**
```css
.brand-mark {
  font-family: var(--font-display);
  font-size: clamp(4rem, 15vw, 11rem);
  font-weight: var(--weight-light);
  line-height: var(--leading-none);
  letter-spacing: var(--tracking-tightest);
  color: var(--color-text-primary);
}
```

**H1 — Page Title**
```css
h1 {
  font-family: var(--font-display);
  font-size: clamp(var(--text-2xl), 5vw, var(--text-3xl));
  font-weight: var(--weight-regular);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}
```

**Navigation Label**
```css
.nav-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
}
```

**Body Paragraph**
```css
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--weight-light);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  max-width: 60ch;
}
```

---

## Spacing & Layout

### Grid System

Reise uses a simple, flexible column grid:

- **Mobile (< 640px):** 4 columns, 24px gutters, 24px margin
- **Tablet (640px–1024px):** 8 columns, 32px gutters, 40px margin
- **Desktop (1024px–1440px):** 12 columns, 32px gutters, 64px margin
- **Wide (> 1440px):** 12 columns, 32px gutters, auto margin (content max: 1440px)

**Important:** Many sections break the grid deliberately. Full-bleed images, oversized typography that bleeds past the margin — these are features, not mistakes.

### Container Tokens

```
Max-width:          var(--layout-max-width)      90rem / 1440px
Content max-width:  var(--layout-content-width)  72rem / 1152px
Narrow content:     var(--layout-narrow-width)   48rem / 768px
Side gutters:       var(--layout-gutter)          24px (mobile)
                    var(--layout-gutter-md)       40px (tablet)
                    var(--layout-gutter-lg)       64px (desktop)
```

### Vertical Rhythm

Section-level vertical spacing:
```
Between page sections:    var(--layout-section-gap)     80px
Between large sections:   var(--layout-section-gap-lg)  128px
Component internal gap:   var(--space-4)–var(--space-8)
```

### Spacing Scale Usage

| Context | Token | Value |
|---------|-------|-------|
| Within text (tight) | `--space-1`–`--space-2` | 4–8px |
| Between form fields | `--space-4`–`--space-6` | 16–24px |
| Between card elements | `--space-3`–`--space-5` | 12–20px |
| Section internal padding | `--space-12`–`--space-16` | 48–64px |
| Section top/bottom | `--space-20`–`--space-32` | 80–128px |
| Page top (nav offset) | `--layout-nav-height` | 72px |

---

## Decorative Elements

### Dotted Lines — The Signature Motif

Reise's single decorative element is the dotted rule line, drawn directly from the reference design. It appears:
- Above and below key sections (as a top/bottom border-top and border-bottom)
- As a separator between navigation items
- As the frame around featured cards
- As a subtle separator in product data tables

```css
/* Full-width section divider */
.section-divider {
  border-top: var(--border-dotted-subtle);
  /* 1px dotted #C8B9A5 */
}

/* Frame border on featured card */
.featured-card {
  border-top: var(--border-dotted);
  border-bottom: var(--border-dotted);
  /* 1px dotted #1C1814 */
}
```

Three variants:
```
--border-dotted:        1px dotted #1C1814  — On cream backgrounds
--border-dotted-subtle: 1px dotted #C8B9A5  — Dividers, separators
--border-dotted-muted:  1px dotted #D9CEBC  — Very quiet dividers
```

### Small Square Bullet (□)

From the reference image, the "Menu" label is preceded by a small square (`□` or `▫`). This character (`U+25AB ▫` or a custom CSS `::before` element with a 5×5px bordered box) is used:
- Before navigation trigger labels
- Before category labels in sidebars
- As list markers in certain editorial contexts

```css
.nav-trigger::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border: 1px solid currentColor;
  margin-right: 8px;
  vertical-align: middle;
  flex-shrink: 0;
}
```

### Image Offset Shadow

For featured or highlighted images (not product grid thumbnails), a subtle planar offset creates editorial depth without shadows:

```css
.featured-image {
  box-shadow: var(--shadow-image);
  /* 6px 6px 0 0 #D9CEBC */
}
```

---

## Imagery & Photography

Photography is the only source of rich color in the Reise design language.

### Direction

- **Subject-centered.** The garment or object is always clearly visible. No ambiguous or conceptual shots for product photography.
- **Neutral backgrounds.** White, off-white, concrete, linen — nothing that competes with the item.
- **Natural light only.** No studio strobes. Soft, directional, slightly warm.
- **Worn and in-use.** Show clothing on bodies. Show home goods in lived spaces. Avoid flat-lays for primary images.

### Aspect Ratios

| Context | Ratio | Notes |
|---------|-------|-------|
| Product grid thumbnail | 3:4 | Portrait — consistent across all cards |
| Hero / full-bleed | 16:9 or wider | Cover the full viewport width |
| Featured editorial | 4:5 | Portrait emphasis |
| Collection banner | 21:9 | Cinematic crop |
| Square detail | 1:1 | Macro/detail shots |

### Color Treatment

No filters. No presets. Images should look like a good photograph — color-accurate and slightly warm. The camera WB should lean slightly warm (3800–4500K). No desaturation, no cross-process, no duotone.

### Image Performance

- Serve `.webp` with `.jpg` fallback
- Provide 2× (`srcset`) for retina screens
- Always include `width` and `height` attributes to prevent layout shift
- Use `loading="lazy"` for all below-fold images
- Hero images: use `fetchpriority="high"` and preload in `<head>`

---

## Motion & Animation

Motion reinforces Reise's unhurried character. Interactions are deliberate. Nothing instant, nothing flashy.

### Signature Easing

```css
--ease-editorial: cubic-bezier(0.76, 0, 0.24, 1)
```

This curve accelerates slowly, reaches peak speed late, and decelerates slowly. Applied to all UI transitions by default. It communicates confidence — the interface knows where it's going.

### Duration Scale

| Context | Duration | Token |
|---------|----------|-------|
| Hover color changes | 120ms | `--duration-fast` |
| Button state changes | 220ms | `--duration-normal` |
| Dropdown reveals | 380ms | `--duration-slow` |
| Page section reveals | 550ms | `--duration-slower` |
| Drawer/cart open | 550ms | `--duration-slower` |
| Hero text stagger | 900ms | `--duration-sluggish` |
| Full-page transitions | 1400ms | `--duration-cinematic` |

### Page Load Animation

On page load, content reveals in staggered waves:
1. Navigation fades in (opacity 0→1, 220ms, delay: 0ms)
2. Hero image scales from 1.02→1.00 (380ms, ease-editorial, delay: 100ms)
3. Hero headline slides up 20px (opacity 0→1, 550ms, ease-reveal, delay: 200ms)
4. Hero subtext (delay: 350ms)
5. CTA button (delay: 500ms)

```css
@keyframes reise-reveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Interaction States

- **Hover:** Opacity 0.7 on images. Color transition on links. No movement.
- **Click/Press:** Scale(0.98) for 100ms on buttons.
- **Focus:** `--shadow-focus` ring (denim-200, 3px offset).
- **Loading:** A slow horizontal progress line at the top of the page (inspired by NProgress), using `--primitive-ink-900`.

### Reduced Motion

Always respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Voice & Tone

### Writing Style

- **Short sentences.** Cut everything unnecessary.
- **No superlatives.** Not "beautiful" or "perfect" — describe the actual material, construction, or provenance.
- **Present tense, active voice.** "Made from" not "was made from."
- **Lowercase preferred** for descriptive text (not headings). Lowercase signals lack of shouting.
- **Numbers as numerals.** "3 buttons" not "three buttons."

### UI Copy

| Context | Example |
|---------|---------|
| CTA button | `add to bag` |
| Navigation | `shop` / `about` / `journal` |
| Empty state | `Nothing here yet. Check back soon.` |
| Error | `Something went wrong. Refresh and try again.` |
| Size sold out | `Sold — check back` |
| Cart empty | `Your bag is empty.` |

### What to avoid

- Never: "sustainable," "eco-friendly," "artisanal" — show it, don't label it
- Never: Exclamation points in UI copy
- Never: "Click here" — describe the destination
- Never: All-caps words in running body text

---

## Tech Stack

Reise is a new project. The following stack is recommended for alignment with the design system's needs:

### Recommended

**[Astro](https://astro.build/) + Vanilla CSS (CSS Modules or scoped styles)**

Rationale:
- Astro ships zero JavaScript by default — critical for the performance expectations of an editorial site
- Islands architecture lets you hydrate only cart/search components
- Excellent image optimization pipeline (`@astrojs/image`)
- Content Collections for blog/journal
- Works with any component framework if needed (React for complex cart logic)

**Alternative: Next.js 14+ (App Router) + Plain CSS**
If a more complex e-commerce backend integration is needed (Shopify Hydrogen, custom API).

### CSS Architecture

Use the `tokens.css` file as the single source of truth, imported globally. For component styles:
- **Scoped CSS** in Astro component `<style>` blocks, or **CSS Modules** in Next.js
- No utility-class frameworks (Tailwind would work against the typographic precision this design requires)
- No CSS-in-JS (performance and SSR concerns)

### E-commerce

- **Shopify Storefront API** (headless) — recommended for inventory, checkout, cart
- Use Shopify's `buy-sdk` or direct GraphQL queries
- Cart state in `nanostores` (lightweight, framework-agnostic)

### Fonts

Self-host after initial development using `fontsource` packages, or use the Google Fonts CDN link from `tokens.css`.

---

## Do's & Don'ts

### Color

| Do | Don't |
|----|-------|
| Use cream backgrounds for all primary pages | Use pure white (#FFFFFF) as page background |
| Let product photography provide color | Add colorful UI elements (badges, icons, backgrounds) |
| Use denim accent sparingly, only for focus/accent | Use denim as a primary CTA color |
| Use the ink scale for all text | Use colors outside the defined palette |

### Typography

| Do | Don't |
|----|-------|
| Use Cormorant Garamond for all headings | Mix multiple serif fonts |
| Scale display type aggressively (it should feel large) | Use Inter, Roboto, or system fonts |
| Set labels in small-caps / uppercase with wide tracking | Set body copy in uppercase |
| Use light (300) weight for large display | Use bold (700+) weight in Cormorant at display sizes |
| Allow headings to wrap naturally | Avoid orphan words with `max-width` on heading containers |

### Layout

| Do | Don't |
|----|-------|
| Break the grid with oversized typography | Constrain all content to the grid |
| Use generous padding inside sections | Pack sections tightly |
| Let images be large and full-width when appropriate | Constrain hero images to small widths |
| Align text to left margin (editorial alignment) | Center all text on desktop |

### Borders & Decoration

| Do | Don't |
|----|-------|
| Use dotted lines as the primary decorative motif | Add rounded corners to containers or cards |
| Keep borders subtle (dotted-subtle or dotted-muted) | Add drop shadows to cards |
| Use sharp (0px radius) on all UI elements | Use gradients as backgrounds |
| Use the offset image shadow for editorial featured images | Apply shadows to body text or icons |

### Photography

| Do | Don't |
|----|-------|
| Show products worn / in use | Use flat lays as primary product images |
| Use natural, warm light | Apply filters or presets |
| Maintain 3:4 aspect ratio for product thumbnails | Mix portrait and landscape in product grids |
| Preserve the subject's natural color | Desaturate or apply duotone effects |
