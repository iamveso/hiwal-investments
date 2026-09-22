import { Title } from "@solidjs/meta";
import styles from "../assets/css/home.module.css";
import NetworkArt from "~/components/NetworkArt";
import { For } from "solid-js";
import { mdQuote, sectors } from "~/constants";
import md from "../assets/images/md.jpg";

const pillars = [
  [
    "01",
    "Capital deployment",
    "Strategic investments that unlock durable growth.",
  ],
  ["02", "Products", "Flexible vehicles and co-investment opportunities."],
  ["03", "Services", "Advice, structuring and hands-on execution support."],
  ["04", "Solutions", "Integrated packages built around real-world needs."],
];

export default function Home() {
  return (
    <main>
      <Title>Hiwal Investments | Connected value</Title>
      <section class={styles.hero}>
        <div class={styles.heroCopy}>
          <span class="eyebrow">HIWAL INVESTMENTS · NIGERIA</span>
          <h1>
            Value grows
            <br />
            when everything
            <br />
            <em>connects.</em>
          </h1>
          <p>
            We bring together capital, products, services and practical
            solutions to create value that reaches further.
          </p>
          <div class={styles.actions}>
            <a class={`${styles.btn} ${styles.gold}`} href="/ecosystem">
              Explore our ecosystem <b>→</b>
            </a>
            <a class={styles.textBtn} href="/contact">
              Speak with us <b>↗</b>
            </a>
          </div>
        </div>
        <div class={styles.artWrap}>
          <span class={styles.artNote}>
            ONE CONNECTED
            <br />
            PLATFORM
          </span>
          <NetworkArt />
        </div>
        <div class={styles.heroFoot}>
          <span>SCROLL TO DISCOVER</span>
          <i></i>
          <span>Capital → Products → Services → Solutions → Impact</span>
        </div>
      </section>

      <section class={`${styles.intro} section`}>
        <div class="eyebrow teal">THE HIWAL DIFFERENCE</div>
        <div class={styles.introGrid}>
          <h2>
            We see the <em>whole picture.</em>
          </h2>
          <div>
            <p class={styles.lead}>
              Investment works best when it is connected to the people, insight
              and infrastructure needed to make it matter.
            </p>
            <p>
              Hiwal is a platform where each capability strengthens the
              next—giving our partners a clearer path from ambition to enduring
              outcomes.
            </p>
            <a class={styles.arrowLink} href="/about">
              Discover our philosophy <b>→</b>
            </a>
          </div>
        </div>
      </section>

      <section class={`${styles.ecosystem} section`}>
        <div class={styles.sectionHead}>
          <div>
            <span class="eyebrow gold-text">OUR ECOSYSTEM</span>
            <h2>
              Built to work
              <br />
              better <em>together.</em>
            </h2>
          </div>
          <p>
            Four connected capabilities. One focused purpose: making opportunity
            more actionable for every stakeholder.
          </p>
        </div>
        <div class={styles.pillarGrid}>
          <For each={pillars}>
            {(pillar, _) => (
              <article>
                <span>{pillar[0]}</span>
                <div class="line"></div>
                <h3>{pillar[1]}</h3>
                <p>{pillar[2]}</p>
                <a href="/ecosystem">
                  Learn more <b>→</b>
                </a>
              </article>
            )}
          </For>
        </div>
        <a class={`${styles.btn} ${styles.outline}`} href="/ecosystem">
          See how it connects <b>→</b>
        </a>
      </section>

      <section class={styles.leadership}>
        <div class={styles.portrait}>
          <div class={styles.portraitPlaceholder}>
            <img src={md}></img>
          </div>
          <div class={styles.portraitLabel}>
            GABRIEL KALUNTA
            <br />
            <small>MANAGING DIRECTOR</small>
          </div>
        </div>
        <div class={styles.leadCopy}>
          <span class="eyebrow gold-text">LEADERSHIP WITH INTENT</span>
          <blockquote class={styles.quote} data-full={mdQuote}>
            Our ambition is to build a diversified investment institution where capital, innovation and responsible governance work together to create sustainable growth.
          </blockquote>
          <p>
            Hiwal is led by a conviction that disciplined execution and deep
            partnership create a more resilient kind of value.
          </p>
          <a class={`${styles.arrowLink} ${styles.light}`} href="/about">
            Meet Gabriel Kalunta <b>→</b>
          </a>
        </div>
      </section>

      <section class={`${styles.sectors} section`}>
        <div class={styles.sectionHead}>
          <div>
            <span class="eyebrow teal">WHERE WE FOCUS</span>
            <h2>
              Investing in the
              <br />
              <em>real economy.</em>
            </h2>
          </div>
          <a class={styles.arrowLink} href="/sectors">
            View investment focus <b>→</b>
          </a>
        </div>
        <div class={styles.sectorList}>
          <For each={sectors}>
            {(sector, i) => (
              <a href="/sectors">
                <span>0{i() + 1}</span>
                {sector[0]}
                <b>↗</b>
              </a>
            )}
          </For>
        </div>
      </section>

      <section class={styles.cta}>
        <div>
          <span class="eyebrow gold-text">
            A CONVERSATION CAN START A CONNECTION
          </span>
          <h2>
            Let’s build what’s
            <br />
            <em>next, together.</em>
          </h2>
        </div>
        <a class={`${styles.btn} ${styles.gold}`} href="/contact">
          Start a conversation <b>→</b>
        </a>
      </section>
    </main>
  );
}
