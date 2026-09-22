import { Title } from "@solidjs/meta";
import PageHero from "~/components/PageHero";
import styles from "../assets/css/sectors.module.css";
import { For } from "solid-js";
import { sectors } from "~/constants";

export default function Sectors() {
  return (
    <main>
      <Title>Hiwal Investments | Connected value</Title>
      <PageHero
        eyebrow="INVESTMENT FOCUS"
        title="Backing the systems that move Nigeria forward."
        copy="We focus on areas where purposeful capital and operational partnership can unlock meaningful, long-term value."
      />

      <section class={styles.lead}>
        <span>PRIORITY SECTORS</span>
        <h2>
          Investing where <em>possibility meets need.</em>
        </h2>
      </section>

      <section class={styles.list}>
        <For each={sectors}>
          {(s, i) => (
            <article>
              <div class={styles.num}>0{i() + 1}</div>
              <div>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
              </div>
              <a href="/contact">Explore opportunity ↗</a>
            </article>
          )}
        </For>
      </section>

      <section class={styles.note}>
          <b>Our approach</b>
          <p>
              We look for the point where market insight, patient capital and
              capable partners can create a multiplier effect.
          </p>
      </section>
    </main>
  );
}
