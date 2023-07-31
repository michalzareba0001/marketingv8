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

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='left-column'>
                <div className='slogan-div'>
                    <div className='first-row'><h1>IDEAS C</h1><div className='icons-div'><img className='o-icon' src={Oicon} alt='deco-icon' /><img className='inf-icon' src={Inficon} alt='deco-icon' /></div><h1>NNECT</h1></div>
                    <div className='second-row'><h1>THROUGH</h1></div>
                </div>
                <div className='hero-description'>
                    <div className='description-left'>
                        <p className='description-text'><strong>Marketing V8</strong> is a full-service growth<br />
                            marketing agency that helps B2B<br />
                            brands reach their goals and beyond.</p>
                        <div className='round-text-div'>
                                <RoundText

                                />

                        </div>
                    </div>
                    <div className='description-right'>
                        <div className='deco-ico-1'>
                            <IconFrame
                                icon={DecoIco1}
                                text='STRATEGY'
                                width='332px'
                            />
                        </div>
                        <div className='deco-ico-2'>
                            <IconFrame
                                icon={DecoIco2}
                                text='CREATIVITY'
                                width='363px'
                            />
                        </div>
                        <div className='deco-ico-3'>
                            <IconFrame
                                icon={DecoIco3}
                                text='BEYOND'
                                width='282px'
                            />
                        </div>



                    </div>
                </div>
            </div>
            <div className='right-column'>
                <div className='video-container'>
                    <video className='crystal-video' src={Crystal} autoPlay loop muted />
                </div>
                <img src={WeInviteYou} className='we-invite-you' alt='We invite You further' />
            </div>
        </div>

    )
}

export default HeroSection