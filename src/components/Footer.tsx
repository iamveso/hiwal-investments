import { ADDRESS } from "~/constants";
import styles from "../assets/css/footer.module.css"
import logo from "../assets/images/logo.jfif"

export default function Footer() {
  return (
    <footer>
      <div class={styles.footerMain}>
        <div>
          <a class={styles.brand} href="/">
            <img class={styles.logo} src={logo}></img>
          </a>
          <p>
            Connecting capital, solutions and opportunity
            <br />
            to create lasting value.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="/about">About Hiwal</a>
          <a href="/ecosystem">Our ecosystem</a>
          <a href="/sectors">Investment focus</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="/partners">Partner network</a>
          <a href="/insights">Insights</a>
          <a href="/contact">Speak with us</a>
        </div>
        <div class={styles.contact}>
          <h4>Head office</h4>
          <p>
            {ADDRESS}
            <br />
            Nigeria
          </p>
          {/* TODO: Get the actual email that this should go to */}
          <a href="mailto:hello@hiwalinvestments.com">
            hello@hiwalinvestments.com
          </a>
        </div>
      </div>
      <div class={styles.bottom}>
        <span>© {new Date().getFullYear()} Hiwal Investments. All rights reserved.</span>
      </div>
    </footer>
  );
}
