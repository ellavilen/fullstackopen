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

const Part = (part) => {
  return (
    <div>
      <p>
        Part name: {part.part}
        <br />
        Exercises: {part.exercises}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
    </div>
  );
};

const Total = (props) => {
  const totalExercises = props.exercises.reduce((total, current) => total + current, 0);

  return (
    <div>
      <p>Number of exercises: {totalExercises}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [10, 7, 14];


  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises={exercises} />
    </div>
  )
}

export default App