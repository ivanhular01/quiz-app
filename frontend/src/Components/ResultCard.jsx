function ResultCard({ total, correct, incorrect, onRetake, onHome }) {
  const percentage = Math.round((correct / total) * 100)
  const message = percentage === 100 ? 'Flawless thinking.' : percentage >= 70 ? 'Nicely done.' : percentage >= 40 ? 'Good things are clicking.' : 'Every answer is a fresh start.'

  return (
    <section className="result-card">
      <p className="eyebrow"><span className="eyebrow-dot" /> QUIZ COMPLETE</p>
      <div className="score-display">
        <span className="score-number">{percentage}<span>%</span></span>
        <span className="score-caption">FINAL SCORE</span>
      </div>
      <h1>{message}</h1>
      <p className="result-summary">You got <strong>{correct} of {total}</strong> questions right.</p>
      <div className="result-stats">
        <div><span className="stat-value">{total}</span><span className="stat-label">Questions</span></div>
        <div><span className="stat-value stat-correct">{correct}</span><span className="stat-label">Correct</span></div>
        <div><span className="stat-value stat-incorrect">{incorrect}</span><span className="stat-label">Incorrect</span></div>
      </div>
      <div className="result-actions">
        <button className="button button-primary" type="button" onClick={onRetake}>Try again <span aria-hidden="true">↻</span></button>
        <button className="button button-quiet" type="button" onClick={onHome}>Back home <span aria-hidden="true">→</span></button>
      </div>
    </section>
  )
}

export default ResultCard