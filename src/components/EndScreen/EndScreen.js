import './EndScreen.css';
const EndScreen  = ({restartGame,homeScreen}) => {
  return (
    <div className="end">
        <p>Game Over</p>
        <button onClick={restartGame}>Reiniciar o jogo</button>
        <button onClick={homeScreen}>Tela Inicial</button>
    </div>
   
  )
}

export default EndScreen