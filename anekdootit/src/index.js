import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))

  const vote = () => {
    const copy = [...points]

    copy[selected]++

    setPoints(copy)
  }

  const randomAnecdote = () => {
    const randomInt = Math.floor(Math.random() * anecdotes.length)

    setSelected(randomInt)
  }

  const mostVoted = () => {
    const mostPoints = Math.max(...points)

    const index = points.indexOf(mostPoints)

    return anecdotes[index]
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <button onClick={vote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{mostVoted()}</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
