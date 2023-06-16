import React from 'react'
import './FooterMain.css'
import LogoBig from '../images/svg/v8logobig.svg'
import BlueButtonLong from './BlueButtonLong'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import IconFrameS from './IconFrameS'

function FooterMain() {
    return (
        <div className='footer-main-container'>
            <div className='col-one'>
                <img src={LogoBig} alt='Marketing v8 logo' />
                <p>Join the unique world of premium<br />
                    e-commerce now and discover the limitless<br /> possibilities that await you.</p>

            </div>
            <div className='col-two'>
                <div className='col-title'>
                    <h4>be beyond</h4>
                </div>
                <div className='col-data'>
                    <p>Get fresh digital news, insights,<br />
                        and advice from V8's experts and <br />
                        consultants - straight to your inbox.</p>
                    <form>
                        <input className='newsletter-input' id='e-mail' placeholder='Your e-mail' />
                        <BlueButtonLong
                            text='Get my free monthly advice'
                        />

                    </form>
                </div>

            </div>
            <div className='col-three'>
                <div className='col-title'>
                    <h4>Contact</h4>
                </div>
                <div className='col-data'>
                    <p>611 Gateway Boulevard 120.<br />
                        South San Francisco,<br />
                        CA 94080</p>

                    <a className='contact-link' href='tel:+14155826423'>+1 (415) 582-6423</a>

                    <a className='contact-link' href='mailto:marketing@v8.com'>marketing@v8.com</a>
                </div>

            </div>
            <div className='deco-icons-all'>
                    <IconFrameS
                        icon={DecoIco1}
                        text='STRATEGY'
                        width='195px'
                    />
            
                
                    <IconFrameS
                        icon={DecoIco2}
                        text='CREATIVITY'
                        width='210px'
                    />
                
                
                    <IconFrameS
                        icon={DecoIco3}
                        text='BEYOND'
                        width='168px'
                    />
                
            </div>
        </div>
    )
}

export default FooterMain