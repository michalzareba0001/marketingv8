import React from 'react'
import './Kafel.css'
import { useLanguage } from '../LanguageContext'

function Kafel(props) {
  const { language } = useLanguage()
  return (
    <div className={language === 'english' ? 'kafel-div' : 'kafel-div-pl'}>
        
            <img src={props.ico} alt='ikona dekoracyjna' />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        

    </div>
  )
}

export default Kafel