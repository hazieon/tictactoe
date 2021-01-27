//square, board, player, game,

// By inspecting the code, you’ll notice that we have three React components:

//     Square
//     Board
//     Game

//     The Square component renders a single <button> and the Board renders 9 squares.
//      The Game component renders a board with placeholder values which we’ll modify later.
//      There are currently no interactive components

//      In Board’s renderSquare method, change the code to pass a prop called value to the Square:

//      React components can have state by setting this.state in their constructors. this.state should be considered as private to a React component that it’s defined in. Let’s store the current value of the Square in this.state, and change it when the Square is clicked.
//     ...constructor to the class to initialize the state:

//     By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render that Square whenever its <button> is clicked. After the update, the Square’s this.state.value will be 'X', so we’ll see the X on the game board. If you click on any Square, an X should show up.

// When you call setState in a component, React automatically updates the child components inside of it too.

// nstead, the best approach is to store the game’s state in the parent Board component instead of in each Square. The Board component can tell each Square what to display by passing a prop, just like we did when we passed a number to each Square.

// To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

// Given an array of 9 squares, this function will check for a winner and return 'X', 'O', or null as appropriate.

// We will call calculateWinner(squares) in the Board’s render function to check if a player has won. If a player has won, we can display text such as “Winner: X” or “Winner: O”. We’ll replace the status declaration in Board’s render function with this code:
