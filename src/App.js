//CSS
import './App.css';
//React
import { useCallback,useEffect,useState } from 'react';
import StartScreen from './components/StartScreen/StartScreen';
import GameScreen from './components/GameScreen/GameScreen';
import EndScreen from './components/EndScreen/EndScreen';
//data
import {wordsList} from './data/words';

const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'gameover'}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord,setWord] = useState('');
  const [pickedCategory, setCategory] = useState('');
  const [letters , setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score,setScore] = useState(0);
  
  
  const pickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const pickedWord = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {pickedWord,category}
  };
 
  // start the game
  const startGame = () => {
  const {pickedWord,category} = pickWordAndCategory();
    setGameStage(stages[1].name)
    let wordLetters = pickedWord.split('')
    let tratedWord = wordLetters.map((l) => l.toLowerCase())
      setCategory(category)
      setWord(pickedWord)
      setLetters(tratedWord)
  }

  // in game letter verification
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    };
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) =>[...actualGuessedLetters, normalizedLetter])
    } else {
      setWrongLetters((actualWrongLetters) =>[...actualWrongLetters,normalizedLetter]) 
     };
     setGuesses((actualGuesses) => actualGuesses - 1);
    };

    const ClearStates = () => {
      setGuessedLetters([]);
      setWrongLetters([]);
      setGuesses(5);
      setScore(0);
    }
    
    useEffect(() => {
      if (guesses <=0) {
        setGameStage(stages[2].name)   
        ClearStates()   
      }
     },[guesses])

  
  //restart the game
  const restartGame = () => {
    setGameStage(stages[1].name)
    ClearStates()
   
  };
  //home screen button function
  const homeScreen = () => {
    setGameStage(stages[0].name)
    ClearStates()
  };
   
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory} 
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}/>}
      
      {gameStage === 'gameover' && <EndScreen restartGame={restartGame} homeScreen={homeScreen} score={score} />}
    </div>
  );
}

export default App;
