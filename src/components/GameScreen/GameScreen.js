import { useState,useRef } from 'react'
import './GameScreen.css'


const GameScreen = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score}) => {
  const [letter, setLetter] = useState('');
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('');
    letterInputRef.current.focus();
  } 
  return (
    <div className='game'>
      <p>
       <span className='points'> Pontuação:{score} </span>
      </p>
      <h1> Advinhe a palavra:</h1>
      <div className="tip">
        <h3>
          Dica sobre a palavra:
        </h3>
        <h4 className='tip-word'>{pickedCategory}</h4>
      </div>
      <p className='tries'>Você ainda tem {guesses} tentativas !!!</p>
      <div className='word-container'>
       {letters.map((letter, index) =>(
        guessedLetters.includes(letter) ? (
          <span key={index} className="letter">{letter.toUpperCase()}</span>
        ):(
          <span key={index} className="blank-square"></span>
        )
       ))}
      </div>
      <div className='letter-container'>
        <form onSubmit={handleSubmit}>
          <input type="text" maxLength={1} 
          required 
          onChange={(e)=> setLetter(e.target.value)} 
          value={letter} 
          ref={letterInputRef}/>
          <button className='play'>Jogar</button>
        </form>   
      </div>
      <div className="wrong-letters-container">
        <p>
          Letras já utilizadas: {wrongLetters.map((letter,index) =>(
            <span key={index}>{letter.toUpperCase()}, </span>
          ))}         
        </p>   
      </div>
    </div>   
  )
}

export default GameScreen;