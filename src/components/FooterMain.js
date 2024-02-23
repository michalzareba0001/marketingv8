import React from 'react'
import './FooterMain.css'
import LogoBig from '../images/svg/v8logobig.svg'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import IconFrameS from './IconFrameS'
import Newsletterform from './Newsletterform'
import { useLanguage } from '../LanguageContext'

function FooterMain() {
    const { language } = useLanguage()
    return (
        <div className='footer-main-container'>
            <div className='col-one'>
                <img src={LogoBig} alt='Marketing v8 logo' />
                {language === 'english' ?
                    <p>Join the unique world of premium<br />
                        e-commerce now and discover the limitless<br /> possibilities that await you.</p>
                    :
                    <p>Dołącz teraz do wyjątkowego świata ekskluzywnego <br />
                        e-commerce i odkryj nieograniczone <br /> możliwości, które na Ciebie czekają.</p>
                }

            </div>
            <div className='col-two'>
                <div className='col-title'>
                    {language === 'english' ?
                        <h4>be beyond</h4>
                        :
                        <h4>Przekraczaj granice</h4>
                    }
                </div>
                <div className='col-data'>
                    {language === 'english' ?
                        <p>Get fresh digital news, insights,<br />
                            and advice from V8's experts and <br />
                            consultants - straight to your inbox.</p>
                        :
                        <p>Otrzymuj świeże wiadomości, spostrzeżenia
                            oraz porady od ekspertów <br />
                            i konsultantów V8 - prosto do Twojej skrzynki mailowej.</p>
                    }
                    <Newsletterform />
                </div>

            </div>
            <div className='col-three'>
                <div className='col-title'>
                    {language === 'english' ?
                        <h4>Contact</h4>
                        :
                        <h4>Kontakt</h4>
                    }
                </div>
                <div className='col-data'>
                    {language === 'english' ?
                    <p>611 Gateway Boulevard 120.<br />
                        South San Francisco,<br />
                        CA 94080</p>
                    :
                    <p>
                        Scharmach Consulting<br/>
                        Rokocin 4D<br/>
                        83-200 Rokocin
                    </p>
}
                    <a className='contact-link' href='tel:+48535959510'>+48 535 959 510</a>

                    <a className='contact-link' href='mailto:office@marketingv8.co'>office@marketingv8.co</a>
                </div>

            </div>
            <div className='deco-icons-all'>
                <IconFrameS
                    icon={DecoIco1}
                    text= {language === 'english' ? 'STRATEGY' : 'STRATEGIA'}
                    width='195px'
                />


                <IconFrameS
                    icon={DecoIco2}
                    text={language === 'english' ? 'CREATIVITY' : 'KREATYWNOŚĆ'}
                    width={language === 'english' ? '210px' : '260px'}
                />


                <IconFrameS
                    icon={DecoIco3}
                    text={language === 'english' ? 'BEYOND' : 'WIĘCEJ'}
                    width='168px'
                />

            </div>
        </div>
    )
}

export default FooterMain