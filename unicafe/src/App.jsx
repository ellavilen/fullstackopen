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
    {text}{value}
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
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text="Good" /></td>
          <td><StatisticLine value ={good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Neutral" /></td>
          <td><StatisticLine value ={neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Bad" /></td>
          <td><StatisticLine value ={bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="All" /></td>
          <td><StatisticLine value ={total} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Average" /></td>
          <td><StatisticLine value ={average} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="Positive %" /></td>
          <td><StatisticLine value ={percent} /></td>
        </tr>
      </tbody>
    </table>
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