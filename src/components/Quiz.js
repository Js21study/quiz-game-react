import React from 'react'


function Quiz({question, onClickVariant, percentAll}) {
    

  return (
    <div className='card'>
        <div className="progress">
            <progress id="file" max="100" value={percentAll}>  </progress>
            <h1>{question.name}</h1>
            <ul>
                {question.variants.map((q, i) => <li onClick={() => onClickVariant(i)} key={q}>{q}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Quiz