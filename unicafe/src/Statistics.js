import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(2)
  const positive = ((good / total) * 100).toFixed(0)

  return (
    <>
      <h2>statistiikka</h2>
      {total ? (
        <table>
          <tbody>
            <Statistic text="hyvä" value={good} />
            <Statistic text="neutraali" value={neutral} />
            <Statistic text="huono" value={bad} />
            <Statistic text="yhteensä" value={total} />
            <Statistic text="keskiarvo" value={average} />
            <Statistic text="positiivisia" value={`${positive} %`} />
          </tbody>
        </table>
      ) : (
        <p>ei yhtään palautetta annettu</p>
      )}
    </>
  )
}

export default Statistics
