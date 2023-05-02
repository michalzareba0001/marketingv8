import React from 'react'
import './HeroSection.css'
import Slogan from '../images/svg/ideasConnect.svg'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import WeInviteYou from '../images/svg/weInviteYouFurther.svg'
import Crystal from '../video/crystalCaleidoscope.mp4'
import IconFrame from './IconFrame'
import RoundText from './RoundText'

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='left-column'>
                <img className='main-slogan' src={Slogan} alt='Ideas Connect Throught' />
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