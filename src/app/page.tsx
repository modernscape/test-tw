import styles from "./page.module.css"

export default function Home() {
  const text = "twilight"
  // 明滅のタイミングをバラけさせるための固定配列（サーバーとクライアントで一致させる）
  const delays = [0.1, 0.7, 0.3, 1.1, 0.5, 0.9, 0.2, 1.4]

  return (
    <main className={styles.main}>
      {/* 歪みの「型」を定義 */}
      <svg style={{position: "absolute", width: 0, height: 0}}>
        <filter id="distort">
          <feTurbulence type="turbulence" baseFrequency="0.05 0.1" numOctaves="2" seed="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" />
        </filter>
      </svg>

      <h1 className={styles.title}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={styles.char}
            style={
              {
                // 型エラーを避けるために React.CSSProperties としてキャスト
                "--delay": delays[index],
              } as React.CSSProperties
            }
          >
            {char}
          </span>
        ))}
      </h1>
    </main>
  )
}
