import React from 'react'
import './Recommendations.css'
import ClientsSay from '../images/webp/clientsSay_edited.webp'
import RoundText from './RoundText'
import CudzyslowGray from '../images/svg/cudzyslow-gray.svg'
import ShifulIslam from '../images/webp/shifuislam_edited.webp'

function Recommendations() {
  return (
    <div className='recommendations-main'>
      <div className='title-div'>
        <div className='col-one'>
          <h3>Don’t take our words<br/>
         <span className='sec-row'>trust our customers.</span></h3>
        
        </div>
        <div className='col-two'>
          <img src={ClientsSay} alt ='Clients Say We deliver on Clutch' className='clients-say-mark' />

        </div>
        <div className='col-three'>
          <RoundText 
          height = '110px'
          arrwidth = '30px'

          />
        
        </div>
      </div>

      <div className='content-div'>
        <div className='photo-div'>
          <img src={ShifulIslam} alt='Shiful Islam' />

        </div>
        <div className='text-div'>
          <p>"I have a law firm in California. Honestly, I was a bit apprehensive about working with a team from Poland, but the cost savings they generate are invaluable. We chose to work with them because they provide comprehensive services. We are very satisfied, and the results of their actions can be summed up in one sentence. They were the only ones able to deliver us over 200 leads, from which we secured contracts worth at least several hundred thousand dollars. Pawel is the best!!! :-)"</p>
          <img src={CudzyslowGray} alt='deco icon' className='cudzyslow' />
          <h6 className='signature'>Shiful Islam </h6>
        </div>
        
      </div>

    </div>
  )
}

export default Recommendations