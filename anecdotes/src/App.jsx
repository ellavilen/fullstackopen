import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //initialize votes state with 0 for each anecdote
  const startVotes = anecdotes.reduce((acc, anecdote) => {
    acc[anecdote] = 0;
    return acc;
  }, {})
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(startVotes)

  //randomize anecdotes
  const randomAnecdote = () => {
    const anecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(anecdote)
  }

  //save vote for the current anecdote
  const voteAnecdote = () =>{
    const updatedVotes = {...votes};
    updatedVotes[anecdotes[selected]] += 1
    setVotes(updatedVotes);
  }


  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <br/>
      <div>This anecdote has {votes[anecdotes[selected]]} votes</div>
  
      <br/>
      <Button handleClick={voteAnecdote} text="Vote"></Button>

      <Button handleClick={randomAnecdote} text="Next anecdote"></Button>

    </div>
  )
}

export default App
