import React, { useEffect } from 'react'
import './WhiteMenuSection.css'
import Arrow2 from '../images/svg/Arrow2.svg'
import BlueButton2 from './BlueButton2'
import ContactForm from './ContactForm'


function WhiteMenuSection() {
    useEffect(() => {
        const handleClick = (event) => {
            const titleContainer = event.currentTarget;
            const arrow = titleContainer.querySelector('.arrow-right');
            const descriptionParent = titleContainer.querySelector('.description-parent');
            const descriptionChild = titleContainer.querySelector('.description-child')

            if (arrow.classList.contains('arrow-right-active')) {
                arrow.classList.remove('arrow-right-active');
            } else {
                arrow.classList.add('arrow-right-active');
            }

            if (descriptionParent.classList.contains('description-parent-active')) {
                descriptionParent.classList.remove('description-parent-active');
                descriptionParent.style.height = 0;
            } else {
                descriptionParent.classList.add('description-parent-active');
                descriptionParent.style.height = descriptionChild.offsetHeight + 50 + 'px';
            }
        };

        const titleContainers = document.querySelectorAll('.title');

        titleContainers.forEach((titleContainer) => {
            titleContainer.addEventListener('click', handleClick);
        });

        return () => {
            titleContainers.forEach((titleContainer) => {
                titleContainer.removeEventListener('click', handleClick);
            });
        };
    }, []);


    return (
        <div className='white-menu-section'>
            <div className='white-menu-grid'>
                <div className='white-menu-left' id='contact-form'>
                    <h3>
                        Rely on a top-tier marketing agency that focuses on premium brands!
                    </h3>
                    <p className='description' >
                        Unlock premium growth with our tailored strategy. Let the numbers speak for themselves. Discover the power of our premium e-commerce solutions today. Allow us to elevate your premium brand to new heights with our exceptional solutions and out of the box strategies.
                    </p>

                    <div className='contact-form-div' >
                        <p className='contact-description'>
                            Looking to <span className='bold-text'>elevate your marketing strategy?</span><br /> Our premium marketing agency delivers<br /> exceptional results tailored to your business<br /> needs. <span className='bold-text'>Contact us today</span> and unlock the<br /> potential of your brand.
                        </p>

                        <ContactForm />

                    </div>

                </div>
                <div className='white-menu-right'>
                    <div className='white-menu-right-grid'>
                        <div className='number'><span>01</span></div>
                        <div className='title'><h4>UX/UI Design</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    <p>The significance of product design on your business fortunes cannot
                                        be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental
                                        to your business.
                                        <br />
                                        <br />
                                        Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.
                                    </p>

                                    <BlueButton2
                                        text='Free quote'
                                        href='mailto:office@marketingv8.co'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='number'><span>02</span></div>
                        <div className='title'><h4>Web & Mobile Development</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    <p>We specialize in Web & Mobile Development, delivering innovative and functional solutions for your company. Our comprehensive services cover web and mobile application development, tailored to your project's needs and industry.
                                        <br />
                                        <br />

                                        We leverage the latest technologies and trends to give your business a competitive edge. With our expertise, we'll help you establish a strong online presence and optimize your operations for enhanced efficiency.</p>

                                    <BlueButton2
                                        text='Free quote'
                                        href='mailto:office@marketingv8.co'
                                    />
                                </div>
                            </div></div>
                        <div className='number'><span>03</span></div>
                        <div className='title'><h4>SEO & SEM</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>SEO & SEM are essential for high visibility and reaching your target audience. Our comprehensive services cover search engine optimization (SEO) and search engine marketing (SEM). Our team of experts understands search engine algorithms and can optimize your website effectively.
                                    <br />
                                    <br />

                                    With our SEO & SEM services, you'll drive more traffic, improve rankings, and increase conversions. Whether you're a small business or a large e-commerce store, our professional services will help you succeed online and achieve your business goals.</p>

                                <BlueButton2
                                    text='Free quote'
                                    href='mailto:office@marketingv8.co'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>04</span></div>
                        <div className='title'><h4>Data Analytics</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>It's a powerful tool for extracting valuable insights and patterns from your data. Our comprehensive data analytics services cover data collection, cleansing, processing, and visualization. With our team of experts, we'll help you interpret and utilize data for informed decision-making.
                                    <br />
                                    <br />
                                    Data analytics enables you to identify trends, understand customer preferences, optimize operations, and enhance marketing effectiveness. Our services provide insights into key business indicators and support strategic decision-making across industries.</p>

                                <BlueButton2
                                    text='Free quote'
                                    href='mailto:office@marketingv8.co'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>05</span></div>
                        <div className='title'><h4>Product Management</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>This essential process will enable you to effectively manage your products in the market. Our offering includes comprehensive product management services, from strategic planning to implementation and performance monitoring. Our team of experienced product managers possesses not only industry knowledge but also project management and communication skills.
                                    <br />
                                    <br />

                                    With us, you can focus on creating innovative products, responding to customer needs, and adapting to a changing market. By partnering with us, you will gain support throughout the product lifecycle to achieve success and satisfaction for both your customers and your company.</p>

                                <BlueButton2
                                    text='Free quote'
                                    href='mailto:office@marketingv8.co'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>06</span></div>
                        <div className='title'><h4>Content Marketing </h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>We are well aware that content marketing is a powerful strategy that helps attract and engage target audiences through valuable and relevant content. From strategy development to content creation and distribution, we are with you every step of the way. 
                                    <br />
                                    <br />

                                    Our team understands the importance of creating engaging and informative content. With strategic content marketing, you can establish your brand as a thought leader, increase organic traffic, and build long-term customer relationships. Start creating valuable content with us and attract potential audiences!</p>

                                <BlueButton2
                                    text='Free quote'
                                    href='mailto:office@marketingv8.co'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>07</span></div>
                        <div className='title'><h4>Business Growth</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>We will elevate your business to new heights of success. We offer comprehensive business growth services, including strategic planning, process optimization, and market expansion. Our specialists will help you unlock the full potential of your brand, enabling it to dominate top sales rankings.
                                    <br />
                                    <br />

                                    Gain a competitive edge and achieve long-term results through our partnership. Let us be your trusted partner on the journey to business growth and success.</p>

                                <BlueButton2
                                    text='Free quote'
                                    href='mailto:office@marketingv8.co'
                                />
                            </div>
                        </div></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhiteMenuSection