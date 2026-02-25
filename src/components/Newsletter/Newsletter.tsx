"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";

type FormState = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setState("loading");

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
    setEmail("");
  }

  return (
    <section className={styles.section} aria-label="Newsletter sign-up">
      <div className={styles.inner}>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowIcon} aria-hidden="true" />
            Stay in the loop
          </p>
          <h2 className={styles.heading}>
            New arrivals, essays,<br />
            stories from the road.
          </h2>
        </div>

        {/* Form */}
        <div className={styles.formWrapper}>
          {state === "success" ? (
            <p className={styles.successMsg}>
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldRow}>
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  className={styles.input}
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  disabled={state === "loading"}
                  autoComplete="email"
                />
                <button
                  className={styles.submitBtn}
                  type="submit"
                  disabled={state === "loading"}
                  aria-label="Subscribe to newsletter"
                >
                  {state === "loading" ? "..." : "Subscribe"}
                </button>
              </div>
              <p className={styles.disclaimer}>
                No spam. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
