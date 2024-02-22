import React from 'react'
import './PortfolioSection.css'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import SesvanFoto from '../images/webp/sesvan-wiz_edited.webp'
import HevenFoto from '../images/webp/heven-wiz_edited.webp'
import HivioFoto from '../images/webp/hivio-wiz_edited.webp'
import { useLanguage } from '../LanguageContext'



function PortfolioSection() {
    const { language } = useLanguage()
    return (
        <div className='portfolio-section'>
            <div className='first-title-div'>
                <div className='col-one'>
                    {language === 'english' ?
                        <h3 className='first-title'>
                            Unleash the power<br /> of passion.
                        </h3>
                        :
                        <h3 className='first-title'>
                            Uwolnij moc<br /> pasji.
                        </h3>
                    }
                </div>
                <div className='col-two'>
                    {language === 'english' ?
                        <p>
                            Our premium e-commerce solutions<br /> redefine excellence!
                        </p>
                        :
                        <p>
                            Nasze ekskluzywne rozwiązania e-commerce<br />definiują na nowo doskonałość!
                        </p>
                    }
                </div>
                <div className='col-three'>
                    <img src={DecoIco1} alt='decoration icon' className='deco-icon' />
                    <img src={DecoIco2} alt='decoration icon' className='deco-icon' />
                    <img src={DecoIco3} alt='decoration icon' className='deco-icon' />
                </div>
            </div>
            <div className='client-description1'>
                <div className='client-text'>
                    <h4 className='client-name'>Sesvan</h4>
                    {language === 'english' ?
                        <p className='desc-big'>
                            For the SESVAN brand, a fully adapted website was developed, meeting customer <br /> expectations and specific market requirements.
                        </p>
                        :
                        <p className='desc-big'>
                            Dla marki SESVAN została opracowana w pełni dostosowana witryna internetowa, spełniająca oczekiwania klienta oraz specyficzne wymagania rynkowe.
                        </p>
                    }
                    {language === 'english' ?
                        <p className='desc-small'>
                            We have conducted numerous studies to identify key areas of concentration for the brand. Our strategy has been a significant success, which is<br /> confirmed by the results of our activities.
                        </p>
                        :
                        <p className='desc-small'>
                            Przeprowadziliśmy wiele badań, aby zidentyfikować kluczowe obszary koncentracji dla marki. Nasza strategia odniosła znaczący sukces, co potwierdzają wyniki naszych działań.
                        </p>
                    }


                </div>
                <div className='client-foto'>
                    <img src={SesvanFoto} alt='sesvan portfolio' />

                </div>
            </div>

            <div className='client-description2'>
                <div className='client-foto'>
                    <img src={HevenFoto} alt='heven portfolio' />

                </div>
                <div className='client-text'>
                    <h4 className='client-name'>Heven</h4>
                    {language === 'english' ?
                        <p className='desc-big'>
                            For our international client, we took on the challenge of refreshing the visual page<br />
                            and optimizing the visibility in search engines.
                        </p>
                        :
                        <p className='desc-big'>
                            Dla naszego międzynarodowego klienta podjęliśmy się wyzwania odświeżenia wizualnej strony
                            oraz optymalizacji widoczności w wyszukiwarkach internetowych.
                        </p>
                    }
                    {language === 'english' ?
                        <p className='desc-small'>
                            The result was the implementation of a modern e-commerce system<br />
                            and a coherent visual identification system, which allowed the brand<br />
                            to build a strong image in the fashion world.
                        </p>
                        :
                        <p className='desc-small'>
                            Efektem było wdrożenie nowoczesnego systemu e-commerce<br />
                            oraz spójnego systemu identyfikacji wizualnej, co umożliwiło marce<br />
                            zbudowanie silnego wizerunku w świecie mody.
                        </p>
                    }
                </div>
            </div>

            <div className='client-description3'>
                <div className='client-text'>
                    <h4 className='client-name'>Hivio</h4>
                    {language === 'english' ?
                        <p className='desc-big'>
                            The marketing strategy was crafted, resulting<br />
                            in increased brand awareness, targeted<br />
                            customer reach, and boosted sales.
                        </p>
                        :
                        <p className='desc-big'>
                            Opracowano strategię marketingową, co zaowocowało
                            zwiększeniem świadomości marki, dotarciem do wybranych
                            klientów oraz zwiększeniem sprzedaży.
                        </p>
                    }
                    {language === 'english' ?
                        <p className='desc-small'>
                            Digital marketing campaign with SEO, PPC, and social media. Offline<br /> activities included trade fair participation and product demonstrations.<br /> This combination led to successful goal achievement.
                        </p>
                        :
                        <p className='desc-small'>
                            Kampania marketingowa w internecie z SEO, PPC oraz social media. Aktywności offline obejmowały udział w targach oraz prezentacje produktów.<br /> Ta kombinacja przyczyniła się do osiągnięcia sukcesu w realizacji celów.
                        </p>
                    }

                </div>
                <div className='client-foto'>
                    <img src={HivioFoto} className='hivio-foto' alt='hivio portfolio' />

                </div>

            </div>

        </div>
    )
}

export default PortfolioSection