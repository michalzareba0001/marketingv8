import React from 'react'
import './WeAreAll.css'
import Cudzyslow from '../images/svg/cudzyslow.svg'
import PawelFoto from '../images/webp/pawelfoto_edited.webp'
import BlueButton3 from './BlueButton3'
import { useLanguage } from '../LanguageContext'

function WeAreAll() {
    const { language } = useLanguage()
    return (
        <div className='we-are-all-main'>
            <div className='we-are-all-left'>
                {language === 'english' ?
                    <h3>
                        Discover the power of premium <br />
                        e-commerce and unlock your <br />
                        business's full potential!
                    </h3>
                    :
                    <h3>
                        Odkryj moc premium <br />
                        e-commerce i odblokuj pełny <br />
                        potencjał swojego biznesu!
                    </h3>
                }
                {language === 'english' ?
                    <p>
                        Explore the potential of your business with our world-class solutions and expert strategies.<br />
                        We will help your premium brand rise to new heights and achieve exceptional growth through<br />
                        our passion for excellence and commitment to your success. Impossible? Not with us!
                    </p>
                    :
                    <p>
                        Odkryj potencjał swojego biznesu dzięki naszym rozwiązaniom światowej klasy i ekspertalnym strategiom.<br />
                        Pomożemy Twojej ekskluzywnej marce wznieść się na nowe wysokości i osiągnąć wyjątkowy wzrost dzięki<br />
                        naszej pasji do doskonałości i zaangażowaniu w Twoje sukcesy. Niemożliwe? Nie z nami!
                    </p>
                }
            </div>
            <div className='we-are-all-right-one'>
                <div className='cytat'>
                    <img src={Cudzyslow} alt='cudzysłów' className='cudzyslow-ico' />
                    {language === 'english' ?
                        <p className='cudzyslow-text'> We are flexible, but in business, we follow<br />
                            certain principles and always complete<br />
                            our tasks with 100% quality and dedication.
                        </p>
                        :
                        <p className='cudzyslow-text'>
                            Jesteśmy elastyczni, ale w biznesie kierujemy się
                            pewnymi zasadami i zawsze wykonujemy
                            nasze zadania z 100% jakością i zaangażowaniem.
                        </p>
                    }

                </div>
                <div className='the-boss'>
                    <div className='boss-foto'>
                        <img src={PawelFoto} alt='Paweł Scharmach' />

                    </div>
                    <div className='boss-text'>
                        <p>Pawel Scharmach<br />
                            {language === 'english' ?
                                <span className='blue-text'> CEO AT MARKETING V8 </span>
                                :
                                <span className='blue-text'> CEO MARKETING V8 </span>
                            }
                        </p>
                    </div>
                </div>
                <div className='button-div'>

                    <BlueButton3
                        text={language === 'english' ? 'Contact us' : 'Napisz do nas'}
                    />
                </div>
            </div>


        </div >
    )
}

export default WeAreAll