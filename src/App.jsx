import { useState } from 'react'
// import Confetti from 'react-confetti'
import Die from './components/Die'

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())

  let gameWon = false

  if (
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value)
  ) {
    gameWon = true
  }

  function generateAllNewDice() {
    let randomDice = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      randomDice.push({
        value: randomNumber,
        isHeld: false,
        id: crypto.randomUUID(),
      })
    }
    return randomDice
  }

  function rollDice() {
    if (!gameWon) {
      const rolledDice = dice.map((die) => {
        if (die.isHeld) {
          return die
        } else {
          return { ...die, value: Math.ceil(Math.random() * 6) }
        }
      })
      setDice(rolledDice)
    } else {
      setDice(generateAllNewDice())
    }
  }

  function hold(id) {
    const newDice = dice.map((die) => {
      if (die.id === id) {
        return { ...die, isHeld: !die.isHeld }
      } else {
        return die
      }
    })

    setDice(newDice)
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} die={die} hold={hold} />
  ))

  return (
    <main>
      {/* {gameWon && <Confetti />} */}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>
      <button className='btn' onClick={rollDice}>
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  )
}
