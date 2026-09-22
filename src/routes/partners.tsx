import { Title } from "@solidjs/meta";
import PageHero from "~/components/PageHero";
import styles from "../assets/css/partners.module.css";

export default function Partners() {
  return (
  <main>
      <Title>Hiwal Investments | Connected value</Title>
      <PageHero
          eyebrow="PARTNERS & NETWORK"
          title="Better outcomes begin with better connections."
          copy="Hiwal works alongside co-investors, operators and institutions that share a commitment to thoughtful, practical progress."
      />
      <section>
          <span>THE VALUE NETWORK</span>
          <h2>We bring the right people<br />into the <em>same room.</em></h2>
          <p>
              Our network is built to help good ideas travel further: from early
              opportunity through investment, implementation and impact.
          </p>
        <div class={styles.network}>
              <b>Capital partners</b><i></i><b>Hiwal</b><i></i><b
                  >Operating partners</b
              ><i></i><b>Communities</b>
          </div>
      </section>

      <section class={styles.join}>
          <span>PARTNER WITH US</span>
          <h2>Shared ambition.<br /><em>Connected action.</em></h2>
          <a href="/contact">Start a conversation →</a>
      </section>
  </main>
  );
}
