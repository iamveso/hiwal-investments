import { createSignal } from "solid-js";
import styles from "../assets/css/networkart.module.css";

export default function NetworkArt({compact = false}: {compact?: boolean}) {
  return (
    <div class={`${styles.networkArt} ${compact ? styles.compact : ""}`} aria-hidden="true">
      <svg viewBox="0 0 600 440" fill="none">
        <path
          d="M80 292L201 180 327 230 482 105M201 180L229 359 405 328 482 105M327 230L405 328M80 292l149 67"
          stroke="#4a8985"
          stroke-width="1.5"
          opacity=".65"
        />
        <path
          d="M80 292L201 180 327 230 482 105"
          stroke="#c9a227"
          stroke-width="2"
          stroke-dasharray="4 9"
        />
        <circle cx="80" cy="292" r="15" fill="#c9a227" />
        <circle cx="201" cy="180" r="24" fill="#1a6b6b" />
        <circle
          cx="327"
          cy="230"
          r="13"
          fill="#f8f6f1"
          stroke="#c9a227"
          stroke-width="5"
        />
        <circle cx="482" cy="105" r="32" fill="#c9a227" />
        <circle cx="229" cy="359" r="18" fill="#1a6b6b" />
        <circle
          cx="405"
          cy="328"
          r="24"
          fill="#f8f6f1"
          stroke="#1a6b6b"
          stroke-width="6"
        />
      </svg>
    </div>
  );
}
