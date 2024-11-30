import React, { useState } from 'react';
import './careers.css';

function Administrative({ addToCart, userLoggedIn }) { 
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
        <h2 className="card-title-career"><u> Administrative </u></h2>
        <div className="card-content-career">
          <p>" The only thing standing between you and outrageous success is continuous progress."</p>
          <p> - Dan Waldschmidt </p>
        </div>
      </div>

      {/* Error message display */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Acordeones con botones para agregar al carrito */}
      <div className="accordion">
        <div className="accordion-item">
          <button
            className={`accordion-button ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleAccordionClick(0)}
          >
            Marketing
          </button>
          <div className={`accordion-content ${activeIndex === 0 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/marketingA.jpg" alt="Marketing" className="accordion-image" />
              <div className="accordion-info">
                <p>Market research firms gather and analyze data about customers, competitors, distributors, and other actors in the marketplace.</p>
                <ul className="accordion-links">
                  <li><a href="https://www.up.edu.mx/#" target="_blank" rel="noopener noreferrer"> Universidad Panamericana </a></li>
                  <li><a href="https://tec.mx/es" target="_blank" rel="noopener noreferrer"> Tecnológico de Monterrey </a></li>
                </ul>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart("Marketing")}>Add to Cart</button>
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
            Finances
          </button>
          <div className={`accordion-content ${activeIndex === 2 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/financesA.jpeg" alt="Finances" className="accordion-image" />
              <div className="accordion-info">
                <p>Finances: the process of raising funds or capital for any kind of expenditure.</p>
                <ul className="accordion-links">
                  <li><a href="https://www.up.edu.mx/#" target="_blank" rel="noopener noreferrer"> Universidad Panamericana </a></li>
                  <li><a href="https://tec.mx/es" target="_blank" rel="noopener noreferrer"> Tecnológico de Monterrey </a></li>
                  <li><a href="https://www.uag.mx/" target="_blank" rel="noopener noreferrer"> Universidad Autónoma de Guadalajara </a></li>
                </ul>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart("Finances")}>Add to Cart</button>
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
            International Business
          </button>
          <div className={`accordion-content ${activeIndex === 3 ? 'open' : ''}`}>
            <div className="accordion-inner">
              <img src="/img/financesA.jpeg" alt="InternationalBusiness" className="accordion-image" />
              <div className="accordion-info">
                <p>International Business</p>
                <ul className="accordion-links">
                  <li><a href="https://www.up.edu.mx/#" target="_blank" rel="noopener noreferrer"> Universidad Panamericana </a></li>
                  <li><a href="https://tec.mx/es" target="_blank" rel="noopener noreferrer"> Tecnológico de Monterrey </a></li>
                </ul>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart("International Business")}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Administrative;
