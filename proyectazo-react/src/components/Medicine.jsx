import React, { useState } from 'react';
import './careers.css';

function Medicine({ addToCart, userLoggedIn }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // To store error message

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleAddToCart = (item) => {
    if (!userLoggedIn) {
      setErrorMessage("You must be logged in to add items to the cart.");  // Show error message
      return;  // Don't proceed with adding to cart
    }
    addToCart(item);  // Call addToCart if user is logged in
    setErrorMessage(""); // Clear any previous error message
  };

  return (
    <div>
      <div className="card-container-career">
        <h2 className="card-title-career"><u> Medicine </u></h2>
        <div className="card-content-career">
            <p>" The best way to find yourself is to lose yourself in the service of others."</p>
            <p> - Mahatma Gandhi </p>
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
             Pyschology
          </button>
          <div className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/psychologyM.jpg" alt="Psychology" className="accordion-image" />
              <div className="accordion-info">
                <p>Psychology is the scientific study of mind and behavior.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart("Psychology")}>Add to Cart</button>
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
             Medicine
          </button>
          <div className={`accordion-content ${activeIndex === 1 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/medicineM.jpg" alt="Medicine" className="accordion-image" />
              <div className="accordion-info">
                <p>Medicine is the science and practice of caring for patients, managing the diagnosis, 
                            prognosis, prevention, treatment, palliation of their injury or disease, and promoting their health.</p>
                        <ul class="accordion-links">
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Medicine")}>Add to Cart</button>
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
           Nutrition
          </button>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/nutritionM.jpg" alt="Nutrition" className="accordion-image" />
              <div className="accordion-info">
                <p>The nutrition profession encompasses many levels of expertise and a wide variety of career possibilities.</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Nutrition")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(3)} // Índice único para este acordeón
          >
            Nursing
          </button>
          <div className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/nursingM.webp" alt="Nursing" className="accordion-image" />
              <div className="accordion-info">
                <p>Nursing: integrates the art and science of caring and focuses on the protection, promotion, and optimization of health and human functioning; 
                            prevention of illness and injury; facilitation of healing; and alleviation of suffering through compassionate presence.</p>
                        <ul class="accordion-links">
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Nursing")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(4)} // Índice único para este acordeón
          >
            Dental Surgeon
          </button>
          <div className={`accordion-content ${activeIndex === 4 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/dentalM.jpg" alt="InternationalBusiness" className="accordion-image" />
              <div className="accordion-info">
                <p>It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, 
                            most commonly focused on dentition (the development and arrangement of teeth) as well as the oral mucosa</p>
                        <ul class="accordion-links">
                            <li><a href="https://www.up.edu.mx/#" alt="Link UP" target="_blank"> Universidad Panamericana </a></li>
                            <li><a href="https://tec.mx/es" alt="Link UP" target="_blank"> Tecnológico de Monterrey </a></li>
                            <li><a href="https://www.uag.mx/" alt="Link UP" target="_blank"> Universidad Autónoma de Guadalajara </a></li>
                        </ul>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart("Dental Surgeon")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Medicine;
