import React from 'react'
import './GrearestCompanies.css'
import BlueButton from './BlueButton'
import LogoBrick from './LogoBrick'
import LinkWithArrow from './LinkWithArrow'
import HivioLogo from '../images/svg/hiviologo.svg'
import TcoLogo from '../images/svg/tcologo.svg'
import SchLogo from '../images/svg/schlogo.svg'
import SesvanLogo from '../images/svg/sesvanlogo.svg'
import HardRockLogo from '../images/svg/hardrocklogo.svg'
import HavenLogo from '../images/svg/hevenlogo.svg'
import HiltonLogo from '../images/svg/hilton.svg'
import SheratonLogo from '../images/svg/sheratonlogo.svg'
import JaguarLogo from '../images/svg/jaguarlogo.svg'




function GreatestCompanies() {
    return (
        <div className='container-grid'>
            <div className='left'>
                <h3 className='we-only-work'>We only work with<br />
                    <span className='text-row-2'>companies focused on</span><br />
                    <span className='text-row-3'>being the greatest</span>
                </h3>
                <p className='we-are-global-agency'>
                    We’re a global agency focused on improving the personal & professional<br />
                    lives of our team - and we do that by growing our clients businesses.
                </p>
                <div className='contact-us-button'>
                    <BlueButton
                        text='Contact us'
                    />
                </div>
            </div>
            <div className='right'>
                <div className='logos-grid'>
                    <LogoBrick 
                        src={HivioLogo}
                        alt= 'Hivio Logo'

                    />
                    <LogoBrick 
                        src={TcoLogo}
                        alt= 'Tco Logo'

                    />
                    <LogoBrick 
                        src={SchLogo}
                        alt= 'Scharmach Logo'

                    />
                    <LogoBrick 
                        src={SesvanLogo}
                        alt= 'Sesvan Logo'

                    />
                    <LogoBrick 
                        src={HardRockLogo}
                        alt= 'Hard Rock Logo'

                    />
                    <LogoBrick 
                        src={HavenLogo}
                        alt= 'Heven Logo'

                    />
                    <LogoBrick 
                        src={HiltonLogo}
                        alt= 'Hilton Logo'

                    />
                    <LogoBrick 
                        src={SheratonLogo}
                        alt= 'Sheraton Logo'

                    />
                    <LogoBrick 
                        src={JaguarLogo}
                        alt= 'Jaguar Logo'
                    />
                    
                </div>
                <div className='more-clients'>
                    <LinkWithArrow 
                    text = 'More clients'
                    />

                </div>

            </div>
        </div>
    )
}

export default GreatestCompanies