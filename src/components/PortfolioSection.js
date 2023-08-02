import React from 'react'
import './PortfolioSection.css'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import SesvanFoto from '../images/webp/sesvan-wiz_edited.webp'
import HevenFoto from '../images/webp/heven-wiz_edited.webp'
import HivioFoto from '../images/webp/hivio-wiz_edited.webp'



function PortfolioSection() {
    return (
        <div className='portfolio-section'>
            <div className='first-title-div'>
                <div className='col-one'>
                    <h3 className='first-title'>
                        Unleash the power<br /> of passion.
                    </h3>
                </div>
                <div className='col-two'>
                    <p>
                        Our premium e-commerce solutions<br /> redefine excellence!
                    </p>
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
                    <p className='desc-big'>
                        For the SESVAN brand, a fully adapted website was developed, meeting customer <br /> expectations and specific market requirements.
                    </p>

                    <p className='desc-small'>
                        We have conducted numerous studies to identify key areas of concentration for the brand. Our strategy has been a significant success, which is<br /> confirmed by the results of our activities.
                    </p>


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
                    <p className='desc-big'>
                        For our international client, we took on the challenge of refreshing the visual page<br />
                        and optimizing the visibility in search engines.
                    </p>
                    <p className='desc-small'>

                        The result was the implementation of a modern e-commerce system<br />
                        and a coherent visual identification system, which allowed the brand<br />
                        to build a strong image in the fashion world.


                    </p>
                </div>
            </div>

            <div className='client-description3'>
                <div className='client-text'>
                    <h4 className='client-name'>Hivio</h4>
                    <p className='desc-big'>
                        The marketing strategy was crafted, resulting<br/>
                        in increased brand awareness, targeted<br/>
                        customer reach, and boosted sales.
                    </p>
                    <p className='desc-small'>
                        Digital marketing campaign with SEO, PPC, and social media. Offline<br/> activities included trade fair participation and product demonstrations.<br/> This combination led to successful goal achievement.
                    </p>

                </div>
                <div className='client-foto'>
                    <img src={HivioFoto} className='hivio-foto' alt='hivio portfolio' />

                </div>

            </div>

        </div>
    )
}

export default PortfolioSection