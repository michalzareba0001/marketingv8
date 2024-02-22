import React from 'react'
import './GrearestCompanies.css'
import BlueButton3 from './BlueButton3'
import LogoBrick from './LogoBrick'
import HivioLogo from '../images/svg/hiviologo.svg'
import TcoLogo from '../images/svg/tcologo.svg'
import SchLogo from '../images/svg/schlogo.svg'
import SesvanLogo from '../images/svg/sesvanlogo.svg'
import HardRockLogo from '../images/svg/hardrocklogo.svg'
import HavenLogo from '../images/svg/hevenlogo.svg'
import HiltonLogo from '../images/svg/hilton.svg'
import SheratonLogo from '../images/svg/sheratonlogo.svg'
import JaguarLogo from '../images/svg/jaguarlogo.svg'
import { useLanguage } from '../LanguageContext'




function GreatestCompanies() {
    const { language } = useLanguage();
    return (
        <div className='container-grid'>
            <div className='left'>
                {language === 'english' ?
                    <h3 className='we-only-work'>Enter the realm of exclusive<br />
                        <span className='text-row-2'>e-commerce customers</span><br />
                        <span className='text-row-3'>and go beyond.</span>
                    </h3>
                    :
                    <h3 className='we-only-work'>Wkrocz w świat ekskluzywnych<br />
                        <span className='text-row-2'>klientów e-commerce</span><br />
                        <span className='text-row-3'>i idź naprzód.</span>
                    </h3>
                }
                {language === 'english' ?
                    <p className='we-are-global-agency'>
                        Trust a premium marketing agency exclusively serving elite brands, crafting bespoke <br />
                        strategies, optimizing conversions, and dissecting campaigns for extraordinary success.
                    </p>
                    :
                    <p className='we-are-global-agency'>
                        Zaufaj ekskluzywnej agencji marketingowej obsługującej wyłącznie elitarne <br/> marki, tworzącej dedykowane
                        strategie, optymalizującej konwersje i analizującej <br/> kampanie dla niezwykłego sukcesu.
                    </p>
                }
                <div className='contact-us-button'>
                    <BlueButton3
                        text={language === 'english' ? 'Contact us' : 'Napisz do nas'}
                    />
                </div>
            </div>
            <div className='right'>
                <div className='logos-grid'>
                    <LogoBrick
                        src={HivioLogo}
                        alt='Hivio Logo'

                    />
                    <LogoBrick
                        src={TcoLogo}
                        alt='Tco Logo'

                    />
                    <LogoBrick
                        src={SchLogo}
                        alt='Scharmach Logo'

                    />
                    <LogoBrick
                        src={SesvanLogo}
                        alt='Sesvan Logo'

                    />
                    <LogoBrick
                        src={HardRockLogo}
                        alt='Hard Rock Logo'

                    />
                    <LogoBrick
                        src={HavenLogo}
                        alt='Heven Logo'

                    />
                    <LogoBrick
                        src={HiltonLogo}
                        alt='Hilton Logo'

                    />
                    <LogoBrick
                        src={SheratonLogo}
                        alt='Sheraton Logo'

                    />
                    <LogoBrick
                        src={JaguarLogo}
                        alt='Jaguar Logo'
                    />

                </div>
                <div className='more-clients'>


                </div>

            </div>
        </div>
    )
}

export default GreatestCompanies