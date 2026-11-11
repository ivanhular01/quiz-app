function QuizHeader({ current, total }) {
  return (
    <header className="quiz-header">
      <a className="quiz-brand" href="/" aria-label="Quick Think home">
        <span className="mark-symbol" aria-hidden="true">Q</span> QUICK THINK
      </a>
      <span className="quiz-counter">QUESTION <strong>{String(current).padStart(2, '0')}</strong> <span>/</span> {String(total).padStart(2, '0')}</span>
    </header>
  )
}

export default QuizHeader