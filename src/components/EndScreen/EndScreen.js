import './EndScreen.css';
const EndScreen  = ({restartGame,homeScreen,score}) => {
  return (
    <div className="end">
        <p>Game Over</p>
        <span>Sua pontuação foi: {score}</span>
        <div>
        <button onClick={restartGame}>Reiniciar o jogo</button>
        <button onClick={homeScreen}>Tela Inicial</button>
        </div>
    </div>
   
  )
}

export default EndScreen