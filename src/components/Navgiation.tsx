import { createSignal, For } from "solid-js";
import styles from "../assets/css/navigation.module.css";
import { useLocation } from "@solidjs/router";
import logo from "../assets/images/logo.jfif";

const links = [
  ["About", "/about"],
  ["Ecosystem", "/ecosystem"],
  ["Investment Focus", "/sectors"],
  ["Insights", "/insights"],
  ["Network", "/partners"],
];

export default function Navigation() {
  const [open, setOpen] = createSignal(false);
  const location = useLocation();
  return (
    <header class={styles.siteHeader}>
      <a class={styles.brand} aria-label="Hiwal Investment home" href="/">
        <i></i>
        <i></i>
        <i></i>
        <img class={styles.mark} src={logo} />
        <span class={styles.logotext}>HIWAL INVESTMENTS</span>
      </a>
      <nav class={open() ? styles.open : ""} aria-label="Main navigation">
        <For each={links}>
          {(link, _) => (
            <a
              class={location.pathname === link[1] ? styles.active : ""}
              aria-current={location.pathname === link[1] ? "page" : undefined}
              href={link[1]}
            >
              {link[0]}
            </a>
          )}
        </For>
        <a
          class={`${styles.navContact} ${location.pathname === "/contact" ? styles.active : ""}`}
          href="/contact"
          aria-current={location.pathname === "/contact" ? "page" : undefined}
        >
          Speak with us <span>↗</span>
        </a>
      </nav>
      <button
        class={styles.menu}
        aria-label="Toggle menu"
        aria-expanded={open()}
        onclick={() => setOpen(!open())}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
