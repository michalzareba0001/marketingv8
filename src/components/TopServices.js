import React from 'react'
import './TopServices.css'
import RoundText from './RoundText'
import Kafel from './Kafel'
import DecoIco1 from '../images/svg/decoIco2.svg'
import DecoIco2 from '../images/svg/decoIco4.svg'
import DecoIco3 from '../images/svg/decoIco1.svg'
import DecoIco4 from '../images/svg/decoIco5.svg'
import DecoIco5 from '../images/svg/decoIco3.svg'




function TopServices() {
    return (
        <div className='top-services-main'>
            <div className='title-section'>
                <div className='col-one'>
                    <h3>
                        Marketing V8 <br />
                        <span className='row-two'> top services.</span>
                    </h3>
                </div>
                <div className='col-two'>
                    <p>
                        V8 marketing services made to assist <br />
                        the growth and development.
                    </p>
                </div>
                <div className='col-three'>

                    <RoundText
                        height = '109px'
                        arrwidth = '30px'
                    />
 
                </div>

            </div>
            <div className='kafle-section'>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco1}
                        title='Premium Design'
                        description='Give your users a website, mobile app, or any other digital experience that is easy to use, and looks great with UX/UI services we offer.'
                    />
                </div>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco2}
                        title='Consulting'
                        description='Powering it all is a personalised, battle-tested process we never stray from. It’s how we guarantee exceptional results
                        – every single time.'
                    />
                </div>
                <div className='kafel-1'>
                    <Kafel
                        ico={DecoIco3}
                        title='Advertising'
                        description='The best part about Google ads is that you can quickly get started without spending
                        too much money on advertisements.'
                    />
                </div>
                <div className='kafel-4'>
                    <Kafel
                        ico={DecoIco4}
                        title='Growth'
                        description='It can be challenging for businesses to stand out from the crowd – but not if they know how to use Ads properly.'
                    />
                </div>
                <div className='kafel-5'>
                    <Kafel
                        ico={DecoIco5}
                        title='Beyond'
                        description='Are you an ambitious brand that wants to create world-class products? When the stakes are high and the scale is great, V8 is ideal partner for you.'
                    />
                </div>

            </div>


        </div>
    )
}

export default TopServices