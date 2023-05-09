import React from 'react'
import './WeAreAll.css'
import Cudzyslow from '../images/svg/cudzyslow.svg'
import PawelFoto from '../images/webp/pawelfoto_edited.webp'

function WeAreAll() {
    return (
        <div className='we-are-all-main'>
            <div className='we-are-all-left'>
                <h3>
                    We are all connected<br />
                    through art.
                </h3>
                <p>
                    The Art department works closely with our teams to express creative<br />
                    pursuits and wild ideas that clients sometimes come to us for.<br />
                    We seek alignment and clarity to create actionable strategies<br />
                    to achieve your marketing goals.
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
                        <p>Pawel Scharmach<br/>
                        <span className='blue-text'> CEO AT MARKETING V8 </span> </p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default WeAreAll