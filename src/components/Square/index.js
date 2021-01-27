// square
// state - null, o, x
// props - idnumber
// behaviour - setSquare()

function Square({ onClick, value, id }) {
  return (
    <button className="square" id={id} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
