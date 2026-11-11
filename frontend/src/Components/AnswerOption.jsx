function AnswerOption({ label, letter, selected, correct, revealed, onClick }) {
  const stateClass = selected ? (correct ? 'is-correct' : 'is-incorrect') : ''

  return (
    <button
      className={`answer-option ${selected ? 'is-selected' : ''} ${stateClass}`}
      type="button"
      aria-pressed={selected}
      onClick={onClick}
    >
      <span className="answer-letter">{letter}</span>
      <span className="answer-label">{label}</span>
      {revealed && selected && <span className="answer-feedback">{correct ? 'Correct' : 'Not quite'}</span>}
      {revealed && !selected && correct && <span className="answer-feedback">Correct answer</span>}
    </button>
  )
}

export default AnswerOption