import React from 'react'
import './TopServices.css'
import RoundText from './RoundText'
import Kafel from './Kafel'
import DecoIco1 from '../images/svg/decoIco2.svg'
import DecoIco2 from '../images/svg/decoIco4.svg'
import DecoIco3 from '../images/svg/decoIco1.svg'
import DecoIco4 from '../images/svg/decoIco5.svg'
import DecoIco5 from '../images/svg/decoIco3.svg'
import { useLanguage } from '../LanguageContext'




function TopServices() {
    const { language } = useLanguage()
    return (
        <div className='top-services-main'>
            <div className='title-section'>
                <div className='col-one'>
                    {language === 'english' ?
                        <h3>
                            Marketing V8 <br />
                            <span className='row-two'> top services.</span>
                        </h3>
                        :
                        <h3>
                            Marketing V8 <br />
                            <span className='row-two'>najlepsze usługi.</span>
                        </h3>
                    }
                </div>
                <div className='col-two'>
                    {language === 'english' ?
                        <p>
                            V8 marketing services made to assist <br />
                            the growth and development.
                        </p>
                        :
                        <p>
                            Usługi marketingowe V8 stworzone,<br />
                            aby wspierać wzrost i rozwój.
                        </p>
                    }
                </div>
                <div className='col-three'>

                    <RoundText
                        height='109px'
                        arrwidth='30px'
                    />

                </div>

            </div>
            <div className='kafle-section'>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco1}
                        title={language === 'english' ? 'Premium Design' : 'Design'}
                        description='Give your users a website, mobile app, or any other digital experience that is easy to use, and looks great with UX/UI services we offer.'
                    />
                </div>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco2}
                        title={language === 'english' ? 'Consulting' : 'Doradztwo'}
                        description={language === 'english' ? 'Powering it all is a personalised, battle-tested process we never stray from. It’s how we guarantee exceptional results – every single time.' : 'Naszą siłą napędową jest spersonalizowany, przetestowany w boju proces, którego zawsze się trzymamy. Dzięki niemu gwarantujemy wyjątkowe wyniki - za każdym razem.'}
                    />
                </div>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco3}
                        title={language === 'english' ? 'Advertising' : 'Reklama' }
                        description={language === 'english' ? 'The best part about Google ads is that you can quickly get started without spending too much money on advertisements.' : 'Najlepszą częścią reklam Google jest to, że możesz szybko rozpocząć bez wydawania zbyt dużej ilości pieniędzy na reklamy.'}
                    />
                </div>
                <div className='kafel-4'>
                    <Kafel
                        ico={DecoIco4}
                        title={language === 'english'? 'Growth' : 'Rozwój'}
                        description={language === 'english'? 'It can be challenging for businesses to stand out from the crowd – but not if they know how to use Ads properly.' : 'Dla firm może być wyzwaniem wyróżnienie się spośród tłumu - ale nie jeśli wiedzą, jak właściwie korzystać z reklam.'}
                    />
                </div>
                <div className='kafel-5'>
                    <Kafel
                        ico={DecoIco5}
                        title={language === 'english' ? 'Beyond' : 'Więcej'}
                        description={language === 'english' ?
                            'Are you an ambitious brand that wants to create world-class products? When the stakes are high and the scale is great, V8 is ideal partner for you.'
                            :
                            'Czy jesteś ambitną marką, która pragnie stworzyć produkty światowej klasy? Kiedy stawki są wysokie, a skala jest ogromna, V8 jest idealnym partnerem dla Ciebie.'
                        }
                    />
                </div>

            </div>


        </div>
    )
}

export default TopServices