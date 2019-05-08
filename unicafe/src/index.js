import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>anna palautetta</h1>
      <Button text="hyvä" handleClick={() => setGood(c => c + 1)} />
      <Button text="neutraali" handleClick={() => setNeutral(c => c + 1)} />
      <Button text="huono" handleClick={() => setBad(c => c + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
