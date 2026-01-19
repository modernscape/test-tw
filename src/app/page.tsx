import styles from "./page.module.css"

export default function Home() {
  const text = "twilight"

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        {text.split("").map((char, index) => (
          <span key={index} className={styles.char}>
            {char}
          </span>
        ))}
      </h1>
    </main>
  )
}
