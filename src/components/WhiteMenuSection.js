import React, { useEffect } from 'react'
import './WhiteMenuSection.css'
import Arrow2 from '../images/svg/Arrow2.svg'
import BlueButtonWhiteBg from './BlueButtonWhiteBg'
import DecoIco1 from '../images/svg/decoIco1.svg'
import DecoIco2 from '../images/svg/decoIco2.svg'
import DecoIco3 from '../images/svg/decoIco3.svg'
import { useLanguage } from '../LanguageContext'



function WhiteMenuSection() {
    const { language } = useLanguage()
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
                    {language === 'english' ?
                        <h3>
                            Rely on a top-tier marketing agency that focuses on premium brands!
                        </h3>
                        :
                        <h3>
                            Polegaj na agencji marketingowej najwyższej klasy, która skupia się na ekskluzywnych markach!
                        </h3>
                    }
                    {language === 'english' ?
                        <p className='description' >
                            Unlock premium growth with our tailored strategy. Let the numbers speak for themselves. Discover the power of our premium e-commerce solutions today. Allow us to elevate your premium brand to new heights with our exceptional solutions and out of the box strategies.
                        </p>
                        :
                        <p className='description'>
                            Odblokuj premiumowy wzrost dzięki naszej dopasowanej strategii. Pozwól, by liczby mówiły same za siebie. Odkryj moc naszych premiumowych rozwiązań e-commerce już dziś. Pozwól nam podnieść Twoją ekskluzywną markę na nowe wysokości dzięki naszym wyjątkowym rozwiązaniom i nietypowym strategiom.
                        </p>
                    }

                    <div className='contact-form-div' >
                        {language === 'english' ?
                            <p className='contact-description'>
                                Looking to <span className='bold-text'>elevate your marketing strategy?</span><br /> Our premium marketing agency delivers<br /> exceptional results tailored to your business<br /> needs. <span className='bold-text'>Contact us today</span> and unlock the<br /> potential of your brand.
                            </p>
                            :
                            <p className='contact-description'>
                                Szukasz <span className='bold-text'>lepszej strategii marketingowej?</span><br /> Nasza ekskluzywna agencja dostarcza wyjątkowe rezultaty dopasowane do potrzeb Twojego biznesu. <span className='bold-text'>Skontaktuj się z nami już dziś</span> i odblokuj potencjał swojej marki.
                            </p>
                        }
                        <div className='icons-and-button'>

                            <div className='deco-icons'>

                                <img src={DecoIco1} alt='decoration icon' className='deco-icon' />
                                <img src={DecoIco2} alt='decoration icon' className='deco-icon' />
                                <img src={DecoIco3} alt='decoration icon' className='deco-icon' />
                            </div>
                            <div className='button-send'>
                                <BlueButtonWhiteBg text={language === 'english' ? 'Send message' : 'Kontakt'} className='send-message' />
                            </div>

                        </div>
                    </div>

                </div>
                <div className='white-menu-right'>
                    <div className='white-menu-right-grid'>
                        <div className='number'><span>01</span></div>
                        <div className='title'><h4>UX/UI Design</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    {language === 'english' ?
                                        <p>The significance of product design on your business fortunes cannot
                                            be overstated. When executed effectively, it can provide a significant competitive edge. However, when done poorly, it can be detrimental
                                            to your business.
                                            <br />
                                            <br />
                                            Successful product design is a result of comprehensive research and strategy, incorporating data and insights. It lays the foundation for your product's features and enhances the overall quality of the customer experience. Ultimately, it increases the likelihood of commercial success. Be beyond with us by investing in exceptional design.
                                        </p>
                                        :
                                        <p>Znaczenie projektowania produktu dla losów Twojego biznesu nie może być przecenione. Kiedy jest przeprowadzone skutecznie, może zapewnić znaczącą przewagę konkurencyjną. Jednakże, gdy jest wykonane słabo, może zaszkodzić Twojemu biznesowi.
                                            <br />
                                            <br />
                                            Udane projektowanie produktu jest wynikiem wszechstronnych badań i strategii, uwzględniających dane i spostrzeżenia. Kładzie ono podwaliny pod cechy Twojego produktu i poprawia ogólną jakość doświadczenia klienta. Ostatecznie zwiększa to szanse na komercyjny sukces. Wykraczaj poza granice z nami, inwestując w wyjątkowe projektowanie.
                                        </p>
                                    }

                                    <BlueButtonWhiteBg
                                        text={language === 'english' ? 'Free quote' : 'Wycena'}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className='number'><span>02</span></div>
                        <div className='title'><h4>Web & Mobile Development</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' />
                            <div className='description-parent'>
                                <div className='description-child'>
                                    {language === 'english' ?
                                        <p>We specialize in Web & Mobile Development, delivering innovative and functional solutions for your company. Our comprehensive services cover web and mobile application development, tailored to your project's needs and industry.
                                            <br />
                                            <br />

                                            We leverage the latest technologies and trends to give your business a competitive edge. With our expertise, we'll help you establish a strong online presence and optimize your operations for enhanced efficiency.</p>
                                        :
                                        <p>Specjalizujemy się w rozwoju aplikacji webowych i mobilnych, dostarczając innowacyjne i funkcjonalne rozwiązania dla Twojej firmy. Nasze kompleksowe usługi obejmują rozwój aplikacji internetowych i mobilnych, dopasowanych do potrzeb Twojego projektu i branży.
                                            <br />
                                            <br />
                                            Wykorzystujemy najnowsze technologie i trendy, aby dać Twojej firmie przewagę konkurencyjną. Dzięki naszej wiedzy i doświadczeniu pomożemy Ci ustanowić silną obecność online i zoptymalizować operacje dla zwiększonej efektywności.</p>
                                    }
                                    <BlueButtonWhiteBg
                                        text={language === 'english' ? 'Free quote' : 'Wycena'}

                                    />
                                </div>
                            </div></div>
                        <div className='number'><span>03</span></div>
                        <div className='title'><h4>SEO & SEM</h4><img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                {language === 'english' ?
                                    <p>SEO & SEM are essential for high visibility and reaching your target audience. Our comprehensive services cover search engine optimization (SEO) and search engine marketing (SEM). Our team of experts understands search engine algorithms and can optimize your website effectively.
                                        <br />
                                        <br />

                                        With our SEO & SEM services, you'll drive more traffic, improve rankings, and increase conversions. Whether you're a small business or a large e-commerce store, our professional services will help you succeed online and achieve your business goals.</p>
                                    :
                                    <p>SEO i SEM są kluczowe dla wysokiej widoczności i dotarcia do Twojej grupy docelowej. Nasze kompleksowe usługi obejmują optymalizację dla wyszukiwarek internetowych (SEO) oraz marketing w wyszukiwarkach (SEM). Nasz zespół ekspertów zna algorytmy wyszukiwarek i potrafi skutecznie zoptymalizować Twoją witrynę.
                                        <br />
                                        <br />
                                        Dzięki naszym usługom SEO i SEM zwiększysz ruch na stronie, poprawisz pozycje w wynikach wyszukiwania i zwiększysz konwersje. Bez względu na to, czy prowadzisz małą firmę czy duży sklep internetowy, nasze profesjonalne usługi pomogą Ci odnieść sukces online i osiągnąć cele biznesowe.</p>
                                }
                                <BlueButtonWhiteBg
                                    text={language === 'english' ? 'Free quote' : 'Wycena'}

                                />
                            </div>
                        </div></div>
                        <div className='number'><span>04</span></div>
                        <div className='title'>{language === 'english' ? <h4>Data Analytics</h4> : <h4>Analityka</h4>}<img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                {language === 'english' ?
                                    <p>It's a powerful tool for extracting valuable insights and patterns from your data. Our comprehensive data analytics services cover data collection, cleansing, processing, and visualization. With our team of experts, we'll help you interpret and utilize data for informed decision-making.
                                        <br />
                                        <br />
                                        Data analytics enables you to identify trends, understand customer preferences, optimize operations, and enhance marketing effectiveness. Our services provide insights into key business indicators and support strategic decision-making across industries.</p>
                                    :
                                    <p>To potężne narzędzie do wyciągania cennych wniosków i wzorców z Twoich danych. Nasze kompleksowe usługi analizy danych obejmują zbieranie danych, oczyszczanie, przetwarzanie i wizualizację. Dzięki naszemu zespołowi ekspertów pomożemy Ci interpretować i wykorzystywać dane do podejmowania świadomych decyzji.
                                        <br />
                                        <br />
                                        Analiza danych pozwala Ci zidentyfikować trendy, zrozumieć preferencje klientów, zoptymalizować operacje i zwiększyć skuteczność marketingu. Nasze usługi dostarczają wglądu w kluczowe wskaźniki biznesowe i wspierają podejmowanie strategicznych decyzji we wszystkich branżach.</p>
                                }
                                <BlueButtonWhiteBg
                                    text={language === 'english' ? 'Free quote' : 'Wycena'}
                                />
                            </div>
                        </div></div>
                        <div className='number'><span>05</span></div>
                        <div className='title'>{language === 'english' ? <h4>Product Management</h4> : <h4>Zarządzanie produktem</h4>}<img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                {language === 'english' ?
                                    <p>This essential process will enable you to effectively manage your products in the market. Our offering includes comprehensive product management services, from strategic planning to implementation and performance monitoring. Our team of experienced product managers possesses not only industry knowledge but also project management and communication skills.
                                        <br />
                                        <br />

                                        With us, you can focus on creating innovative products, responding to customer needs, and adapting to a changing market. By partnering with us, you will gain support throughout the product lifecycle to achieve success and satisfaction for both your customers and your company.</p>
                                    :
                                    <p>Ten istotny proces umożliwi Ci efektywne zarządzanie swoimi produktami na rynku. Nasza oferta obejmuje kompleksowe usługi zarządzania produktem, począwszy od strategicznego planowania, poprzez wdrożenie, aż po monitorowanie wyników. Nasz zespół doświadczonych menedżerów produktu posiada nie tylko wiedzę branżową, ale także umiejętności zarządzania projektami i komunikacji.
                                        <br />
                                        <br />
                                        Z nami możesz skupić się na tworzeniu innowacyjnych produktów, reagowaniu na potrzeby klientów i adaptacji do zmieniającego się rynku. Współpracując z nami, zyskasz wsparcie na każdym etapie cyklu życia produktu, aby osiągnąć sukces i satysfakcję zarówno dla swoich klientów, jak i dla Twojej firmy.</p>
                                }
                                <BlueButtonWhiteBg
                                    text={language === 'english' ? 'Free quote' : 'Wycena'}

                                />
                            </div>
                        </div></div>
                        <div className='number'><span>06</span></div>
                        <div className='title'>{language === 'english' ? <h4>Content Marketing </h4> : <h4>Marketing treści</h4>}<img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                {language === 'english' ?
                                    <p>We are well aware that content marketing is a powerful strategy that helps attract and engage target audiences through valuable and relevant content. From strategy development to content creation and distribution, we are with you every step of the way.
                                        <br />
                                        <br />

                                        Our team understands the importance of creating engaging and informative content. With strategic content marketing, you can establish your brand as a thought leader, increase organic traffic, and build long-term customer relationships. Start creating valuable content with us and attract potential audiences!</p>
                                    :
                                    <p>Jesteśmy doskonale świadomi, że marketing treści jest potężną strategią, która pomaga przyciągać i angażować grupy docelowe poprzez cenne i istotne treści. Od opracowania strategii po tworzenie i dystrybucję treści, jesteśmy z Tobą na każdym kroku.
                                        <br />
                                        <br />
                                        Nasz zespół rozumie znaczenie tworzenia angażujących i informacyjnych treści. Dzięki strategicznemu marketingowi treści możesz ustanowić swoją markę jako lidera myśli, zwiększyć ruch organiczny i budować długoterminowe relacje z klientami. Zacznij tworzyć wartościową treść z nami i przyciągnij potencjalną publiczność!</p>
                                }
                                <BlueButtonWhiteBg
                                    text={language === 'english' ? 'Free quote' : 'Wycena'}

                                />
                            </div>
                        </div></div>
                        <div className='number'><span>07</span></div>
                        <div className='title'>{language === 'english' ? <h4>Business Growth</h4> : <h4>Rozwój Biznesu</h4>} <img src={Arrow2} alt='arrow-right' className='arrow-right' /> <div className='description-parent'>
                            <div className='description-child'>
                                {language === 'english' ?
                                    <p>We will elevate your business to new heights of success. We offer comprehensive business growth services, including strategic planning, process optimization, and market expansion. Our specialists will help you unlock the full potential of your brand, enabling it to dominate top sales rankings.
                                        <br />
                                        <br />

                                        Gain a competitive edge and achieve long-term results through our partnership. Let us be your trusted partner on the journey to business growth and success.</p>
                                    :
                                    <p>Podniesiemy Twój biznes na nowe szczyty sukcesu. Oferujemy kompleksowe usługi wzrostu biznesu, w tym strategiczne planowanie, optymalizację procesów i ekspansję na rynek. Nasi specjaliści pomogą Ci odblokować pełny potencjał Twojej marki, umożliwiając jej dominację w rankingach sprzedaży.
                                        <br />
                                        <br />
                                        Zdobądź przewagę konkurencyjną i osiągnij długoterminowe rezultaty poprzez nasze partnerstwo. Pozwól nam być Twoim zaufanym partnerem w podróży do wzrostu i sukcesu biznesowego.</p>
                                }
                                <BlueButtonWhiteBg
                                    text={language === 'english' ? 'Free quote' : 'Wycena'}

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