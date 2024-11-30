import React, { useState } from 'react';
import './careers.css';

function Other({ addToCart, userLoggedIn }) {
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
        <h2 className="card-title-career"><u> Others </u></h2>
        <div className="card-content-career">
            <p>" Wonder is the beginning of wisdom"</p>
            <p> - Socrates </p>
        </div>
      </div>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(0)} // Índice único para este acordeón
          >
             Architecture
          </button>
          <div className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/architectureO.jpg" alt="Architecture" className="accordion-image" />
              <div className="accordion-info">
              <p>Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Architecture")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(1)} // Índice único para este acordeón
          >
            Gastronomic Business
          </button>
          <div className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/medicineM.jpg" alt="Gastronomic" className="accordion-image" />
              <div className="accordion-info">
                <p>Gastronomy is the study of the relationship between food and culture, the art of preparing 
                            and serving rich or delicate and appetizing food, the cooking styles of particular regions, and the science of good eating.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart("Gastronomic Business")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(2)} // Índice único para este acordeón
          >
            Philosophy
          </button>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/philosophyO.jpg" alt="Philosophy" className="accordion-image" />
              <div className="accordion-info">
                <p>Phylosophy is a systematic study of general and fundamental questions 
                            concerning topics like existence, reason, knowledge, value, mind, and language.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                        </ul>
                     <button className="add-to-cart-btn" onClick={() => handleAddToCart("Philosophy")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Other;