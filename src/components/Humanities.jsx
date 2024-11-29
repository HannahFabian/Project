import React, { useState } from 'react';
import './careers.css';

function Humanities({ addToCart, userLoggedIn }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAddToCart = (item) => {
    if (!userLoggedIn) {
      setErrorMessage("You must be logged in to add items to the cart.");  
      return;  
    }
    addToCart(item);  
    setErrorMessage(""); 
  };

  return (
    <div>
      <div className="card-container-career">
        <h2 className="card-title-career"><u> Humanities </u></h2>
        <div className="card-content-career">
          <p>" The calling of the humanities is to make us truly human in the best sense of the word."</p>
          <p> - J. Irwin Miller  </p>
        </div>
      </div>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(0)} 
          >
            Musical Studies
          </button>
          <div className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/musicalS.png" alt="MusicalStudies" className="accordion-image" />
              <div className="accordion-info">
              <p> Musicology covers a wide and heterogeneous area of research and is 
                            concerned with the study not only of European and other art music but also of all folk and non-Western music. </p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                        </ul>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart("Musical Studies")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(1)} 
          >
            Communication Studies
          </button>
          <div className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/comunicationH.png" alt="Communication" className="accordion-image" />
              <div className="accordion-info">
              <p>Communication studies (or communication science) is an academic discipline that deals with processes of human communication and behavior, 
                            patterns of communication in interpersonal relationships, social interactions and communication in different cultures. </p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Communication Studies")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(2)} 
          >
           Journaling
          </button>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/journalingH.webp" alt="Journaling" className="accordion-image" />
              <div className="accordion-info">
              <ul class="accordion-links">
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Journaling")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(3)} 
          >
           Audiovisual
          </button>
          <div className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/audiovisualH.jpg" alt="Audiovisual" className="accordion-image" />
              <div className="accordion-info">
              <p>Audiovisual (AV) is electronic media possessing both a sound and a visual component, such as slide-tape presentations,
                            films, television programs, corporate conferencing, church services, and live theater productions.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Audiovisual")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(4)} 
          >
            Digital Art / Animation
          </button>
          <div className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/animacion.jpg" alt="DigitalArt" className="accordion-image" />
              <div className="accordion-info">
              <p>Digital art refers to any artistic work or practice that uses digital technology as part of the creative or presentation process. 
                            It can also refer to computational art that uses and engages with digital media.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Digital Art / Animation")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 5 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(5)} 
          >
            Law Studies
          </button>
          <div className={`accordion-content ${activeIndex === 5 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/leyes.png" alt="LawStudies" className="accordion-image" />
              <div className="accordion-info">
                <p> Law is a set of rules that are created and are enforceable by social or 
                            governmental institutions to regulate behavior,[1] with its precise definition a matter of longstanding debate.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Law Studies")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Humanities;
