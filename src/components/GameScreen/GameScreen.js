import { useState } from 'react'
import './GameScreen.css'


const GameScreen = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score}) => {
  const [letter, setLetter] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
  } 
  return (
    <div className='game'>
      <p>
       <span className='points'> Pontuação:{score} </span>
      </p>
      <h1> Advinhe a palavra:</h1>
      <h3 className='tip'>
        Dica sobre a palavra:{pickedCategory}
      </h3>
      <p className='tries'>Você ainda tem {guesses} tentativas !!!</p>
      <div className='word-container'>
       {letters.map((letter, index) =>(
        guessedLetters.includes(letter) ? (
          <span key={index} className="letter"></span>
        ):(
          <span key={index} className="blank-square"></span>
        )
       ))}
      </div>
      <div className='letter-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" maxLength={1} required onChange={(e)=> setLetter(e.target.value)} value={letter}/>
          <button>Jogar !!!</button>
        </form>   
      </div>
      <div className="wrong-letters-container">
        <p>
          Letras já utilizadas:{wrongLetters.map((letter,index) =>(
            <span key={index}>{letter}</span>
          ))}         
        </p>   
      </div>
    </div>   
  )
}

export default GameScreen