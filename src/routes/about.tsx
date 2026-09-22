import { Title } from "@solidjs/meta";
import PageHero from "~/components/PageHero";
import styles from "../assets/css/about.module.css";
import md from "../assets/images/md.jpg";

export default function About() {
  return (
    <main>
      <Title>Hiwal Investments | Connected value</Title>
      <PageHero
        eyebrow="ABOUT HIWAL"
        title="Built for the work behind progress."
        copy="We are a connected investment ecosystem with a practical commitment to Nigeria's future."
      />

      <section class={styles.intro}>
        <span>OUR PHILOSOPHY</span>
        <h2>
          We do not simply deploy capital. We connect it to the expertise,
          partnerships and execution that let it <em>go further.</em>
        </h2>
      </section>

      <section class={styles.split}>
        <div class={styles.md}>
          <img class={styles.mdImage} src={md}></img>
          <div class={styles.mdCaption}>
            <b>Gabriel Kalunta</b>
            <small>Managing Director</small>
          </div>
        </div>
        <div>
          <span>LEADERSHIP</span>
          <h2>
            Clear vision.
            <br />
            <em>Disciplined action.</em>
          </h2>
          <p>
            Under Gabriel Kalunta’s leadership, Hiwal combines strategic
            perspective with close attention to real-world outcomes. Our
            responsibility is to build enduring value—for capital providers,
            operating partners and the communities they serve.
          </p>
        </div>
      </section>

      <section class={styles.values}>
        <span>HOW WE WORK</span>
        <div class={styles.cards}>
          <article>
            <b>01</b>
            <h3>Connected thinking</h3>
            <p>
              We see relationships others miss and turn them into shared
              advantage.
            </p>
          </article>
          <article>
            <b>02</b>
            <h3>Practical ambition</h3>
            <p>
              We bring global standards to opportunities grounded in Nigerian
              reality.
            </p>
          </article>
          <article>
            <b>03</b>
            <h3>Accountable partnership</h3>
            <p>
              We act with clarity, care and a long-term view of every outcome.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
