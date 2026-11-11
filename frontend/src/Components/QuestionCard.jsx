function QuestionCard({ question, number, children }) {
  return (
    <section className="question-card" aria-labelledby="question-prompt">
      <div className="question-kicker"><span>QUESTION {String(number).padStart(2, '0')}</span><span className="question-mark">✳</span></div>
      <h1 id="question-prompt">{question.prompt}</h1>
      <p className="question-instruction">Choose the best answer.</p>
      {children}
    </section>
  )
}

export default QuestionCard