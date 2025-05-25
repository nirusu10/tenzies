import { useState } from 'react'
import Die from './components/Die'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    let randomDice = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1)
      randomDice.push(randomNumber)
    }
    return randomDice
  }

  function reRollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map((die, index) => <Die key={index} value={die} />)

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>
      <button className='btn' onClick={reRollDice}>
        Roll
      </button>
    </main>
  )
}
