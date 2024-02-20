import { useState } from 'react'

//button object
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  //set feedback options
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //total, average, percent of positives
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percent, setPercent] = useState(0)

  //Handle clicks
  const handleGoodClick = () => {
    //give +1 value
    const updatedGood = good + 1
    setGood(updatedGood)

    //count the total amount of feedbacks
    const updatedTotal = updatedGood + neutral + bad
    setTotal(updatedTotal)

    //count the average of feedbacks with values good=1 neutral=0 bad=-1
    const updatedAverage = (updatedGood * 1 + neutral * 0 + bad * -1) / updatedTotal
    setAverage(updatedAverage) 

    //count how many percent of votes are positive
    const updatedPercent = (updatedGood / updatedTotal) * 100
    setPercent(updatedPercent)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)

    const updatedTotal = updatedNeutral + good + bad
    setTotal(updatedTotal)

    const updatedAverage = (good * 1 + updatedNeutral * 0 + bad * -1) / updatedTotal
    setAverage(updatedAverage) 


    const updatedPercent = (good / updatedTotal) * 100
    setPercent(updatedPercent)

  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)

    const updatedTotal = updatedBad + neutral + good
    setTotal(updatedTotal)

    const updatedAverage = (good * 1 + neutral * 0 + updatedBad * -1) / updatedTotal
    setAverage(updatedAverage) 

    setAverage(updatedAverage) 

    const updatedPercent = (good / updatedTotal) * 100
    setPercent(updatedPercent)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleBadClick} text='Bad' />
      </div>

      <h1>Statistics</h1>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {total}</p>
        <p>Average: {average}</p>
        <p>Positive: {percent} %</p>
      </div>
    </div>
  )
}

export default App