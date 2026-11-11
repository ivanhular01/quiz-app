function HomePage({ onStart }) {
  return (
    <main className="home-page page-shell">
      <header className="site-mark">
        <span className="mark-symbol" aria-hidden="true">Q</span>
        <span>QUICK THINK</span>
      </header>
      <section className="home-content">
        <div className="home-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little knowledge goes a long way</p>
          <h1>Curiosity,<br /><em>in motion.</em></h1>
          <p className="home-description">
            Ten questions. A few unexpected turns. See what you know, learn something new, and enjoy the ride.
          </p>
          <button className="button button-primary start-button" type="button" onClick={onStart}>
            Start the quiz <span aria-hidden="true">→</span>
          </button>
          <p className="quiz-meta">10 QUESTIONS <span>·</span> ABOUT 3 MINUTES <span>·</span> NO PRESSURE</p>
        </div>
        <div className="home-art" aria-hidden="true">
          <div className="art-ring art-ring-one" />
          <div className="art-ring art-ring-two" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-center"><span>?</span></div>
          <span className="orbit-label label-top">THINK</span>
          <span className="orbit-label label-bottom">DISCOVER</span>
          <span className="orbit-spark spark-one">✳</span>
          <span className="orbit-spark spark-two">✳</span>
        </div>
      </section>
      <footer className="home-footer"><span>THE EVERYDAY KNOWLEDGE QUIZ</span><span>01 — 10</span></footer>
    </main>
  )
}

export default HomePage