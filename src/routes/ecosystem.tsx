import { Title } from "@solidjs/meta";
import NetworkArt from "~/components/NetworkArt";
import PageHero from "~/components/PageHero";
import styles from "../assets/css/ecosystem.module.css";
import { For } from "solid-js";

const cards = [
  [
    "Capital deployment",
    "We identify and structure opportunities in sectors positioned for durable growth.",
  ],
  [
    "Products",
    "Investment vehicles and structured opportunities designed for different ambitions.",
  ],
  [
    "Services",
    "Advisory, project development support and investor relations that move ideas forward.",
  ],
  [
    "Solutions",
    "Connected packages for institutions, corporates, family offices and public-sector partners.",
  ],
];

export default function Ecosystem() {
  return (
    <main>
      <Title>Hiwal Investments | Connected value</Title>
      <PageHero
        eyebrow="OUR ECOSYSTEM"
        title="One platform. Many ways to create value."
        copy="Every Hiwal capability is designed to reinforce the next—so opportunity becomes more investable, actionable and enduring."
      />

      <section class={styles.diagram}>
        <div>
          <span>HOW IT CONNECTS</span>
          <h2>
            Connection is our <em>competitive edge.</em>
          </h2>
          <p>
            We combine what is too often fragmented: capital, specialist
            products, practical services and sector expertise.
          </p>
        </div>
        <NetworkArt />
      </section>

      <section class={styles.grid}>
        <For each={cards}>
          {(card, i) => (
            <article>
              <b>0{i() + 1}</b>
              <h3>{card[0]}</h3>
              <p>{card[1]}</p>
              <a href="/contact">Discuss an opportunity →</a>
            </article>
          )}
        </For>
      </section>

      <section class={styles.aud}>
          <span>WHO WE SERVE</span>
          <h2>Made for those building<br /><em>what comes next.</em></h2>
          <div>
              <b>Investors & family offices</b><b>Corporates & operators</b><b
                  >Institutions & development partners</b
              ><b>Government entities & project sponsors</b>
          </div>
      </section>
    </main>
  );
}
