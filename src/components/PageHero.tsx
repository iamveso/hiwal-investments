import styles from "../assets/css/pagehero.module.css";

interface PageProps {
  eyebrow: string,
  title: string,
  copy: string
}

export default function PageHero(props: PageProps) {
  return (
    <section class={styles.pagehero}>
        <div>
          <div class={styles.breadcrumb}>
                <a href="/">Home</a><i> / </i><span>{props.eyebrow}</span>
            </div>
        <span class={styles.eyebrow}>{props.eyebrow}</span>
            <h1>{props.title}</h1>
            <p>{props.copy}</p>
        </div>
      <div class={styles.orb}></div>
    </section>
  )
}
