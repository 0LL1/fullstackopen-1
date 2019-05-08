import React from 'react'

const Total = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)

  const total = exercises.reduce(
    (exercise, currentValue) => exercise + currentValue
  )

  return <p>{total}</p>
}

export default Total
