import React from 'react'
import { BsArrowRight } from "react-icons/bs"

function Final({lengthQuestions, correct}) {
  return (
    <div className='card'>
        
        <img src="img/fin.png" alt="image" />
        <h1> You have made <span style={{color: "#C0C0C0"}}>{correct}</span> right answers from <span style={{color: "#D3D3D3"}}>{lengthQuestions}</span> !</h1>
        <a className="card__link" href='/' >Try again <span className='arrow'><BsArrowRight /></span> </a>
    </div>
  )
}

export default Final