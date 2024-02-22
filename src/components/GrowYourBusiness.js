import React from 'react'
import './GrowYourBusiness.css'
import CounterUno from './CounterUno'
import CounterDos from './CounterDos'
import CounterTrees from './CounterTrees'
import InfinityAnimation from './InfinityAnimation'
import { useLanguage } from '../LanguageContext'

function GrowYourBusiness() {
  const { language } = useLanguage();
  return (
    <div className='main-container grow-your-business-anchor'>
      <div className='content-container'>
        {language === 'english' ?
          <p className='small-text'>
            Working with us is not a cost. It’s an investment to your business growth.
          </p>
          :
          <p className='small-text'>
            Praca z nami to nie koszt. To inwestycja we wzrost Twojego biznesu.
          </p>
        }
        {language === 'english' ?
          <h3 className='first-title'>
            Grow your business<br />
            with effective and proven<br />
            ways to acquire customers.
          </h3>
          :
          <h3 className='first-title'>
            Rozwijaj swój biznes<br />
            dzięki skutecznym i sprawdzonym<br />
            sposobom pozyskiwania klientów.
          </h3>
        }
        <div className='counters'>
          <div className='counter1'>
            <hr className='thin-line' />
            <CounterUno />

            {language === 'english' ?
              <p className='counter-description'>
                Our numbers speak for us.<br />
                160 million, reported customer<br />
                revenues annually.
              </p>
              :
              <p className='counter-description'>
                Nasze liczby mówią same<br />
                za siebie. 160 milionów, <br />
                roczne przychody klientów.
              </p>
            }
          </div>
          <div className='counter2'>
            <hr className='thin-line' />
            <CounterDos />
            {language === 'english' ?
              <p className='counter-description'>
                We have a database of over 19 000<br />
                satisfied customers from all over<br />
                the world, and it is constantly growing.
              </p>
              :
              <p className='counter-description'>
                Posiadamy bazę danych ponad 19 000<br />
                zadowolonych klientów z całego<br />
                świata, która ciągle rośnie.
              </p>
            }
          </div>
          <div className='counter3'>
            <hr className='thin-line' />
            <CounterTrees />

            {language === 'english' ?
              <p className='counter-description'>
                We help growth<br />
                customers businesses<br />
                in over 36 different countries.
              </p>
              :
              <p className='counter-description'>
                Pomagamy w rozwoju<br />
                biznesów klientów<br />
                w ponad 36 różnych krajach.
              </p>
            }
          </div>
          <div className='counter4'>
            <hr className='thin-line' />
            <InfinityAnimation />
            {language === 'english' ?
              <p className='counter-description'>
                Possibilities for your<br />
                business when you<br />
                partner with us.
              </p>
              :
              <p className='counter-description'>
                Możliwości dla Twojego<br />
                biznesu, gdy współpracujesz<br />
                z nami.
              </p>
            }
          </div>

        </div>

      </div>


    </div >
  )
}

export default GrowYourBusiness