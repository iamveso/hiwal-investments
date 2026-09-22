import { Title } from "@solidjs/meta";
import PageHero from "~/components/PageHero";
import styles from "../assets/css/insights.module.css";
import { For, Show } from "solid-js";

const posts: string[][] = [
  // [
  //   "MARKET NOTE",
  //   "The case for connected capital in a changing economy",
  //   "A perspective on why structures, insight and implementation must work as one.",
  // ],
  // [
  //   "ECOSYSTEM UPDATE",
  //   "Building partnerships that make projects investable",
  //   "How the right operating network can turn a promising plan into an investable proposition.",
  // ],
  // [
  //   "PERSPECTIVE",
  //   "Value creation beyond the transaction",
  //   "A long-term lens for investors and operators committed to meaningful outcomes.",
  // ],
];

export default function Insights() {
  return (
    <main>
      <Title>Hiwal Investments | Connected value</Title>

      <PageHero
        eyebrow="INSIGHTS & RESOURCES"
        title="Ideas for building lasting value."
        copy="Perspectives from the Hiwal ecosystem on capital, markets and the opportunities shaping Nigeria."
      />

      <section class={styles.featured}>
        <span>FEATURED INSIGHT</span>
        <h2>
          Value creation
          <br />
          is a <em>team sport.</em>
        </h2>
        <p>
          The strongest investment outcomes emerge when capital is connected to
          the people and capabilities required for execution.
        </p>
        <a href="/contact">Read perspective →</a>
      </section>

      <section class={styles.posts}>
        <Show when={posts.length > 0}>
          <For each={posts}>
            {(post, i) => (
              <article>
                <span>{post[0]}</span>
                <div class={styles.image}></div>
                <h3>{post[1]}</h3>
                <p>{post[2]}</p>
                <a href="/contact">Read more →</a>
              </article>
            )}
          </For>
        </Show>

        <Show when={posts.length <= 0}>
          <div class={styles.postsempty}>
            <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
              <circle
                cx="60"
                cy="60"
                r="46"
                stroke="#4a8985"
                stroke-width="1"
                opacity=".3"
              />
              <circle
                cx="60"
                cy="60"
                r="30"
                stroke="#4a8985"
                stroke-width="1"
                opacity=".2"
              />
              <circle cx="60" cy="24" r="5" fill="#c9a227" />
              <circle cx="92" cy="60" r="4" fill="#1a6b6b" />
              <circle cx="60" cy="96" r="4" fill="#1a6b6b" />
              <circle cx="28" cy="60" r="4" fill="#1a6b6b" />
              <path
                d="M60 24L92 60M60 24L28 60M60 24L60 96"
                stroke="#c9a227"
                stroke-width="1.5"
                stroke-dasharray="3 7"
              />
            </svg>
            <h3>Insights are on their way</h3>
            <p>
              Our best thinking is still brewing. Check back soon for stories,
              updates, and perspective from across our portfolio.
            </p>
          </div>
        </Show>
      </section>
    </main>
  );
}
