import React from 'react'
import './UnleashPotential.css'
import BlueButton3 from './BlueButton3'
import FiveStars from '../images/svg/5stars.svg'
import { useLanguage } from '../LanguageContext'


function UnleashPotential() {
  const { language } = useLanguage()
  return (
    <div className='unleash-potential-main'>
      {language === 'english' ?
        <h3>Unleash your business potential <br />
          with us and go beyond.</h3>
        :
        <h3>Odkryj potencjał swojego biznesu <br />
          z nami i idź wyżej.</h3>
      }
      <div className='button-div'>
        <BlueButton3
          text={language === 'english' ? 'Let’s Talk' : 'Kontakt'}
        />
      </div>
      {language === 'english' ?
        <p>Join our satisfied clients and go beyond with us.</p>
        :
        <p>Dołącz do naszych zadowolonych klientów i idź wyżej razem z nami.</p>
      }
      <div className='stars-section'>
        <div className='col-one'>
          <img src={FiveStars} alt='Five Stars' />
          {language === 'english' ?
            <p>
              “Many years of our cooperation bear fruit <br />
              very good results of my company.”
            </p>
            :
            <p>
              „Wiele lat naszej współpracy przynosi owoce <br />
              bardzo dobre wyniki mojej firmy.”
            </p>
          }
        </div>
        <div className='col-two'>
          <img src={FiveStars} alt='Five Stars' />
          {language === 'english' ?
            <p>
              “Effectively coordinatedand<br />
              professional team"
            </p>
            :
            <p>
              „Efektywnie zgrany oraz<br />
              profesjonalny zespół.”
            </p>
          }


        </div>
        <div className='col-three'>
          <img src={FiveStars} alt='Five Stars' />
          {language === 'english' ?
            <p>
              “High level of service helps me grow<br />
              the company on a scale of 20-30% per year”
            </p>
            :
            <p>
              „Wysoki poziom obsługi pomaga mi rozwijać<br />
              firmę w skali od 20 do 30% rocznie.”
            </p>
          }


        </div>
      </div>
    </div>
  )
}

export default UnleashPotential