import React, { useEffect } from 'react'
import './WhiteMenuSection.css'
import Arrow2 from '../images/svg/Arrow2.svg'
import BlueButton2 from './BlueButton2'

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
                <div className='white-menu-left'>
                    <h3>
                        Rely on a top-tier marketing agency that focuses on premium brands!
                    </h3>
                    <p className='description'>
                    Unlock premium growth with our tailored strategy. Let the numbers speak for themselves. Discover the power of our premium e-commerce solutions today. Allow us to elevate your premium brand to new heights with our exceptional solutions and out of the box strategies.
                    </p>

                    <div className='contact-form-div'>
                        <p className='contact-description'>
                        Looking to <span className='bold-text'>elevate your marketing strategy?</span><br/> Our premium marketing agency delivers<br/> exceptional results tailored to your business<br/> needs. Contact us today and unlock the potential of your brand.
                        </p>

                    </div>

                </div>
                <div className='white-menu-right'>
                    <div className='white-menu-right-grid'>
                        <div className='number'><span>01</span></div>
                        <div className='title'><h4>UX/UI Design</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    <p>The significance of product design on your business fortunes cannot<br />
                                        be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                        to your business.
                                        <br />
                                        <br />

                                        Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                    <BlueButton2
                                        text='Free quote'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='number'><span>02</span></div>
                        <div className='title'><h4>Web & Mobile Development</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien vel velit lacinia bibendum. Nullam euismod, nisl vel tincidunt bibendum, nunc erat malesuada magna, vel suscipit sapien ex ut mauris. Sed euismod, quam eget lacinia bibendum, quam sapien vestibulum enim, vel ultrices velit metus non velit. Praesent euismod libero ac mauris lacinia, quis bibendum nulla fringilla. Donec euismod felis quis eros malesuada, vel aliquet nisi malesuada. Nulla facilisi. Sed vitae sapien eget turpis aliquam blandit. Sed euismod semper lectus, sed tincidunt eros interdum nec. Donec auctor risus ut libero ultrices, nec laoreet mi dictum. Donec sit amet enim at odio bibendum elementum. In hac habitasse platea dictumst. Sed in nibh sed elit faucibus pharetra. Fusce id mi ac augue luctus finibus. Nullam et velit vitae nunc commodo rhoncus non id quam. Donec eget semper ipsum.”
                                        <br />
                                        <br />

                                        Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                    <BlueButton2
                                        text='Free quote'
                                    />
                                </div>
                            </div></div>
                        <div className='number'><span>03</span></div>
                        <div className='title'><h4>SEO & SEM</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>The significance of product design on your business fortunes cannot<br />
                                    be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                    to your business.
                                    <br />
                                    <br />

                                    Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                <BlueButton2
                                    text='Free quote'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>04</span></div>
                        <div className='title'><h4>Data Analytics</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>The significance of product design on your business fortunes cannot<br />
                                    be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                    to your business.
                                    <br />
                                    <br />

                                    Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                <BlueButton2
                                    text='Free quote'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>05</span></div>
                        <div className='title'><h4>Product Management</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>The significance of product design on your business fortunes cannot<br />
                                    be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                    to your business.
                                    <br />
                                    <br />

                                    Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                <BlueButton2
                                    text='Free quote'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>06</span></div>
                        <div className='title'><h4>Content Marketing </h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>The significance of product design on your business fortunes cannot<br />
                                    be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                    to your business.
                                    <br />
                                    <br />

                                    Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                <BlueButton2
                                    text='Free quote'
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>07</span></div>
                        <div className='title'><h4>Business Growth</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                <p>The significance of product design on your business fortunes cannot<br />
                                    be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental<br />
                                    to your business.
                                    <br />
                                    <br />

                                    Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.</p>

                                <BlueButton2
                                    text='Free quote'
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