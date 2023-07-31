import React, { useState } from 'react';
import './Recommendations.css';
import RoundText from './RoundText';
import CudzyslowGray from '../images/svg/cudzyslow-gray.svg';
import ShifulIslam from '../images/webp/shifuislam_edited.webp';
import RafaelKulas from '../images/webp/rafaelkulas_edited.webp';
import ArrowRight from '../images/svg/ArrowRightWhite.svg';
import ArrowLeft from '../images/svg/ArrowLeftWhite.svg';

function Recommendations() {
  const [currentSection, setCurrentSection] = useState(0);
  const recommendationsData = [
    {
      photo: ShifulIslam,
      text: "I have a law firm in California. Honestly, I was a bit apprehensive about working with a team from Poland, but the cost savings they generate are invaluable. We chose to work with them because they provide comprehensive services. We are very satisfied, and the results of their actions can be summed up in one sentence. They were the only ones able to deliver us over 200 leads, from which we secured contracts worth at least several hundred thousand dollars. Pawel is the best!!! :-)",
      signature: "Shiful Islam"
    },
    {
      photo: RafaelKulas,
      text: "A specific and practical marketing agency. They meet deadlines and fulfill their promises. They can immerse themselves in a given industry and prepare an appropriate marketing strategy, which they then consistently execute. Additionally, many projects require the involvement of multiple individuals, and I appreciate the internal communication and flow of information. Each specialist, despite working on a narrow scope of tasks, is familiar with the entire project and can answer any questions. This is a well-coordinated team of people with whom we have been working for several years, and we intend to continue our collaboration.",
      signature: "Rafael Kulas"
    },
    // Dodaj pozostałe sekcje rekomendacji, jeśli istnieją
  ];

  const handleNextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % recommendationsData.length);
  };

  const handlePreviousSection = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + recommendationsData.length) % recommendationsData.length);
  };

  const { photo, text, signature } = recommendationsData[currentSection];

  return (
    <div className='recommendations-main'>
      <div className='title-div'>
        <div className='col-one'>
          <h3>
            Don’t take our words<br />
            <span className='sec-row'>trust our customers.</span>
          </h3>
        </div>
        <div className='col-two'></div>
        <div className='col-three'>

          <RoundText height='110px' arrwidth='30px' />
     
        </div>
      </div>

      <div className='content-div'>
        <div className='photo-div'>
          {recommendationsData.map((recommendation, index) => (
            <img
              key={index}
              src={recommendation.photo}
              alt='Recommendation'
              style={{ opacity: index === currentSection ? 1 : 0 }}
            />
          ))}
        </div>
        <div className='text-div'>
          {recommendationsData.map((recommendation, index) => (
            <p
              key={index}
              style={{ opacity: index === currentSection ? 1 : 0, transition: 'opacity 1000ms' }}
            >
              {recommendation.text}
            </p>
          ))}
          <img src={CudzyslowGray} alt='deco icon' className='cudzyslow' />
          <h6 className='signature'>{signature}</h6>
          <div className='arrows-recommendations'>
            <img src={ArrowLeft} alt='arrow left' className='arrow-left' onClick={handlePreviousSection} />
            <img src={ArrowRight} alt='arrow right' className='arrow-right' onClick={handleNextSection} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
