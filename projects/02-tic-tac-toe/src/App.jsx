import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square.jsx"
import {TURNS} from "./constanst.js"
import { checkWinnerFrom } from "./boards.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //Null no hay ganador, false es empate.


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

const upgradeBoard = (index) => {
  // Si ese cuadro ya tiene un valor o hay un ganador, no puede actualizarlo
  if(board[index] || winner) return

// Actualiza el tablero
  const newBoard = [... board]
  newBoard[index] = turn
  setBoard(newBoard)

// Cambia el turno
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)

// Revisar si hay ganadores
  const newWinner = checkWinnerFrom(newBoard)
  if(newWinner) {
    confetti()
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) {
    setWinner(false)
  }
}

  return (
    <main className="board">
      <h1>Tateti</h1>
      <button onClick={resetGame}>Volver a empezar</button>
      <section className="game">
        {board.map((square, index) => {
          return (
           <Square
            key={index}
            index={index}
            updateBoard={upgradeBoard}
            >
          {square}
            </Square>
          )
        })}
      </section>

      <section className="turn"> 
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
