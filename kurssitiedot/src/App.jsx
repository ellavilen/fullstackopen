const App = () => {
  const course = 'Half Stack application development'

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
  }
  
  const Part = () => {
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
      <div>
        {parts.map((part, index) => (
          <p key={index}>
            {part.name} - Exercises: {part.exercises}
          </p>
        ))}
      </div>
    )
  };

  const Total = () => {
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
    const totalNumber = parts.reduce((total, part) => total + part.exercises, 0);

    return (
      <div>
        <p>Total: {totalNumber}</p>
      </div>
    )
  };
  
  const Content = () => {
    return (
      <div>
        <Part />
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App