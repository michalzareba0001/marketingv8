import React from 'react'
import './GrearestCompanies.css'
import BlueButton from './BlueButton'
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
import { Link } from 'react-scroll'




function GreatestCompanies() {
    return (
        <div className='container-grid'>
            <div className='left'>
                <h3 className='we-only-work'>Enter the realm of exclusive<br />
                    <span className='text-row-2'>e-commerce customers</span><br />
                    <span className='text-row-3'>and go beyond.</span>
                </h3>
                <p className='we-are-global-agency'>
                Trust a premium marketing agency exclusively serving elite brands, crafting bespoke <br/>
                strategies, optimizing conversions, and dissecting campaigns for extraordinary success.
                </p>
                <div className='contact-us-button'>
                    <Link to='contact-form' smooth={true} duration={1000}>
                    <BlueButton
                        text='Contact us'
                    />
                    </Link>
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