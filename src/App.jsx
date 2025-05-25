import { useState } from 'react'
import Die from './components/Die'

export default function App() {
  function generateAllNewDice() {
    let randomDice = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1)
      randomDice.push(randomNumber)
    }
    return randomDice
  }

  const [dice, setDice] = useState(generateAllNewDice())

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='dice-container'>
        {dice.map((die, index) => (
          <Die key={index} value={die} />
        ))}
      </div>
      <button className='btn'>Roll</button>
    </main>
  )
}
