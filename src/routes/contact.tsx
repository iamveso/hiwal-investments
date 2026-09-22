import { ADDRESS } from "~/constants";
import styles from "../assets/css/contact.module.css";

export default function Contact() {
  return (
    <main>
      <section class={styles.hero}>
        <span>ENGAGE WITH HIWAL</span>
        <h1>
          Let’s connect
          <br />
          the <em>possibilities.</em>
        </h1>
        <p>
          Whether you are an investor, institutional partner, operator or
          project sponsor, we would like to hear what you are building.
        </p>
      </section>
      <section class={styles.contact}>
        <div>
          <span>START A CONVERSATION</span>
          <h2>Tell us how we can help.</h2>
          <p>
            hello@hiwalinvestments.com
            <br />
            {ADDRESS}, Nigeria
          </p>
        </div>
        <form>
          <label>
            Your name
            <input placeholder="Enter your name" />
          </label>
          <label>
            Organisation
            <input placeholder="Company or institution" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            I am interested in
            <select>
              <option>Investment opportunities</option>
              <option>Strategic partnership</option>
              <option>Advisory & solutions</option>
              <option>Other</option>
            </select>
          </label>
          <label class={styles.full}>
            How can we connect?
            <textarea placeholder="Tell us a little about your opportunity or enquiry"></textarea>
          </label>
          <button type="button">Send enquiry →</button>
        </form>
      </section>
    </main>
  );
}
