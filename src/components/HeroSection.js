import React from 'react'
import './HeroSection.css'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import Oicon from '../images/svg/O.svg'
import Inficon from '../images/svg/8.svg'
import WeInviteYou from '../images/svg/weInviteYouFurther.svg'
import Crystal from '../video/crystalCaleidoscope.mp4'
import IconFrame from './IconFrame'
import RoundText from './RoundText'
import { useLanguage } from '../LanguageContext'



function HeroSection() {
    const { language } = useLanguage();

    return (
        <div className='hero-section'>
            <div className='left-column'>
                {language === 'english' ?
                    <div className='slogan-div'>
                        <div className='first-row'><h1>IDEAS C</h1><div className='icons-div'><img className='o-icon' src={Oicon} alt='deco-icon' /><img className='inf-icon' src={Inficon} alt='deco-icon' /></div><h1>NNECT</h1></div>
                        <div className='second-row'><h1>THROUGH</h1></div>
                    </div>
                    :
                    <div className='slogan-div'>
                        <div className='first-row'><h1>P</h1><div className='icons-div'><img className='o-icon' src={Oicon} alt='deco-icon' /><img className='inf-icon' src={Inficon} alt='deco-icon' /></div><h1>MYSŁY</h1></div>
                        <div className='second-row'><h1>ŁĄCZĄ SIĘ</h1></div>
                    </div>
                }
                <div className='hero-description'>
                    <div className='description-left'>
                        {language === 'english' ?
                            <p className='description-text'> <strong>Marketing V8</strong> is a full-service growth<br />
                                marketing agency that helps B2B<br />
                                brands reach their goals and beyond.</p> :

                            <p className='description-text'> <strong>Marketing V8</strong> to agencja marketingu kompleksowego,  <br />
                                która pomaga markom B2B<br />
                                osiągnąć swoje cele i więcej.</p>}
                        <div className='round-text-div'>
                            <RoundText

                            />

                        </div>
                    </div>
                    <div className='description-right'>
                        <div className='deco-ico-1'>
                            <IconFrame
                                icon={DecoIco1}
                                text={language === 'english' ? 'STRATEGY' : 'STRATEGIA'}
                                width='fit-content'
                            />
                        </div>
                        <div className='deco-ico-2'>
                            <IconFrame
                                icon={DecoIco2}
                                text={language === 'english' ? 'CREATIVITY' : 'KREATYWNOŚĆ'}
                                width='fit-content'
                            />
                        </div>
                        <div className='deco-ico-3'>
                            <IconFrame
                                icon={DecoIco3}
                                text={language === 'english' ? 'BEYOND' : 'WIĘCEJ'}
                                width='fit-content'
                            />
                        </div>



                    </div>
                </div>
            </div>
            <div className='right-column'>
                <div className='video-container'>
                    <video className='crystal-video' src={Crystal} autoPlay loop muted />
                </div>
                {language === 'english' ?
                    <img src={WeInviteYou} className='we-invite-you' alt='We invite You further' />
                    :
                    <img src={WeInviteYou} className='we-invite-you' alt='We invite You further' />
                }
            </div>
        </div>

    )
}

export default HeroSection