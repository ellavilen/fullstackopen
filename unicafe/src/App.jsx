import { useState } from 'react'

//button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//statistic result lines
const StatisticLine = ({ text, value }) => (
  <div>
    {text}: {value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  //count the statistics
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const percent = (good / total) * 100;

  //show this text before feedback clicks have been given
  if(total === 0){
    return(
      <p>No feedback given yet.</p>
    )
  }
  return (
    <div>
      <StatisticLine text="Good" value ={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive percent" value={percent} />
    </div>
  );
}

const App = () => {
  //props and handle clicks
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //handling the button clicks
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

    <h1>Statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad} />
  </div>
  )
}

export default App