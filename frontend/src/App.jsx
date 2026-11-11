import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import AnswerOption from './Components/AnswerOption.jsx'
import HomePage from './Components/HomePage.jsx'
import ProgressBar from './Components/ProgressBar.jsx'
import QuestionCard from './Components/QuestionCard.jsx'
import QuizHeader from './Components/QuizHeader.jsx'
import ResultCard from './Components/ResultCard.jsx'
import { questions } from './questions.js'
import './App.css'

function QuizPage({ answers, setAnswers }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const question = questions[currentQuestion]
  const navigate = useNavigate()
  const selectedAnswer = answers[currentQuestion]

  function selectAnswer(answerIndex) {
    setAnswers((currentAnswers) => {
      const nextAnswers = [...currentAnswers]
      nextAnswers[currentQuestion] = answerIndex
      return nextAnswers
    })
  }

  function moveNext() {
    if (currentQuestion === questions.length - 1) {
      navigate('/results')
      return
    }
    setCurrentQuestion((current) => current + 1)
  }

  return (
    <main className="quiz-page page-shell">
      <QuizHeader current={currentQuestion + 1} total={questions.length} />
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
      <QuestionCard question={question} number={currentQuestion + 1}>
        <div className="answer-list" role="group" aria-label="Answer choices">
          {question.options.map((option, index) => (
            <AnswerOption
              key={option}
              label={option}
              letter={String.fromCharCode(65 + index)}
              selected={selectedAnswer === index}
              correct={question.answer === index}
              revealed={selectedAnswer !== undefined}
              onClick={() => selectAnswer(index)}
            />
          ))}
        </div>
      </QuestionCard>
      <div className="quiz-navigation">
        <button
          className="button button-quiet"
          type="button"
          onClick={() => setCurrentQuestion((current) => current - 1)}
          disabled={currentQuestion === 0}
        >
          <span aria-hidden="true">←</span> Previous
        </button>
        <span className="answer-hint" aria-live="polite">
          {selectedAnswer === undefined ? 'Choose an answer to continue' : 'Answer recorded'}
        </span>
        <button
          className="button button-primary"
          type="button"
          onClick={moveNext}
          disabled={selectedAnswer === undefined}
        >
          {currentQuestion === questions.length - 1 ? 'See results' : 'Next question'}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  )
}

function ResultsPage({ answers, onRetake }) {
  const navigate = useNavigate()
  const correct = answers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0,
  )

  return (
    <main className="results-page page-shell">
      <ResultCard
        total={questions.length}
        correct={correct}
        incorrect={questions.length - correct}
        onRetake={() => {
          onRetake()
          navigate('/quiz')
        }}
        onHome={() => navigate('/')}
      />
    </main>
  )
}

function AppRoutes() {
  const [answers, setAnswers] = useState([])
  const navigate = useNavigate()

  function startQuiz() {
    setAnswers([])
    navigate('/quiz')
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage onStart={startQuiz} />} />
      <Route path="/quiz" element={<QuizPage answers={answers} setAnswers={setAnswers} />} />
      <Route path="/results" element={<ResultsPage answers={answers} onRetake={startQuiz} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App