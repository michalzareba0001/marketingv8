import React from 'react'
import './PortfolioSection.css'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import SesvanFoto from '../images/webp/sesvan_edited.webp'
import HevenFoto from '../images/webp/heven_edited.webp'
import FitMonicaFoto from '../images/webp/fitMonica_edited.webp'
import LinkWithArrow from './LinkWithArrow'


function PortfolioSection() {
    return (
        <div className='portfolio-section'>
            <div className='first-title-div'>
                <h3 className='first-title'>
                    Our creative designers get things<br />
                    done efficiently and effectively.
                </h3>
                <img src={DecoIco1} alt='decoration icon' className='deco-icon' />
                <img src={DecoIco2} alt='decoration icon' className='deco-icon' />
                <img src={DecoIco3} alt='decoration icon' className='deco-icon' />
            </div>
            <h4 className='client-name'>Sesvan</h4>
            <div className='client-description1'>
                <div className='client-text'>
                    <p>SESVAN is a family business that, with the support of a dedicated team, has built a strong B2B organization with a solid position in the Scandinavian market. Our challenge at that time was to create and implement a complete website, practically from A to Z, while keeping in mind the needs and requirements of that market, which is significantly different. We knew that the Northern European region had to be ours!
                        <br />
                        <br />

                        We conducted dozens of studies, which allowed us to know precisely which specific areas the brand should focus on. Based on various analyses, we created a website that perfectly fit into the local market. The strategy we adopted achieved real success, as evidenced by the results of our actions.
                    </p>

                    <p className='purpple-text'>
                        Check out their beyond success
                    </p>
                    <a href='https://sesvan.se/' rel="noreferrer" target='_blank' className='client-web'>sesvan.se</a>
                </div>
                <div className='client-foto'>
                    <img src={SesvanFoto} alt='sesvan portfolio' />

                </div>
            </div>

            <h4 className='client-name'>Heven</h4>
            <div className='client-description2'>
                <div className='client-foto'>
                    <img src={HevenFoto} alt='heven portfolio' />

                </div>
                <div className='client-text'>
                    <p>For the Heaven brand, perfection is the key word when it comes to any marketing activities. The brand's clothes are characterized by
                        high-quality production and durability, which makes them last for a long time and maintain their stylish appearance. As the brand operates mainly on the international market, we knew that the bar was set quite high. Nevertheless, we faced it and met all of our client's needs, which included refreshing the graphic visualization and launching SEO activities.
                        <br />
                        <br />

                        Therefore, we took care of creating a marketing strategy, as well as implementing marketing and sales funnels. Moreover, our goals included implementing an e-commerce system and designing a complete visual identity system so that the brand had real chances of creating a strong image in the clothing industry.


                    </p>

                    <p className='purpple-text'>
                        Check their success
                    </p>
                    <a href='https://hevenmadeonearth.com/' rel="noreferrer" target='_blank' className='client-web'>hevenmadeonearth.com</a>
                </div>
            </div>

            <h4 className='client-name'>FitMonica</h4>
            <div className='client-description1'>
                <div className='client-text'>
                    <p>Fit Monica is a brand that specializes in a healthy lifestyle and physical activity. In 2021, the company decided to create a new brand image, including a new logo and website. Just as a sprinter needs proper training, perseverance, and dedication to achieve success, the specialists in the marketing agency also need determination, drive, and a lot of work to succeed in their business.
                        <br />
                        <br />
                        Our agency took on the task with great commitment and paid special attention to the needs and expectations of the client. We set ourselves the goal of creating a modern and attractive logo as well as a functional UX/UI website that would attract customers and make it easier for them to use the company's offer.


                    </p>

                    <p className='purpple-text'>
                        Check her success
                    </p>
                    <a href='https://fitmonica.co.uk/' rel="noreferrer" target='_blank' className='client-web'>fitmonica.co.uk</a>
                </div>
                <div className='client-foto'>
                    <img src={FitMonicaFoto} alt='sesvan portfolio' />

                </div>
               
            <div className='link-with-arrow'>
                    <LinkWithArrow
                    text='More case study'
                    />
                </div>
            </div>

        </div>
    )
}

export default PortfolioSection