import { useState } from 'react'

//button object
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const percent = (good / total) * 100;

  return (
    <div>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {percent} %</p>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
    <h1>Give feedback</h1>
    <div>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
    </div>

    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>

    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App