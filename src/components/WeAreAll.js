import React from 'react'
import './WeAreAll.css'
import Cudzyslow from '../images/svg/cudzyslow.svg'
import PawelFoto from '../images/webp/pawelfoto_edited.webp'
import BlueButton3 from './BlueButton3'

function WeAreAll() {
    return (
        <div className='we-are-all-main'>
            <div className='we-are-all-left'>
                <h3>
                    Discover the power of premium<br />
                    e-commerce and unlock your <br />
                    business's full potential!
                </h3>
                <p>
                    Explore the potential of your business with our world-class solutions and expert strategies.<br/>
                    We will help your premium brand rise to new heights and achieve exceptional growth through<br/>
                    our passion for excellence and commitment to your success. Impossible? Not with us!
                </p>
            </div>
            <div className='we-are-all-right-one'>
                <div className='cytat'>
                    <img src={Cudzyslow} alt='cudzysłów' className='cudzyslow-ico' />
                    <p className='cudzyslow-text'> We are flexible, but in business, we follow<br />
                        certain principles and always complete<br />
                        our tasks with 100% quality and dedication.</p>

                </div>
                <div className='the-boss'>
                    <div className='boss-foto'>
                        <img src={PawelFoto} alt='Paweł Scharmach' />

                    </div>
                    <div className='boss-text'>
                        <p>Pawel Scharmach<br />
                            <span className='blue-text'> CEO AT MARKETING V8 </span> </p>

                    </div>
                </div>
                <div className='button-div'>

                    <BlueButton3
                        text='Contact us'
                    />
                </div>
            </div>


        </div>
    )
}

export default WeAreAll