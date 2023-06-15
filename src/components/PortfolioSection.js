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
                    <p>SESVAN is a family business that, with the support of a dedicated team, has built a strong B2B organization with a solid position in the Scandinavian market. Our challenge at that time was to create and implement a complete website, practically from A to Z, while keeping in mind the needs and requirements of that market, which is significantly different. We knew that the Northern European region had to be ours!
                        <br />
                        <br />

                        We conducted dozens of studies, which allowed us to know precisely which specific areas the brand should focus on. Based on various analyses, we created a website that perfectly fit into the local market. The strategy we adopted achieved real success, as evidenced by the results of our actions.
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
                    <p>For the Heaven brand, perfection is the key word when it comes to any marketing activities. The brand's clothes are characterized by
                        high-quality production and durability, which makes them last for a long time and maintain their stylish appearance. As the brand operates mainly on the international market, we knew that the bar was set quite high. Nevertheless, we faced it and met all of our client's needs, which included refreshing the graphic visualization and launching SEO activities.
                        <br />
                        <br />

                        Therefore, we took care of creating a marketing strategy, as well as implementing marketing and sales funnels. Moreover, our goals included implementing an e-commerce system and designing a complete visual identity system so that the brand had real chances of creating a strong image in the clothing industry.


                    </p>
                </div>
            </div>

            <div className='client-description1'>
                <div className='client-text'>
                    <h4 className='client-name'>Hivio</h4>
                    <p>Our agency had the opportunity to work with Hivio, a brand specializing in premium ventilation systems. Our task was to create a comprehensive marketing strategy to enhance their brand awareness, reach their target audience, and ultimately increase sales.
                        <br />
                        <br />

                        To drive targeted traffic to the website, we implemented a strategic digital marketing campaign that included search engine optimization (SEO), pay-per-click (PPC) advertising, and social media marketing. Through careful keyword research and ad targeting, we were able to reach potential customers actively seeking ventilation solutions.
                        In addition to online efforts, we executed offline marketing activities such as participating in industry trade shows and organizing product demonstrations.

                    </p>

                </div>
                <div className='client-foto'>
                    <img src={HivioFoto} alt='sesvan portfolio' />

                </div>

            </div>

        </div>
    )
}

export default PortfolioSection