import React, { useState } from 'react';
import './FooterBottomBar.css';
import Facebook from '../images/svg/facebook.svg';
import LinkedIn from '../images/svg/linkedin.svg';
import Instagram from '../images/svg/instagram.svg';
import Behance from '../images/svg/behance.svg';
import Clutch from '../images/svg/clutch.svg';

function FooterBottomBar() {
  const [isPrivacyPolicyActive, setPrivacyPolicyActive] = useState(false);
  const [isCookiePolicyActive, setCookiePolicyActive] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setPrivacyPolicyActive((prevState) => !prevState);
  };

  const handleCookiePolicyClick = () => {
    setCookiePolicyActive((prevState) => !prevState);
  };

  const handleExitPolicyClick = () => {
    setPrivacyPolicyActive(false);
    setCookiePolicyActive(false);
  };

  return (
    <div className='bottom-bar-container'>
      <div className='col-one'>
        <img src={Facebook} alt='facebook icon' />
        <img src={LinkedIn} alt='linkedin icon' />
        <img src={Instagram} alt='instagram icon' />
        <img src={Behance} alt='behance icon' />
        <img src={Clutch} alt='clutch icon' />
      </div>
      <div className='col-two'>
        <span className='gray-link' id='privacy-policy' onClick={handlePrivacyPolicyClick}>
          Privacy Policy
        </span>
        <span className='gray-link' id='cookie-policy' onClick={handleCookiePolicyClick}>
          Cookie Policy
        </span>
      </div>
      <div className='col-three'>
        <p>©2023 Marketing V8. All rights reserved.</p>
      </div>
      <div className={`privacy-policy-container ${isPrivacyPolicyActive ? 'policy-active' : ''}`}>
        <div className='privacy-policy-div'>
          <h2>Privacy policy</h2>
          <div className='exit-policy' onClick={handleExitPolicyClick}>X</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod.
          </p>
        </div>
      </div>
      <div className={`cookie-policy-container ${isCookiePolicyActive ? 'policy-active' : ''}`}>
        <div className='cookie-policy-div'>
          <h2>Cookie policy</h2>
          <div className='exit-policy' onClick={handleExitPolicyClick}>X</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod, sapien vel malesuada bibendum,
            velit sapien lacinia nunc, vel aliquam velit sapien at nisl. Sed euismod.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottomBar;
