export default function Die({ die, hold }) {
  return (
    <button
      onClick={() => hold(die.id)}
      className={`die ${die.isHeld && 'held'}`}
    >
      {die.value}
    </button>
  )
}
