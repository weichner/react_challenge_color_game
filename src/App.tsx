import { useState, useEffect } from 'react'
import './App.css'
import { getRandomColor } from './utils/utils'

 enum Result {
  Correct, 
  Wrong
 }

function App() {
 const [color, setColor] = useState<string>('')
 const [answers, setAnswers] = useState<string[]>([]) 
 const [result, setResult] = useState<Result | undefined>(undefined)

 const generateColors = () => {
  const actualColor = getRandomColor()
  setColor(actualColor)
  setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => Math.random() - 0.5)) 
 }

 useEffect(() => {
  generateColors()
 }, [])

 const handleAnswer = (answer: string) => {
  if (answer === color) {
    setResult(Result.Correct)
    generateColors() 
  } else {
    setResult(Result.Wrong)
  }
 }

  return <div className='App'>
    
    <div>
    <div className='guess-me' style={{background: color}}></div>
    {answers.map(answer => <button key={answer} onClick={() => handleAnswer(answer)}>
      {answer}
    </button>)}
    {result === Result.Wrong && <div className='wrong'>Wrong answer, try again!</div>}
    {result === Result.Correct && <div className='correct'>Correct!</div>}
    </div>
  </div>
}

export default App
