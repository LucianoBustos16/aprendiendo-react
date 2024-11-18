import { WINNER_COMBOS } from "../constanst"

export const checkWinnerFrom = (boardToCheck) => {
    // Revisamos cada una de las combinaciones posibles para ver si hay ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    // Si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
  //Revisamos si hay empate, si no hay mas nulls en el tablero
  return newBoard.every((Square) => Square != null)
}