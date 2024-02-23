import React, { useState } from 'react';
import './FooterBottomBar.css';
import Facebook from '../images/svg/facebook.svg';
import LinkedIn from '../images/svg/linkedin.svg';
import Instagram from '../images/svg/instagram.svg';
import Behance from '../images/svg/behance.svg';
import Clutch from '../images/svg/clutch.svg';
import { useLanguage } from '../LanguageContext';

function FooterBottomBar() {
  const { language } = useLanguage();
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
        {language === 'english' ?
          <span className='gray-link' id='privacy-policy' onClick={handlePrivacyPolicyClick}>
            Privacy Policy
          </span>
          :
          <span className='gray-link' id='privacy-policy' onClick={handlePrivacyPolicyClick}>
            Polityka prywatności
          </span>
        }

      </div>
      <div className='col-three'>
        <p>©2023 Marketing V8. All rights reserved.</p>
      </div>
      <div className={`privacy-policy-container ${isPrivacyPolicyActive ? 'policy-active' : ''}`}>
        <div className='privacy-policy-div'>
          <h2>Privacy policy</h2>
          <div className='exit-policy' onClick={handleExitPolicyClick}>X</div>
          {language === 'english' ?
            <div>
              <strong>Dear User!</strong><br /><br />

              We care about your privacy and we want you to feel comfortable while using our services. Therefore, below we present the most important information about the principles of processing your personal data by us and cookies that are used by our Website. This information has been prepared taking into account the GDPR, i.e. the general data protection regulation.
              PERSONAL DATA ADMINISTRATOR ("Administrator")<br /><br />

              PAWEŁ SCHARMACH, an entrepreneur running a business under the name of Marketing V8 Sp. z o.o., entered into the Central Register and Information on Economic Activity kept by the Minister of Development and Finance, NIP 5922290210, KRS number 0000985995, ul. Rybacka 16, 83-200 Rokocin
              PERSONAL DATA AND PRIVACY<br />

              If you intend to set up a User Account and use our services, you will be asked to provide us with your personal data.
              Your data is processed by us for the purposes indicated below, related to the functioning of the Website and the provision of services offered on it (“Services”).<br /><br />

              Purpose of processing:<br />

              Depending on what you decide to do, it could be:<br />
              <ul>
                <li>Provision of services offered on the Website</li>
                <li>Fulfillment of your orders</li>
                <li>Sending the newsletter</li>
                <li>Delivery of the ordered offer</li>
              </ul>
              <br />

              The basis for processing:<br />
              <ul>
                <li>Sales contract (Article 6 (1) (b) of the GDPR)</li>
                <li>Legal obligation binding on us, e.g. related to accounting (Article 6 (1) (c) of the GDPR)</li>
                <li>Your consent expressed in the Store (Article 6 (1) (a) of the GDPR)</li>
                <li>Contract for the provision of services (Article 6 (1) (b) of the GDPR)</li>
                <li>Our legitimate interest to establish, assert or defend claims (Article 6 (1) (f) of the GDPR)</li>
              </ul>
              <br />

              Providing data:<br />

              Voluntary, but in some cases may be necessary to conclude a contract or submit an offer.



              <br /><br />The effect of not providing data:<br />

              Depending on the purpose for which the data is provided:<br />
              <ul>
                <li>no possibility to register on the Website</li>
                <li>inability to use the Website’s services</li>
                <li>no possibility to make purchases on the Website</li>
                <li>no possibility to receive information about promotions or special offers offered on the Website</li>
              </ul>
              <br />


              <br />Possibility to withdraw consent:<br />

              anytime



              <br /><br />The processing of data until you withdraw your consent remains lawful.<br />
              PROCESSING PERIOD<br /><br />

              We will process your data only for the period in which we will have a legal basis, i.e. until:<br /><br />
              <ul>
                <li>the legal obligation that obliges us to process your data will cease to bind us</li>
                <li>the possibility of pursuing claims related to the contract concluded by the Website by either party will cease</li>
                <li>you will withdraw your consent to the processing of data, if it was its basis</li>
              </ul>
              <br /><br />


              – depending on what is applicable in a given case and what will happen at the latest.<br />
              DATA SAFETY<br /><br />

              When processing your personal data, we use organizational and technical measures in accordance with the applicable law.<br />
              YOUR POWERS<br /><br />

              You have the right to request:<br />
              <ul>
                <li>access to your personal data</li>
                <li>correct them</li>
                <li>deletion</li>
                <li>processing restrictions</li>
              </ul>

              <br />
              And also the law:<br />
              <ul>
                <li>object to processing</li>
                <li>requests to transfer data to another administrator</li>
              </ul>

              <br />
              Please contact us if you want to exercise your rights.<br /><br />

              If you believe that your data is being processed unlawfully, you can submit a complaint to the supervisory authority.<br />
              <br /><strong>COOKIES</strong><br /><br />

              Our website, like most websites, uses the so-called cookies (cookies). These files:<br />
              <ul>
                <li>are saved in the memory of your device (computer, telephone, etc.)</li>
                <li>they enable you, among other things, to use all the functions of the Website</li>
                <li>do not change the settings of your device</li>
              </ul>
              <br />



              By using the appropriate options of your browser, you can at any time:<br />
              <ul>
                <li>delete cookies</li>
                <li>block the use of cookies in the future</li>
              </ul>


              <br />On this website, cookies are used for the following purposes:<br />
              <ul>
                <li>remembering information about your session</li>
                <li>statistical</li>
                <li>marketing</li>
                <li>providing the functions of the Website</li>
              </ul>

              <br />
              To learn how to manage cookies, including how to disable them in your browser, you can use your browser’s help file. You can read the information on this subject by pressing the F1 key in the browser. In addition, relevant tips can be found on the following subpages, depending on the browser you use:
              <br />Firefox
              <br />Chrome
              <br />Safari
              <br />Internet Explorer / Microsoft Edge
              <br />
              <br />
              If you do not disable the use of cookies in your browser settings, it means that you consent to their use.<br />
              <br />
              More information about cookies can be found on  Wikipedia .<br />
              EXTERNAL SERVICES / DATA RECIPIENTS<br />
              <br />
              We use the services of external entities to which your data may be transferred. Below is a list of these entities:<br />

              <br />the entity delivering the goods
              <br />wholesaler
              <br />printing house
              <br />payment provider
              <br />accounting office
              <br />hosting provider
              <br />an entity that facilitates the optimization of the Website
              <br />people cooperating with us on the basis of civil law contracts, supporting our current activity
              <br />software provider that facilitates running a business (e.g. accounting software)
              <br />an entity providing marketing services
              <br />software provider needed to run an online store

              <br /><br /><strong>CONTACT WITH THE ADMINISTRATOR</strong><br /><br />

              Do you want to exercise your personal data rights?<br />

              Or maybe you just want to ask about something related to our Privacy Policy?<br />

              <br />Write to the e-mail address: <a href='mailto:office@marketingv8.co'>office@marketingv8.co</a><br /><br />
            </div>
            :
            <div>
              <strong>Szanowny Użytkowniku!</strong><br /><br />

              Troszczymy się o Twoją prywatność i chcemy, abyś czuł się komfortowo korzystając z naszych usług. Dlatego poniżej przedstawiamy najważniejsze informacje dotyczące zasad przetwarzania Twoich danych osobowych przez nas oraz plików cookie, które są używane przez naszą stronę internetową. Informacje te zostały przygotowane zgodnie z RODO, czyli ogólnym rozporządzeniem o ochronie danych.
              ADMINISTRATOR DANYCH OSOBOWYCH ("Administrator")<br /><br />

              PAWEŁ SCHARMACH, przedsiębiorca prowadzący działalność gospodarczą pod firmą Marketing V8 Sp. z o.o., wpisaną do Centralnej Ewidencji i Informacji o Działalności Gospodarczej prowadzonej przez Ministra Rozwoju i Finansów, NIP 5922290210, numer KRS 0000985995, ul. Rybacka 16, 83-200 Rokocin
              DANE OSOBOWE I PRYWATNOŚĆ<br />

              Jeśli zamierzasz założyć Konto Użytkownika i korzystać z naszych usług, zostaniesz poproszony o podanie nam swoich danych osobowych.
              Twoje dane są przez nas przetwarzane w celach wskazanych poniżej, związanych z funkcjonowaniem Strony i świadczeniem oferowanych na niej usług ("Usługi").<br /><br />

              Cel przetwarzania:<br />

              W zależności od tego, co zdecydujesz się zrobić, może to być:<br />
              <ul>
                <li>Świadczenie oferowanych na Stronie Usług</li>
                <li>Realizacja Twoich zamówień</li>
                <li>Wysyłanie newslettera</li>
                <li>Dostarczanie zamówionej oferty</li>
              </ul>
              <br />

              Podstawa przetwarzania:<br />
              <ul>
                <li>Umowa sprzedaży (art. 6 ust. 1 lit. b RODO)</li>
                <li>Obowiązek prawny ciążący na nas, np. związany z rachunkowością (art. 6 ust. 1 lit. c RODO)</li>
                <li>Twoja zgoda wyrażona w Sklepie (art. 6 ust. 1 lit. a RODO)</li>
                <li>Umowa o świadczenie Usług (art. 6 ust. 1 lit. b RODO)</li>
                <li>Nasz uzasadniony interes w ustaleniu, dochodzeniu lub obronie roszczeń (art. 6 ust. 1 lit. f RODO)</li>
              </ul>
              <br />

              Podanie danych:<br />

              Dobrowolne, ale w niektórych przypadkach może być konieczne zawarcie umowy lub złożenie oferty.



              <br /><br />Skutek niepodania danych:<br />

              W zależności od celu, dla którego dane są udostępniane:<br />
              <ul>
                <li>brak możliwości rejestracji na Stronie</li>
                <li>niemożność korzystania z Usług Strony</li>
                <li>brak możliwości dokonywania zakupów na Stronie</li>
                <li>brak możliwości otrzymywania informacji o promocjach lub specjalnych ofertach oferowanych na Stronie</li>
              </ul>
              <br />


              <br />Możliwość wycofania zgody:<br />

              w dowolnym momencie



              <br /><br />Przetwarzanie danych do momentu wycofania zgody pozostaje zgodne z prawem.<br />
              OKRES PRZETWARZANIA<br /><br />

              Będziemy przetwarzać Twoje dane tylko przez okres, w którym będziemy mieć podstawę prawną, tj. do:<br /><br />
              <ul>
                <li>przestał nas wiązać obowiązek prawny, który zobowiązuje nas do przetwarzania Twoich danych</li>
                <li>przestanie istnieć możliwość dochodzenia roszczeń związanych z umową zawartą przez Stronę przez którąkolwiek ze stron</li>
                <li>wycofania przez Ciebie zgody na przetwarzanie danych, jeśli było to jej podstawą</li>
              </ul>
              <br /><br />


              – w zależności od tego, co jest stosowane w danym przypadku i co stanie się najpóźniej.<br />
              BEZPIECZEŃSTWO DANYCH<br /><br />

              Przy przetwarzaniu Twoich danych osobowych stosujemy środki organizacyjne i techniczne zgodne z obowiązującym prawem.<br />
              TWOJE UPRAWNIENIA<br /><br />

              Masz prawo żądania:<br />
              <ul>
                <li>dostępu do swoich danych osobowych</li>
                <li>ich poprawienia</li>
                <li>usunięcia</li>
                <li>ograniczenia przetwarzania</li>
              </ul>

              <br />
              A także prawo:<br />
              <ul>
                <li>do sprzeciwu wobec przetwarzania</li>
                <li>żądania przeniesienia danych do innego administratora</li>
              </ul>

              <br />
              Skontaktuj się z nami, jeśli chcesz skorzystać z swoich praw.<br /><br />

              Jeśli uważasz, że Twoje dane są przetwarzane niezgodnie z prawem, możesz złożyć skargę do organu nadzorczego.<br />
              <br /><strong>PLIKI COOKIE</strong><br /><br />

              Nasza strona internetowa, podobnie jak większość stron internetowych, używa tzw. plików cookies (ciasteczek). Pliki te:<br />
              <ul>
                <li>są zapisywane w pamięci Twojego urządzenia (komputera, telefonu, itp.)</li>
                <li>umożliwiają Ci m.in. korzystanie z wszystkich funkcji Strony</li>
                <li>nie zmieniają ustawień Twojego urządzenia</li>
              </ul>
              <br />



              Korzystając z odpowiednich opcji przeglądarki, w każdej chwili możesz:<br />
              <ul>
                <li>usunąć pliki cookies</li>
                <li>zablokować używanie plików cookies w przyszłości</li>
              </ul>


              <br />Na tej stronie internetowej pliki cookies są używane w celach:<br />
              <ul>
                <li>pamiętania informacji o Twojej sesji</li>
                <li>statystycznych</li>
                <li>marketingowych</li>
                <li>umożliwiających funkcje Strony</li>
              </ul>

              <br />
              Aby dowiedzieć się, jak zarządzać plikami cookies, w tym jak je wyłączyć w swojej przeglądarce, możesz skorzystać z pliku pomocy przeglądarki. Informacje na ten temat możesz przeczytać, naciskając klawisz F1 w przeglądarce. Ponadto odpowiednie wskazówki można znaleźć na następujących podstronach, w zależności od używanej przeglądarki:
              <br />Firefox
              <br />Chrome
              <br />Safari
              <br />Internet Explorer / Microsoft Edge
              <br />
              <br />
              Jeśli nie wyłączysz używania plików cookies w ustawieniach przeglądarki, oznacza to, że wyrażasz na to zgodę.<br />
              <br />
              Więcej informacji na temat plików cookies znajdziesz na stronie Wikipedia .<br />
              ZEWNĘTRZNE USŁUGI / ODBIORCY DANYCH<br />
              <br />
              Korzystamy z usług zewnętrznych podmiotów, do których mogą być przekazywane Twoje dane. Poniżej znajduje się lista tych podmiotów:<br />

              <br />podmiot dostarczający towary
              <br />hurtownia
              <br />drukarnia
              <br />dostawca płatności
              <br />biuro rachunkowe
              <br />dostawca hostingu
              <br />podmiot ułatwiający optymalizację Strony
              <br />osoby współpracujące z nami na podstawie umów cywilnoprawnych, wspierające naszą bieżącą działalność
              <br />dostawca oprogramowania umożliwiającego prowadzenie działalności gospodarczej (np. oprogramowanie do księgowości)
              <br />podmiot świadczący usługi marketingowe
              <br />dostawca oprogramowania niezbędnego do prowadzenia sklepu internetowego

              <br /><br /><strong>KONTAKT Z ADMINISTRATOREM</strong><br /><br />

              Chcesz skorzystać ze swoich praw dotyczących danych osobowych?<br />

              A może po prostu chcesz zapytać o coś związanego z naszą Polityką Prywatności?<br />

              <br />Napisz na adres e-mail: <a href='mailto:office@marketingv8.co'>office@marketingv8.co</a><br /><br />
            </div>
          }


        </div>
      </div>
      {/* <div className={`cookie-policy-container ${isCookiePolicyActive ? 'policy-active' : ''}`}>
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
      </div> */}
    </div>
  );
}

export default FooterBottomBar;
