import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(2)

  return (
    <>
      <h1>anna palautetta</h1>
      <button onClick={() => setGood(c => c + 1)}>hyvä</button>
      <button onClick={() => setNeutral(c => c + 1)}>neutraali</button>
      <button onClick={() => setBad(c => c + 1)}>huono</button>
      <h2>statistiikka</h2>
      <p>hyvä: {good}</p>
      <p>neutraali: {neutral}</p>
      <p>huono: {bad}</p>
      <p>yhteensä: {total}</p>
      <p>keskiarvo: {average}</p>
      <p>positiivisia: {positive} %</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
