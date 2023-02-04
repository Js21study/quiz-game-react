
import './App.css';
import Quiz from './components/Quiz';
import Final from './components/Final';
import { useState } from 'react';


export const questions = [
  {
    name: 'Psychology is best defined as the study of:',
    variants: ['mental health', 'consciousness and intuition', 'the mind and behavior'],
    correct: 2,
  },
  {
    name: 'The idea that children are born with no knowledge or “content” whatsoever and are “filled” by life experiences is called:',
    variants: ['rationalism', 'determinism', 'tabula rasa'],
    correct: 2,
  },
  {
    name: 'Which of the following perspectives argues that human behavior develops in certain ways because it serves a useful purpose?',
    variants: ['Psychoanalysis ', 'Functionalism', 'Cognitive psychology'],
    correct: 1,
  }
]

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const percentAll = Math.round(step / questions.length * 100);
  const lengthQuestions = questions.length

  const onClickVariant = (i) => {
    console.log(step, i)
    setStep(step + 1)

    if(i === question.correct){
      setCorrect(correct+1)
    }
  }
  return (
    <div className="wrapper">
      <div className="container">
        {step !== questions.length
        ?
        <Quiz percentAll={percentAll} question={question} onClickVariant = {onClickVariant}/>
        :
        <Final correct={correct} lengthQuestions={lengthQuestions}/>
        }
      
      
      </div>
    </div>
  );
}

export default App;
