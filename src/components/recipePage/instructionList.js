export const InstructionList = (props) => {
  return (
    <div>
      <h4>Instructions:</h4>
      <ul>
        {props.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ul>
    </div>
  )
}